<?php

namespace App\Service;

use App\Models\Game;
use App\Models\Post;

class GameService {

    public static function getGameCalendarSchedules(){
        $games = Game::with("homeTeam","awayTeam","series")->get();

        $schedules_list = [];
        foreach($games as $game)
        {
           $data = [
                "color" => "#889C9B",
                "display" => "background",
                "date" =>  $game->matched_at,
            ];
            array_push($schedules_list,$data);
        }

        return $schedules_list;
    }

    public static function getAllCalendarSchedules(){
        $games = Game::with("homeTeam","awayTeam","series")->get();
        $posts = Post::with("game.homeTeam","game.awayTeam")->where("user_id", auth()->id())->get();

        $schedules_list = [];
        foreach($games as $game)
        {
           $data = [
                "color" => "#889C9B",
                "display" => "background",
                "date" => $game->matched_at,
                "match" => $game->homeTeam->name . " vs " . $game->awayTeam->name,
            ];
            array_push($schedules_list,$data);
        }

        // カレンダーで当日の色を変えたいため、背景色のみのデータを追加
        $today = [
                "color" => "#D6D58E",
                "display" => "background",
                "date" => now()->format("Y-m-d"),
            ];
        array_push($schedules_list, $today);

        foreach($posts as $post)
        {
            $data = [
                "title" => $post->game->homeTeam->name . " vs " . $post->game->awayTeam->name,
                "date" => $post->game->matched_at,
                "game_id" => $post->game_id,
                "matched_at" => $post->game->matched_at,
                "post_title" => $post->title,
                "post_detail" => $post->detail,
            ];
            array_push($schedules_list,$data);
        }

        return $schedules_list;
    }

    public static function getFavoriteTeamSchedules(){
        $games = Game::with("homeTeam","awayTeam");
        $posts = Post::with("game.homeTeam","game.awayTeam");

        foreach(auth()->user()->favoriteTeams as $team)
        {
            // お気に入りチームの試合のみを取得
            $games->orWhere("home_team_id", $team->id)->orWhere("away_team_id", $team->id);

            // お気に入りチームの試合感想のみを取得
            $posts->orWhereHas("game", function($query) use($team) {
                $query->where("home_team_id", $team->id)->orWhere("away_team_id",$team->id);
            });
        }

        $schedules_list = [];
        foreach($games->get() as $game)
        {
           $data = [
                "color" => "#127369",
                "display" => "background",
                "date" => $game->matched_at,
                "match" => $game->homeTeam->name . " vs " . $game->awayTeam->name,
            ];
            array_push($schedules_list,$data);
        }

        // カレンダーで当日の色を変えたいため、背景色のみのデータを追加
        $today = [
                "color" => "#DAFDBA",
                "display" => "background",
                "date" => now()->format("Y-m-d"),
            ];
        array_push($schedules_list, $today);

        foreach($posts->get() as $post)
        {
            $data = [
                "title" => $post->game->homeTeam->name . " vs " . $post->game->awayTeam->name,
                "date" => $post->game->matched_at,
                "game_id" => $post->game_id,
                "matched_at" => $post->game->matched_at,
                "post_title" => $post->title,
                "post_detail" => $post->detail,
            ];
            array_push($schedules_list,$data);
        }

        return $schedules_list;
    }
}
