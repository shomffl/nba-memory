<?php

namespace App\Services;

use App\Models\Post;
use App\Models\Game;
use App\Models\Season;

class PostService {

    public static function searchAndSortPosts($season){

        $posts_sort_by_posted = null;
        $posts_sort_by_matched = null;
        $view_option = 0;

        $latest_season = Season::orderBy("id", "desc")->first()->id;

        if($season == null){
            $posts_sort_by_posted = Post::whereHas("game", function ($query) use($latest_season) {
                $query->where("season_id", "=", $latest_season);
            })->with("game.homeTeam", "game.awayTeam")->where("user_id", auth()->id())->get();
        }

        if($season != null){

            switch($season["orderby"]) {
                case 0:
                    $posts_sort_by_posted = Post::whereHas("game", function ($query) use($season) {
                        $query->where("season_id", "=", $season["season"]);
                    })->with("game.homeTeam", "game.awayTeam")->where("user_id", auth()->id())->orderBy("updated_at", "ASC")->get();
                    break;

                case 1:
                    $posts_sort_by_posted = Post::whereHas("game", function ($query) use($season) {
                        $query->where("season_id", "=", $season["season"]);
                    })->with("game.homeTeam", "game.awayTeam")->where("user_id", auth()->id())->orderBy("updated_at", "DESC")->get();
                    break;

                case 2:
                    $view_option = 1;
                    $posts_sort_by_matched = Game::whereHas("posts", function ($query) {
                        $query->where("user_id", auth()->id());
                    })->with("posts", "homeTeam", "awayTeam")->where("season_id", $season["season"])->orderBy("matched_at", "ASC")->get();
                    break;

                case 3:
                    $view_option = 1;
                    $posts_sort_by_matched = Game::whereHas("posts", function ($query) {
                        $query->where("user_id", auth()->id());
                    })->with("posts", "homeTeam", "awayTeam")->where("season_id", $season["season"])->orderBy("matched_at", "DESC")->get();
                    break;
            }

        }

        return [$posts_sort_by_posted, $posts_sort_by_matched, $view_option];
    }
}
