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

    public function account()
    {
        return $this->belongsTo(User::class, 'account_id');
    }

    public function rank()
    {
        return $this->belongsTo(Rank::class, 'account_id');
    }

    public function ranklist()
    {
        return $this->hasMany(RankList::class, 'account_id');
    }

}
