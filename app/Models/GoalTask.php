<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GoalTask extends Model
{
    use HasFactory;

    protected $table = 'goal_task';
    protected $fillable = [
        'goal_id',
        'task_type',            //技術的な課題  フィジカル的な課題 メンタル的な課題 戦術的な課題
        'task_detail',
        'task_rate',
    ];
}
