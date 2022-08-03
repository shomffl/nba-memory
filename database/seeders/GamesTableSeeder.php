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
            "matched_at" => "2022-08-23",
            "series_id" => 1,
        ]);
        DB::table('games')->insert([
            "home_team_id" => 1,
            "away_team_id" => 3,
            "home_team_point" => 100,
            "away_team_point" => 90,
            "home_roster_id" => 1,
            "away_roster_id" => 2,
            "matched_at" => "2022-08-23",
            "series_id" => 1,
        ]);
        DB::table('games')->insert([
            "home_team_id" => 7,
            "away_team_id" => 9,
            "home_team_point" => 100,
            "away_team_point" => 125,
            "home_roster_id" => 7,
            "away_roster_id" => 9,
            "matched_at" => "2022-08-25",
            "series_id" => 1,
        ]);
        DB::table('games')->insert([
            "home_team_id" => 19,
            "away_team_id" => 15,
            "home_team_point" => 100,
            "away_team_point" => 90,
            "home_roster_id" => 19,
            "away_roster_id" => 15,
            "matched_at" => "2022-08-28",
            "series_id" => 1,
        ]);
        DB::table('games')->insert([
            "home_team_id" => 20,
            "away_team_id" => 3,
            "home_team_point" => 100,
            "away_team_point" => 90,
            "home_roster_id" => 29,
            "away_roster_id" => 2,
            "matched_at" => "2022-08-29",
            "series_id" => 1,
        ]);
        DB::table('games')->insert([
            "home_team_id" => 24,
            "away_team_id" => 9,
            "home_team_point" => 100,
            "away_team_point" => 90,
            "home_roster_id" => 29,
            "away_roster_id" => 2,
            "matched_at" => "2022-08-09",
            "series_id" => 1,
        ]);
        DB::table('games')->insert([
            "home_team_id" => 14,
            "away_team_id" => 12,
            "home_team_point" => 100,
            "away_team_point" => 90,
            "home_roster_id" => 29,
            "away_roster_id" => 2,
            "matched_at" => "2022-08-09",
            "series_id" => 1,
        ]);
        DB::table('games')->insert([
            "home_team_id" => 12,
            "away_team_id" => 16,
            "home_team_point" => 100,
            "away_team_point" => 90,
            "home_roster_id" => 29,
            "away_roster_id" => 2,
            "matched_at" => "2022-08-09",
            "series_id" => 1,
        ]);
        DB::table('games')->insert([
            "home_team_id" => 18,
            "away_team_id" => 30,
            "home_team_point" => 100,
            "away_team_point" => 90,
            "home_roster_id" => 29,
            "away_roster_id" => 2,
            "matched_at" => "2022-08-09",
            "series_id" => 1,
        ]);
        DB::table('games')->insert([
            "home_team_id" => 19,
            "away_team_id" => 12,
            "home_team_point" => 100,
            "away_team_point" => 90,
            "home_roster_id" => 29,
            "away_roster_id" => 2,
            "matched_at" => "2022-08-17",
            "series_id" => 1,
        ]);
        DB::table('games')->insert([
            "home_team_id" => 21,
            "away_team_id" => 23,
            "home_team_point" => 100,
            "away_team_point" => 90,
            "home_roster_id" => 29,
            "away_roster_id" => 2,
            "matched_at" => "2022-09-06",
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
