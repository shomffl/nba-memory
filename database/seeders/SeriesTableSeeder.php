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
            "code" => "RS",
            "name" => "Regular Season"
        ]);
        DB::table('series')->insert([
            "id" => 2,
            "code" => "PO",
            "name" => "PlayOff"
        ]);
        DB::table('series')->insert([
            "id" => 3,
            "code" => "SR",
            "name" => "Summer League"
        ]);
        DB::table('series')->insert([
            "id" => 4,
            "code" => "PR",
            "name" => "Preseason"
        ]);
        DB::table('series')->insert([
            "id" => 5,
            "code" => "AS",
            "name" => "All Star"
        ]);
    }
}
