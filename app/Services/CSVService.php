<?php

namespace App\Services;

use App\Models\Post;
use App\Models\Link;

class CSVService {

    public static function output(){
        $posts = Post::all();
        $links = Link::all();

        $now = now()->format('Y-m-d');

        // 書き込み用ファイルを開く
        $f_posts = fopen("csv/" . $now .  "-posts.csv", 'w');
        if ($f_posts) {

            // データの書き込み
            foreach ($posts as $post) {
                fputcsv($f_posts, $post->toArray());
            }
        }
        // ファイルを閉じる
        fclose($f_posts);


        $f_links = fopen("csv/" . $now .  "-links.csv", 'w');
        if ($f_links) {

            // データの書き込み
            foreach ($links as $link) {
                fputcsv($f_links, $link->toArray());
            }
        }

        // ファイルを閉じる
        fclose($f_links);
    }
}
