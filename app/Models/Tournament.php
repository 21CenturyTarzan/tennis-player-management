<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tournament extends Model
{
    use HasFactory;

    protected $table = 'tournament';
    protected $fillable = [
        'id',
        'player_id',
        'category',
        'tournament_name',
        'tournament_date',
        'opponent_name',
        'opponent_club',
        'surface',
        'round',
        'weather',
        'caution_list'
    ];

    public function tournament_result()
    {
        return $this->hasOne(TournamentResult::class, 'tournament_id');
    }

}
