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
            "logo" => "/logo/team-logo/atl.png"
        ]);
        DB::table('teams')->insert([
            "id" => 2,
            "name" => "BOS",
            "logo" => "/logo/team-logo/bos.png"
        ]);
        DB::table('teams')->insert([
            "id" => 3,
            "name" => "BKN",
            "logo" => "/logo/team-logo/bkn.png"
        ]);
        DB::table('teams')->insert([
            "id" => 4,
            "name" => "CHA",
            "logo" => "/logo/team-logo/cha.png"
        ]);
        DB::table('teams')->insert([
            "id" => 5,
            "name" => "CHI",
            "logo" => "/logo/team-logo/chi.png"
        ]);
        DB::table('teams')->insert([
            "id" => 6,
            "name" => "CLE",
            "logo" => "/logo/team-logo/cle.png"
        ]);
        DB::table('teams')->insert([
            "id" => 7,
            "name" => "DAL",
            "logo" => "/logo/team-logo/dal.png"
        ]);
        DB::table('teams')->insert([
            "id" => 8,
            "name" => "DEN",
            "logo" => "/logo/team-logo/den.png"
        ]);
        DB::table('teams')->insert([
            "id" => 9,
            "name" => "DET",
            "logo" => "/logo/team-logo/det.png"
        ]);
        DB::table('teams')->insert([
            "id" => 10,
            "name" => "GSW",
            "logo" => "/logo/team-logo/gsw.png"
        ]);
        DB::table('teams')->insert([
            "id" => 11,
            "name" => "HOU",
            "logo" => "/logo/team-logo/hou.png"
        ]);
        DB::table('teams')->insert([
            "id" => 12,
            "name" => "IND",
            "logo" => "/logo/team-logo/ind.png"
        ]);
        DB::table('teams')->insert([
            "id" => 13,
            "name" => "LAC",
            "logo" => "/logo/team-logo/lac.png"
        ]);
        DB::table('teams')->insert([
            "id" => 14,
            "name" => "LAL",
            "logo" => "/logo/team-logo/lal.png"
        ]);
        DB::table('teams')->insert([
            "id" => 15,
            "name" => "MEM",
            "logo" => "/logo/team-logo/mem.png"
        ]);
        DB::table('teams')->insert([
            "id" => 16,
            "name" => "MIA",
            "logo" => "/logo/team-logo/mia.png"
        ]);
        DB::table('teams')->insert([
            "id" => 17,
            "name" => "MIL",
            "logo" => "/logo/team-logo/mil.png"
        ]);
        DB::table('teams')->insert([
            "id" => 18,
            "name" => "MIN",
            "logo" => "/logo/team-logo/min.png"
        ]);
        DB::table('teams')->insert([
            "id" => 19,
            "name" => "NOP",
            "logo" => "/logo/team-logo/nop.png"
        ]);
        DB::table('teams')->insert([
            "id" => 20,
            "name" => "NYK",
            "logo" => "/logo/team-logo/nyk.png"
        ]);
        DB::table('teams')->insert([
            "id" => 21,
            "name" => "OKC",
            "logo" => "/logo/team-logo/okc.png"
        ]);
        DB::table('teams')->insert([
            "id" => 22,
            "name" => "ORL",
            "logo" => "/logo/team-logo/orl.png"
        ]);
        DB::table('teams')->insert([
            "id" => 23,
            "name" => "PHI",
            "logo" => "/logo/team-logo/phi.png"
        ]);
        DB::table('teams')->insert([
            "id" => 24,
            "name" => "PHX",
            "logo" => "/logo/team-logo/phx.png"
        ]);
        DB::table('teams')->insert([
            "id" => 25,
            "name" => "POR",
            "logo" => "/logo/team-logo/por.png"
        ]);
        DB::table('teams')->insert([
            "id" => 26,
            "name" => "SAC",
            "logo" => "/logo/team-logo/sac.png"
        ]);
        DB::table('teams')->insert([
            "id" => 27,
            "name" => "SAS",
            "logo" => "/logo/team-logo/sas.png"
        ]);
        DB::table('teams')->insert([
            "id" => 28,
            "name" => "TOR",
            "logo" => "/logo/team-logo/tor.png"
        ]);
        DB::table('teams')->insert([
            "id" => 29,
            "name" => "UTA",
            "logo" => "/logo/team-logo/uta.png"
        ]);
        DB::table('teams')->insert([
            "id" => 30,
            "name" => "WAS",
            "logo" => "/logo/team-logo/was.png"
        ]);
    }
}
