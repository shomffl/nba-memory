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

class FavoriteController extends Controller
{
    public function index()
    {
        $games_by_date = Game::with("homeTeam","awayTeam")->orderBy("matched_at")->get()->groupBy("matched_at");
        $posts_by_date = Post::with("game.homeTeam","game.awayTeam")->where("user_id", auth()->id())->get()->groupBy("game.matched_at");

        return Inertia::render("Favorite/Index",["schedules" => GameService::getAllCalendarSchedules(), "gamesByDate" => $games_by_date, "postsByDate" => $posts_by_date, "teams" => Team::all()]);
    }

}