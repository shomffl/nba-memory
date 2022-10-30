<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Game;
use App\Models\Team;
use App\Models\Post;
use App\Models\User;
use App\Services\GameService;
use Illuminate\Support\Facades\Redirect;

class FavoriteController extends Controller
{
    public function index()
    {
        // お気に入りチームを選択していなかった場合は、登録ページへ遷移
        if(auth()->user()->favoriteTeams->count() == 0){
            return redirect(route("favorites.create"));
        }

        // sessionにroute情報を保存。Favoriteページに遷移した際に2を保存。
        session(["calendar/" . auth()->id() => 2]);

        // 投稿詳細ページの戻るボタンを押した際の遷移先を設定
        session(["show/" . auth()->id() => 3]);

        $games_by_date = Game::with("homeTeam","awayTeam");
        $posts_by_date = Post::with("game.homeTeam","game.awayTeam");

        foreach(auth()->user()->favoriteTeams as $team)
        {
            // お気に入りチームの試合のみを取得
            $games_by_date->orWhere("home_team_id", $team->id)->orWhere("away_team_id", $team->id);

            // お気に入りチームの試合感想のみを取得
            $posts_by_date->orWhereHas("game", function($query) use($team) {
                $query->where("home_team_id", $team->id)->orWhere("away_team_id",$team->id);
            });
        }

        return Inertia::render("Favorite/Index",["schedules" => GameService::getFavoriteTeamSchedules(), "gamesByDate" => $games_by_date->get()->groupBy("matched_at"),
                                                 "postsByDate" => $posts_by_date->where("user_id", auth()->id())->get()->groupBy("game.matched_at"), "teams" => Team::all()]);
    }

    public function create()
    {
        $team_ids = [];
        foreach(auth()->user()->favoriteTeams as $team)
        {
            array_push($team_ids, $team->id);
        }
        return Inertia::render("Favorite/Create", ["teams" => Team::all(), "favoriteTeamIds" => $team_ids]);
    }

    public function store(Request $request)
    {
        // 過去のお気に入りチームを全て削除
        auth()->user()->favoriteTeams()->detach();

        // 送信されたお気に入りチームを全て登録＾
        auth()->user()->favoriteTeams()->attach($request->all()["selectedTeamIds"]);

        return redirect(route("favorites.index"));
    }

}
