<?php

namespace App\Service;

class GameService {

    public function getSchedules($games, $posts){
        $schedules_list = [];
        foreach($games as $game)
        {
           $data = [
                "display" => "background",
                "date" =>  $game->matched_at,
            ];
            array_push($schedules_list,$data);
        }
        foreach($posts as $post)
        {
            $data = [
                "title" => $post->game->homeTeam->name . " vs " . $post->game->awayTeam->name,
                "date" => $post->game->matched_at,
            ];
            array_push($schedules_list,$data);
        }

        return $schedules_list;
    }
}
