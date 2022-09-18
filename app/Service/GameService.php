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
}
