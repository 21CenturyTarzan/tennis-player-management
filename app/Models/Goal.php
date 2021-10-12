<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{
    use HasFactory;

    protected $table = 'goals';
    protected $fillable = [
        'player_id',                
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

    public function goal_task()
    {
        return $this->hasMany(GoalTask::class);
    }

    public function goal_stage()
    {
        return $this->hasMany(GoalStage::class);
    }

    public function goal_match()
    {
        return $this->hasMany(GoalMatch::class);
    }
}
