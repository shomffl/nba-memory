<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SeriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('series')->insert([
            "id" => 1,
            "status" => "Regular Season"
        ]);
        DB::table('series')->insert([
            "id" => 2,
            "status" => "PlayOff"
        ]);
        DB::table('series')->insert([
            "id" => 3,
            "status" => "Summer League"
        ]);
        DB::table('series')->insert([
            "id" => 4,
            "status" => "Preseason"
        ]);
        DB::table('series')->insert([
            "id" => 1,
            "status" => "All Star"
        ]);
    }
}
