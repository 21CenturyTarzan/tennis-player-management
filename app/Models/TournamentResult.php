<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TournamentResult extends Model
{
    use HasFactory;

    protected $table = 'tournament_result';
    protected $fillable = [
        'tournament_id',
        'caution_rate',
        'effort_eval',
        'play_eval',
        'score_list',
        'about_opponent',
        'tactics',
        'improvement',
        'check_mental',
    ];
}
