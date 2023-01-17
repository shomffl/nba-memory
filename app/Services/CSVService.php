<?php

namespace App\Services;

use App\Models\User;
use App\Models\Post;
use App\Models\Link;

class CSVService {

    public static function output(){

        $users = User::all();
        $posts = Post::all();
        $links = Link::all();

        $now = now()->format('Y-m-d');


        // 書き込み用ファイルを開く
        $f_users = fopen($now . "-" . "users.csv", 'w');
        if ($f_users) {

            // データの書き込み
            foreach ($users as $user) {
                fputcsv($f_users, $user->toArray());
            }
        }
        // ファイルを閉じる
        fclose($f_users);


        // 書き込み用ファイルを開く
        $f_posts = fopen($now . "-" . "posts.csv", 'w');
        if ($f_posts) {

            // データの書き込み
            foreach ($posts as $post) {
                fputcsv($f_posts, $post->toArray());
            }
        }
        // ファイルを閉じる
        fclose($f_posts);


        $f_links = fopen($now . "-" . "links.csv", 'w');
        if ($f_links) {

            // データの書き込み
            foreach ($links as $link) {
                fputcsv($f_links, $link->toArray());
            }
        }

        // ファイルを閉じる
        fclose($f_links);


        dd(now()->format('Y-m-d'));
    }
}
