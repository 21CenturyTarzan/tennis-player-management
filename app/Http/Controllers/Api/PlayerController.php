<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Player;

class PlayerController extends Controller
{
    //
    public function index(){
        return Player::orderBy('created_at')->with('account')->get();
    }

    public function show(){
        
    }
}
