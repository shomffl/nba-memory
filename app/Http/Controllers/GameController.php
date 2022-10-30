<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Game;
use App\Models\Team;
use App\Models\Post;
use App\Models\Series;
use App\Models\Roster;
use App\Services\GameService;
use Illuminate\Support\Facades\Redirect;

class GameController extends Controller
{
    public function index()
    {
        // sessionにroute情報を保存。All Teamページに遷移した際に1を保存。
        session(["calendar/" . auth()->id() =>  1]);

        // 投稿詳細ページの戻るボタンを押した際の遷移先を設定
        session(["show/" . auth()->id() => 2]);

        $games_by_date = Game::with("homeTeam","awayTeam")->orderBy("matched_at")->get()->groupBy("matched_at");
        $posts_by_date = Post::with("game.homeTeam","game.awayTeam")->where("user_id", auth()->id())->get()->groupBy("game.matched_at");

        return Inertia::render("Game/Index",["schedules" => GameService::getAllCalendarSchedules(),
                                             "gamesByDate" => $games_by_date, "postsByDate" => $posts_by_date, "teams" => Team::all()]);
    }

    public function indexAdmin()
    {
        $games_by_date = Game::with("homeTeam","awayTeam")->orderBy("matched_at")->get()->groupBy("matched_at");

        return Inertia::render("Admin/Game/Index",["schedules" => GameService::getGameCalendarSchedules(), "gamesByDate" => $games_by_date]);
    }

    public function create(Series $series)
    {
        $teams = Team::with("rosters")->get();
        return Inertia::render("Admin/Game/Subscribe", ["teams" => $teams, "series" => $series->get()]);
    }

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

    public function update(Request $request, Game $game)
    {
        $input = $request->all();
        $home_team_point = $input["home_team_point"];
        $away_team_point = $input["away_team_point"];
        $game->fill(["home_team_point" => $home_team_point, "away_team_point" => $away_team_point])->save();
        return Redirect::route("admin.games.index");
    }
}
