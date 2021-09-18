<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfilePlayer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'profile_player';
    protected $fillable = [
        'account_id',
        'type',
        'name',
        'img',
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
