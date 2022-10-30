<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Game;
use App\Models\Team;
use App\Models\Season;
use App\Models\Series;
use App\Models\Link;
use App\Http\Requests\PostRequest;
use App\Services\PostService;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $reqeust, Season $seasons)
    {
        // 投稿詳細ページの戻るボタンを押した際の遷移先を設定
        session(["show/" . auth()->id() => 1]);

        $season = $reqeust->all();

        $sortedPostsData = PostService::searchAndSortPosts($season);

        return Inertia::render("Post/Index",["postsSortByPosted" => $sortedPostsData[0], "postsSortByMatched" => $sortedPostsData[1],
                                             "seasons" => $seasons->orderBy("season", "DESC")->get(), "viewOption" => $sortedPostsData[2]]);
    }

    public function create()
    {
        $games = Game::with("homeTeam","awayTeam","series")->get();
        $games_date = Game::groupBy("matched_at")->get("matched_at");
        return Inertia::render("Post/Create" ,["games" => $games, "gamesDate" => $games_date]);
    }

    public function store(PostRequest $request, Post $post)
    {
        $post->fill($request->all());
        $post->user_id = auth()->id();
        $post->save();

        foreach($request["links"] as $link)
        {
            Link::Create([
                "title" => $link["title"],
                "url" => $link["url"],
                "post_id" => $post->id
            ]);
        }

        // All Teamページからの投稿の場合は、All Teamカレンダーに遷移
        if(session("calendar/" . auth()->id()) == 1){
            return redirect(route('games.index'));
        }

        // Favoriteページからの投稿の場合は、Favoriteカレンダーに遷移
        return redirect(route("favorites.index"));
    }

    public function show(Post $post)
    {
        if(!auth()->user()->can("view", $post)){
            return Inertia::render("Error/403");
        }
        return Inertia::render("Post/Show", ["post" => $post->getPost()]);
    }


    public function edit(Post $post)
    {
        if(!auth()->user()->can("update", $post)){
            return Inertia::render("Error/403");
        }
        return Inertia::render("Post/Edit", ["post" =>$post->getPost()]);
    }

    public function update(PostRequest $request, Post $post)
    {
        $this->authorize("update", $post);

        $test = Link::destroy($post->links);

        $input = $request->all();
        $post->fill($input)->save();

        foreach($request["links"] as $link)
        {
            Link::firstOrCreate([
                "title" => $link["title"],
                "url" => $link["url"],
                "post_id" => $post->id
            ]);
        }

        return redirect(route("posts.show", $post->id));
    }

    public function destroy(Post $post)
    {
        $this->authorize("delete", $post);
        $post->delete();

        // All Teamページからの投稿の場合は、All Teamカレンダーに遷移
        if(session("calendar/" . auth()->id()) == 1){
            return redirect(route('games.index'));
        }

        // Favoriteページからの投稿の場合は、Favoriteカレンダーに遷移
        return redirect(route("favorites.index"));
    }
}
