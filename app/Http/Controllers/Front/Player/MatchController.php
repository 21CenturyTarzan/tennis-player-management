<?php

namespace App\Http\Controllers\front\player;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MatchController extends Controller
{
    //
    public function index()
    {
        # code...
        return view('account.player.match');
    }

    public function edit()
    {
        # code...
        return view('account.player.match.edit');
    }
}
