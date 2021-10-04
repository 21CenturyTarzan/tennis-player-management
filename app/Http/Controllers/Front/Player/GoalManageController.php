<?php

namespace App\Http\Controllers\front\player;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GoalManageController extends Controller
{
    //
    public function index()
    {
        # code...
        return view('account.player.goal.index');
    }

    public function edit()
    {
        # code...
        return view('account.player.goal.edit');
    }
}
