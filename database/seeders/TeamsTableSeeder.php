<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeamsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('teams')->insert([
            "id" => 1,
            "name" => "ATL"
        ]);
        DB::table('teams')->insert([
            "id" => 2,
            "name" => "BOS"
        ]);
        DB::table('teams')->insert([
            "id" => 3,
            "name" => "BKN"
        ]);
        DB::table('teams')->insert([
            "id" => 4,
            "name" => "CHA"
        ]);
        DB::table('teams')->insert([
            "id" => 5,
            "name" => "CHI"
        ]);
        DB::table('teams')->insert([
            "id" => 6,
            "name" => "CLE"
        ]);
        DB::table('teams')->insert([
            "id" => 7,
            "name" => "DAL"
        ]);
        DB::table('teams')->insert([
            "id" => 8,
            "name" => "DEN"
        ]);
        DB::table('teams')->insert([
            "id" => 9,
            "name" => "DET"
        ]);
        DB::table('teams')->insert([
            "id" => 10,
            "name" => "GSW"
        ]);
        DB::table('teams')->insert([
            "id" => 11,
            "name" => "HOU"
        ]);
        DB::table('teams')->insert([
            "id" => 12,
            "name" => "IND"
        ]);
        DB::table('teams')->insert([
            "id" => 13,
            "name" => "LAC"
        ]);
        DB::table('teams')->insert([
            "id" => 14,
            "name" => "LAL"
        ]);
        DB::table('teams')->insert([
            "id" => 15,
            "name" => "MEM"
        ]);
        DB::table('teams')->insert([
            "id" => 16,
            "name" => "MIA"
        ]);
        DB::table('teams')->insert([
            "id" => 17,
            "name" => "MIL"
        ]);
        DB::table('teams')->insert([
            "id" => 18,
            "name" => "MIN"
        ]);
        DB::table('teams')->insert([
            "id" => 19,
            "name" => "NOP"
        ]);
        DB::table('teams')->insert([
            "id" => 20,
            "name" => "NYK"
        ]);
        DB::table('teams')->insert([
            "id" => 21,
            "name" => "OKC"
        ]);
        DB::table('teams')->insert([
            "id" => 22,
            "name" => "ORL"
        ]);
        DB::table('teams')->insert([
            "id" => 23,
            "name" => "PHI"
        ]);
        DB::table('teams')->insert([
            "id" => 24,
            "name" => "PHX"
        ]);
        DB::table('teams')->insert([
            "id" => 25,
            "name" => "POR"
        ]);
        DB::table('teams')->insert([
            "id" => 26,
            "name" => "SAC"
        ]);
        DB::table('teams')->insert([
            "id" => 27,
            "name" => "SAS"
        ]);
        DB::table('teams')->insert([
            "id" => 28,
            "name" => "TOR"
        ]);
        DB::table('teams')->insert([
            "id" => 29,
            "name" => "UTA"
        ]);
        DB::table('teams')->insert([
            "id" => 30,
            "name" => "WAS"
        ]);
    }
}
