<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTournamentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tournament', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->autoIncrement()->comment('ID');
            $table->foreignId('player_id')->constrained('players')->comment('PlayerID');
           
            $table->string('category', 255);
            $table->string('tournament_name', 2048);
            $table->date('tournament_date');
            $table->string('opponent_name', 255);
            $table->string('opponent_club', 2048);
            $table->string('surface', 255);
            $table->string('round', 255);
            $table->string('weather', 255);
            $table->longText('caution_list');

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
        Schema::dropIfExists('tournament');
    }
}
