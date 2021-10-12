<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGoalTaskTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('goal_task', function (Blueprint $table) {
            
            $table->unsignedBigInteger('id')->autoIncrement()->comment('ID');
            $table->foreignId('goal_id')->constrained('goals')->comment('GoalID');
            $table->string('task_type');
            $table->string('icon');
            $table->string('task_detail');
            $table->integer('task_rate');

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
        Schema::dropIfExists('goal_task');
    }
}
