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
use App\Service\PostService;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $reqeust, Season $seasons)
    {
        $season = $reqeust->all();
        $latest_season = Season::orderBy("id", "desc")->first()->id;

        $sortedPostsData = PostService::searchAndSortPosts($season, $latest_season);

        return Inertia::render("Post/Index",["postsSortByPosted" => $sortedPostsData[0], "postsSortByMatched" => $sortedPostsData[1], "seasons" => $seasons->orderBy("season", "DESC")->get(), "viewOption" => $sortedPostsData[2]]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $games = Game::with("homeTeam","awayTeam","series")->get();
        $games_date = Game::groupBy("matched_at")->get("matched_at");
        return Inertia::render("Post/Create" ,["games" => $games, "gamesDate" => $games_date]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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

        return Redirect::route('games.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        if(!auth()->user()->can("view", $post)){
            return Inertia::render("Error/403");
        }
        return Inertia::render("Post/Show", ["post" => $post->load("game.homeTeam", "game.awayTeam", "links"), "previousURL" => \url()->previous()]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        if(!auth()->user()->can("update", $post)){
            return Inertia::render("Error/403");
        }
        return Inertia::render("Post/Edit", ["post" => Post::with("game.homeTeam", "game.awayTeam")->find($post->id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(PostRequest $request, Post $post)
    {
        $this->authorize("update", $post);
        $input = $request->all();
        $post->fill($input)->save();
        return redirect("/posts/" . $post->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $this->authorize("delete", $post);
        $post->delete();
        return redirect("/games");
    }
}
