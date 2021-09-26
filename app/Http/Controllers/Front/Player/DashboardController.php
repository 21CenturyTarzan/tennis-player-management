<?php

namespace App\Http\Controllers\Front\Player;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\User;


class DashboardController extends Controller
{
    //
    public function index()
    {
        return view('player.dashboard');
    }

    public function info()
    {
        
    }

}
