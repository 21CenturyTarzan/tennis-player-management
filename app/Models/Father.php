<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Father extends Model
{
    use HasFactory;
    protected $table = 'fathers';
    protected $fillable = [
        'account_id',
        'gender',
        'birth',
        'phone',
    ];
}
