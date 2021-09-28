<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rank extends Model
{
    use HasFactory;

    protected $table = 'ranks';
    protected $fillable = [
        'account_id',
        'jta_u_18',
        'kanto_u_18',
        'title1',
        'title2'
    ];

    public function rank_list()
    {
        return $this->hasMany(RankList::class);
    }
}
