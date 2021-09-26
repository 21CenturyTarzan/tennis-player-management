<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RankList extends Model
{
    use HasFactory;

    protected $table = 'rank';
    protected $fillable = [
        'rank_id',
        'index',
        'rank_type',
        'rank_value'
    ];
}
