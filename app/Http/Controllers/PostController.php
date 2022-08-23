<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Game;
use App\Models\Team;
use App\Models\Season;
use App\Http\Requests\PostRequest;


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

        if($season == null){
            $posts = Post::whereHas("game", function ($query) use($latest_season) {
                $query->where("season_id", "=", $latest_season);
            })->with("game.homeTeam", "game.awayTeam")->get();
        }

        if($season != null){
            $posts = Post::whereHas("game", function ($query) use($season) {
                $query->where("season_id", "=", $season["season"]);
            })->with("game.homeTeam", "game.awayTeam")->where("user_id", auth()->id())->get();
        }


        return Inertia::render("Post/Index",["posts" => $posts, "seasons" => $seasons->get()]);
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
            return Inertia::render("Error/Forbidden");
        }
        return Inertia::render("Post/Show", ["post" => Post::with("game.homeTeam", "game.awayTeam")->find($post->id)]);
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
            return Inertia::render("Error/Forbidden");
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
        $post->delete();
        return redirect("/games");
    }
}
