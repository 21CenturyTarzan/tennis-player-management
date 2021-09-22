<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    use HasFactory;

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'notice';
    protected $fillable = [
        'to',
        'from',
        'msg',
        'state'
    ];

    public function account()
    {
        return $this->belongsTo(User::class, 'from');
    }

    public function profile()
    {
        return $this->belongsTo(ProfilePlayer::class, 'from');
    }
}
