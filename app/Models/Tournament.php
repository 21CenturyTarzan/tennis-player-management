<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tournament extends Model
{
    use HasFactory;

    protected $table = 'tournament';
    protected $fillable = [
        'player_id',
        'category',
        'tournament_name',
        'tournament_date',
        'opponent_name',
        'opponent_club',
        'surface',
        'round',
        'weather',
        'mood',
        'caution_list',
    ];

    public function result()
    {
        return $this->belongsTo(TournamentResult::class, 'id');
    }
    
}
