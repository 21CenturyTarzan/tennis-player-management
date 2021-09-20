<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProfilePlayer;

class PlayerController extends Controller
{
    //
    public function index(){
        return ProfilePlayer::orderBy('created_at')->get();
    }

    public function show(){
        
    }
}
