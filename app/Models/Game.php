<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    protected $fillable = [
        "home_team_id",
        "away_team_id",
        "matched_at",
        "series_id",
        "home_team_point",
        "away_team_point",
        "home_roster_id",
        "away_roster_id",
    ];

    public function homeTeam()
    {
        return $this->belongsTo(Team::class, "home_team_id");
    }

    public function awayTeam()
    {
        return $this->belongsTo(Team::class, "away_team_id");
    }

    public function series()
    {
        return $this->belongsTo(Series::class);
    }
}
