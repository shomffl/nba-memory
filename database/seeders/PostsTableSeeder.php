<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use SplFileObject;
use Carbon\Carbon;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $file = new SplFileObject("database/data/posts.csv");
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
                "user_id" => $line[1],
                "game_id" => $line[2],
                "title" => $line[3],
                "detail" =>$line[4],
                "created_at" => new Carbon($line[5]),
                "updated_at" => new Carbon($line[6]),
            ];
        }

        DB::table("posts")->insert($list);
    }
}
