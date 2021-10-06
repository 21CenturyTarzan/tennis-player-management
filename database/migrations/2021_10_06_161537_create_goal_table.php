<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGoalTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    protected $fillable = [
        'account_id',                
        'study_time_start',          //勉強時間
        'study_time_end',          
        'pushups',           //腕立て
        'pilates',              //腹筋
        'gymnastics',            //背筋      
        'stretching_time',   //ストレッチ
        'breakfast',        //朝食
        'lunch',        //昼食
        'dinner',        //夕食
        'sleep_time_start',      //睡眠時間
        'sleep_time_end',     
    ];
    public function up()
    {
        Schema::create('goal', function (Blueprint $table) {

            $table->unsignedBigInteger('id')->autoIncrement()->comment('ID');
            $table->foreignId('account_id')->constrained('users')->comment('AccountID');
            

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
        Schema::dropIfExists('goal');
    }
}


