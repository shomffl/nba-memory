<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RostersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rosters')->insert([
            "team_id" => 1,
        ]);
        DB::table('rosters')->insert([
            "team_id" => 2,
        ]);
        DB::table('rosters')->insert([
            "team_id" => 3,
        ]);
        DB::table('rosters')->insert([
            "team_id" => 4,
        ]);
    }
}
