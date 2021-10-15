<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Caution extends Model
{
    use HasFactory;

    protected $table = 'caution';
    protected $fillable = [
        'tournament_id',
        'caution',
        'rate'
    ];
}
