<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GamesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('games')->insert([
            "home_team_id" => 1,
            "away_team_id" => 2,
            "home_team_point" => 100,
            "away_team_point" => 90,
            "home_roster_id" => 1,
            "away_roster_id" => 2,
            "matched_at" => "2022-07-23",
            "series_id" => 1,
        ]);
        DB::table('games')->insert([
            "home_team_id" => 3,
            "away_team_id" => 4,
            "home_team_point" => 110,
            "away_team_point" => 130,
            "home_roster_id" => 3,
            "away_roster_id" => 4,
            "matched_at" => date("Y-m-d"),
            "series_id" => 1,
        ]);
    }
}
