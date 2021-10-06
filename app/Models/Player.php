<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    use HasFactory;
    protected $table = 'players';
    protected $fillable = [
        'account_id',
        'gender',
        'birth',
        'phone',
        'height',
        'weight',
        'school',
        'grade',
        'address',
        'lesson',
        'career',
    ];
}
