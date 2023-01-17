<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use SplFileObject;
use Carbon\Carbon;

class LinksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $file = new SplFileObject("database/data/links.csv");
        $file->setFlags(
            \SplFileObject::READ_CSV |
            \SplFileObject::READ_AHEAD |
            \SplFileObject::SKIP_EMPTY |
            \SplFileObject::DROP_NEW_LINE
        );
        $list = [];


        foreach($file as $line) {
            $list[] = [
                "id" => $line[0],
                "title" => $line[1],
                "url" => $line[2],
                "post_id" => $line[3],
                "created_at" => new Carbon($line[4]),
                "updated_at" => new Carbon($line[5]),
            ];
        }

        DB::table("links")->insert($list);
    }
}
