<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GoalMatch extends Model
{
    use HasFactory;

    protected $table = 'goal_match';
    protected $fillable = [
        'goal_id',
        'match_name',            
        'match_date',
    ];
}
