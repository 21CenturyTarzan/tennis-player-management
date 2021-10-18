<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTournamentResultTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tournament_result', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->autoIncrement()->comment('ID');
            $table->foreignId('tournament_id')->constrained('tournament')->comment('TournamentID');
            $table->longText('caution_rate');
            $table->tinyInteger('effort_eval');
            $table->tinyInteger('play_eval');
            $table->longText('score');
            $table->longText('about_opponent');
            $table->longText('tactics');
            $table->longText('improvement');
            $table->longText('check_mental');

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
        Schema::dropIfExists('tournament_result');
    }
}
