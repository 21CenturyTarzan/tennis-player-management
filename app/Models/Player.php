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
        'jta_u_18',
        'kanto_u_18',
        'rank_list',
        'title1',
        'title2',
    ];

    public function account()
    {
        return $this->belongsTo(User::class, 'account_id');
    }
}
