<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Post;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{

    protected $model = Post::class;

    public function definition()
    {
        return [
            "user_id" => $this->faker->numberBetween($min=1, $max=2),
            "game_id" => $this->faker->numberBetween($min=600, $max=1500),
            "title" => $this->faker->word,
            "detail" => $this->faker->paragraph,
            "created_at" => date("Y-m-d H:i:s"),
            "updated_at" => date("Y-m-d H:i:s")
        ];
    }
}
