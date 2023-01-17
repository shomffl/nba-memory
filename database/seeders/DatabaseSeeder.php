<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UsersTableSeeder::class,
            SeasonsTableSeeder::class,
            TeamsTableSeeder::class,
            SeriesTableSeeder::class,
            Games2021TableSeeder::class,
            Games2022TableSeeder::class,
            AdminsTableSeeder::class,
            PostsTableSeeder::class,
            LinksTableSeeder::class
        ]);
    }
}
