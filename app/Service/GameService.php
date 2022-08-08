<?php

namespace App\Service;

class GameService {

    public function getGameSchedules($games){
        $schedules_list = [];
        foreach($games as $game)
        {
           $data = [
                "display" => "background",
                "date" =>  $game->matched_at,
            ];
            array_push($schedules_list,$data);
        }

        return $schedules_list;
    }

    public function getAllSchedules($games, $posts){
        $schedules_list = [];
        foreach($games as $game)
        {
           $data = [
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
