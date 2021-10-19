<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGoalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('goals', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->autoIncrement()->comment('ID');
            $table->foreignId('player_id')->constrained('players')->comment('PlayerID');

            $table->longText('match_list');
            $table->longText('stage_list');
            $table->longText('task_list');

            $table->time('study_time_start')->comment('study start time');
            $table->time('study_time_end')->comment('study end time');
            $table->integer('pushups')->comment('腕立て');
            $table->integer('pilates')->comment('腹筋');
            $table->integer('gymnastics')->comment('背筋');
            $table->string('stretching_time')->comment('ストレッチ');
            $table->integer('breakfast')->comment('朝食');
            $table->integer('lunch')->comment('昼食');
            $table->integer('dinner')->comment('夕食');
            $table->time('sleep_time_start');
            $table->time('sleep_time_end');

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
        Schema::dropIfExists('goals');
    }
}
