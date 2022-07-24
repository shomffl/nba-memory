<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        "game_id",
        "title",
        "detail"
    ];

    public function game()
    {
        return $this->belongsTo(Game::class);
    }
}