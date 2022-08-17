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
            "name" => "ATL",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png"
        ]);
        DB::table('teams')->insert([
            "id" => 2,
            "name" => "BOS",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png"
        ]);
        DB::table('teams')->insert([
            "id" => 3,
            "name" => "BKN",
            "logo" => "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/130px-Brooklyn_Nets_newlogo.svg.png"
        ]);
        DB::table('teams')->insert([
            "id" => 4,
            "name" => "CHA",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f3/Hornets_de_Charlotte_logo.svg/1200px-Hornets_de_Charlotte_logo.svg.png"
        ]);
        DB::table('teams')->insert([
            "id" => 5,
            "name" => "CHI",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d1/Bulls_de_Chicago_logo.svg/1200px-Bulls_de_Chicago_logo.svg.png"
        ]);
        DB::table('teams')->insert([
            "id" => 6,
            "name" => "CLE",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/thumb/0/06/Cavs_de_Cleveland_logo_2017.png/150px-Cavs_de_Cleveland_logo_2017.png"
        ]);
        DB::table('teams')->insert([
            "id" => 7,
            "name" => "DAL",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b8/Mavericks_de_Dallas_logo.svg/150px-Mavericks_de_Dallas_logo.svg.png"
        ]);
        DB::table('teams')->insert([
            "id" => 8,
            "name" => "DEN",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Nuggets_de_Denver_2018.png/180px-Nuggets_de_Denver_2018.png"
        ]);
        DB::table('teams')->insert([
            "id" => 9,
            "name" => "DET",
            "logo" => "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Detroit_Pistons_primary_logo_2017.png/150px-Detroit_Pistons_primary_logo_2017.png"
        ]);
        DB::table('teams')->insert([
            "id" => 10,
            "name" => "GSW",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Warriors_de_Golden_State_logo.svg/1200px-Warriors_de_Golden_State_logo.svg.png"
        ]);
        DB::table('teams')->insert([
            "id" => 11,
            "name" => "HOU",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Houston_Rockets_logo_2003.png/330px-Houston_Rockets_logo_2003.png"
        ]);
        DB::table('teams')->insert([
            "id" => 12,
            "name" => "IND",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/thumb/c/cf/Pacers_de_l%27Indiana_logo.svg/1180px-Pacers_de_l%27Indiana_logo.svg.png"
        ]);
        DB::table('teams')->insert([
            "id" => 13,
            "name" => "LAC",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/d/d6/Los_Angeles_Clippers_logo_2010.png"
        ]);
        DB::table('teams')->insert([
            "id" => 14,
            "name" => "LAL",
            "logo" => "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png"
        ]);
        DB::table('teams')->insert([
            "id" => 15,
            "name" => "MEM",
            "logo" => "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1200px-Memphis_Grizzlies.svg.png"
        ]);
        DB::table('teams')->insert([
            "id" => 16,
            "name" => "MIA",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1c/Miami_Heat_-_Logo.svg/1200px-Miami_Heat_-_Logo.svg.png"
        ]);
        DB::table('teams')->insert([
            "id" => 17,
            "name" => "MIL",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/3/34/Bucks2015.png"
        ]);
        DB::table('teams')->insert([
            "id" => 18,
            "name" => "MIN",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d9/Timberwolves_du_Minnesota_logo_2017.png/200px-Timberwolves_du_Minnesota_logo_2017.png"
        ]);
        DB::table('teams')->insert([
            "id" => 19,
            "name" => "NOP",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/thumb/2/21/New_Orleans_Pelicans.png/200px-New_Orleans_Pelicans.png"
        ]);
        DB::table('teams')->insert([
            "id" => 20,
            "name" => "NYK",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/d/dc/NY_Knicks_Logo_2011.png"
        ]);
        DB::table('teams')->insert([
            "id" => 21,
            "name" => "OKC",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Thunder_d%27Oklahoma_City_logo.svg/1200px-Thunder_d%27Oklahoma_City_logo.svg.png"
        ]);
        DB::table('teams')->insert([
            "id" => 22,
            "name" => "ORL",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/b/bd/Orlando_Magic_logo_2010.png"
        ]);
        DB::table('teams')->insert([
            "id" => 23,
            "name" => "PHI",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/4/48/76ers_2016.png"
        ]);
        DB::table('teams')->insert([
            "id" => 24,
            "name" => "PHX",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/5/56/Phoenix_Suns_2013.png"
        ]);
        DB::table('teams')->insert([
            "id" => 25,
            "name" => "POR",
            "logo" => "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png"
        ]);
        DB::table('teams')->insert([
            "id" => 26,
            "name" => "SAC",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
        ]);
        DB::table('teams')->insert([
            "id" => 27,
            "name" => "SAS",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/0/0e/San_Antonio_Spurs_2018.png"
        ]);
        DB::table('teams')->insert([
            "id" => 28,
            "name" => "TOR",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/8/89/Raptors2015.png"
        ]);
        DB::table('teams')->insert([
            "id" => 29,
            "name" => "UTA",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/3/3b/Jazz_de_l%27Utah_logo.png"
        ]);
        DB::table('teams')->insert([
            "id" => 30,
            "name" => "WAS",
            "logo" => "https://upload.wikimedia.org/wikipedia/fr/archive/d/d6/20161212034849%21Wizards2015.png"
        ]);
    }
}
