<?php

namespace App\Http\Controllers\Front\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\ProfilePlayer;
use App\Models\ProfileParent;


class DashboardController extends Controller
{
    //
    public function index()
    {
        if(strcmp(Auth::user()->type, 'admin')==0)
            return view('admin.dashboard');
        else if(strcmp(Auth::user()->type, 'player') == 0)
            return view('player.dashboard');
        else if(strcmp(Auth::user()->type, 'parent') == 0)
            return view('parent.dashboard');
        // else return view('')
    }

    public function show(Request $request){
        
    }
}
