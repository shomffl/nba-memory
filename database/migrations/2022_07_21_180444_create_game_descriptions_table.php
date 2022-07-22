<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_descriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId("game_id")->constrained("games");
            $table->integer("home_team_point");
            $table->integer("away_team_point");
            $table->foreignId("home_roster_id")->constrained("rosters");
            $table->foreignId("away_roster_id")->constrained("rosters");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('game_descriptions');
    }
};
