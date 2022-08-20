<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Game;
use App\Models\Team;
use App\Models\Post;
use App\Models\Series;
use App\Models\Roster;
use App\Service\GameService;
use Illuminate\Support\Facades\Redirect;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $games = Game::with("homeTeam","awayTeam","series")->get();
        $posts = Post::with("game.homeTeam","game.awayTeam")->where("user_id", auth()->id())->get();
        $schedules = new GameService;
        $games_by_date = Game::with("homeTeam","awayTeam")->orderBy("matched_at")->get()->groupBy("matched_at");
        $posts_by_date = Post::with("game.homeTeam","game.awayTeam")->where("user_id", auth()->id())->get()->groupBy("game.matched_at");

        return Inertia::render("Game/Index",["schedules" => $schedules->getAllSchedules($games, $posts), "gamesByDate" => $games_by_date, "postsByDate" => $posts_by_date]);
    }

    public function indexAdmin()
    {
        $games = Game::with("homeTeam","awayTeam","series")->get();
        $schedules = new GameService;
        $games_by_date = Game::with("homeTeam","awayTeam")->orderBy("matched_at")->get()->groupBy("matched_at");

        return Inertia::render("Admin/Game/Index",["schedules" => $schedules->getGameSchedules($games), "gamesByDate" => $games_by_date]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Series $series)
    {
        $teams = Team::with("rosters")->get();
        return Inertia::render("Admin/Game/Subscribe", ["teams" => $teams, "series" => $series->get()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Game $game)
    {
        $request->validate([
            "matched_at" => "required",
            "home_team_point" => "required",
            "away_team_point" => "required"
        ]);

        $input = $request->all();
        $home_team = Team::with("rosters")->find($input["home_team_id"])->rosters->last();
        $away_team = Team::with("rosters")->find($input["away_team_id"])->rosters->last();

        $game->fill($input);
        $game->home_roster_id = $home_team->id;
        $game->away_roster_id = $away_team->id;
        $game->save();

        return Redirect::route("admin.games.index");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function show(Game $game)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function edit(Game $game)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Game $game)
    {
        $input = $request->all();
        $home_team_point = $input["home_team_point"];
        $away_team_point = $input["away_team_point"];
        $game->fill(["home_team_point" => $home_team_point, "away_team_point" => $away_team_point])->save();
        return Redirect::route("admin.games.index");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function destroy(Game $game)
    {
        //
    }
}
