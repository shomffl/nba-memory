<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Game;
use File;

class Games2022TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = File::get("database/data/2022_games.json");
        $games = json_decode($json);

        foreach($games as $key => $value){
            Game::create([
                "home_team_id" => $value->home_team_id,
                "away_team_id" => $value->away_team_id,
                "home_team_point" => $value->home_team_point,
                "away_team_point" => $value->away_team_point,
                "matched_at" => $value->matched_at,
                "series_id" => 1,
                "season_id" => 2,
            ]);
        }
    }
}
