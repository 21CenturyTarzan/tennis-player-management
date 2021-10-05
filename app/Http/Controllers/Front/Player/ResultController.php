<?php

namespace App\Http\Controllers\front\player;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ResultController extends Controller
{
    //
    public function index()
    {
        # code...
        return view('account.player.result');
    }

    public function edit()
    {
        # code...
        return view('account.player.result.edit');
    }
}
