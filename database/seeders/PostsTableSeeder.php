<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Post;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Post::factory()->count(100)->create();
        DB::table("posts")->insert([
            "user_id" => 1,
            "game_id" => 1570,
            "title" => "test",
            "detail" => "test",
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s")
        ]);
        DB::table("posts")->insert([
            "user_id" => 1,
            "game_id" => 1571,
            "title" => "test",
            "detail" => "test",
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s")
        ]);
        DB::table("posts")->insert([
            "user_id" => 1,
            "game_id" => 1572,
            "title" => "test",
            "detail" => "test",
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s")
        ]);
        DB::table("posts")->insert([
            "user_id" => 1,
            "game_id" => 1573,
            "title" => "test",
            "detail" => "test",
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s")
        ]);
        DB::table("posts")->insert([
            "user_id" => 1,
            "game_id" => 1574,
            "title" => "test",
            "detail" => "test",
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s")
        ]);
        DB::table("posts")->insert([
            "user_id" => 1,
            "game_id" => 13,
            "title" => "test",
            "detail" => "test",
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s")
        ]);
        DB::table("posts")->insert([
            "user_id" => 1,
            "game_id" => 14,
            "title" => "test",
            "detail" => "test",
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s")
        ]);
        DB::table("posts")->insert([
            "user_id" => 1,
            "game_id" => 15,
            "title" => "test",
            "detail" => "test",
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s")
        ]);
        DB::table("posts")->insert([
            "user_id" => 1,
            "game_id" => 1625,
            "title" => "test",
            "detail" => "test",
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s")
        ]);
    }
}
