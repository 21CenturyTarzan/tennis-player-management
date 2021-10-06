<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GoalStage extends Model
{
    use HasFactory;

    protected $table = 'goal_stage';
    protected $fillable = [
        'goal_id',
        'stage_type',            //長期目標  中期目標  短期目標
        'stage_detail',
        'stage_result'
    ];
}
