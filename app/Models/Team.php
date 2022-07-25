<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    public function rosters()
    {
        return $this->hasMany(Roster::class, 'team_id');
    }
}
