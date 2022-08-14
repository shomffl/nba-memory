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
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->foreignId("home_team_id")->constrained("teams");
            $table->foreignId("away_team_id")->constrained("teams");
            $table->integer("home_team_point");
            $table->integer("away_team_point");
            $table->foreignId("home_roster_id")->constrained("rosters")->nullable();
            $table->foreignId("away_roster_id")->constrained("rosters")->nullable();
            $table->date("matched_at");
            $table->foreignId("series_id")->constrained("series")->nullable();
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
        Schema::dropIfExists('games');
    }
};
