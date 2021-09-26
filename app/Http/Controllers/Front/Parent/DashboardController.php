<?php

namespace App\Http\Controllers\front\parent;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProfilePlayer;
use App\Models\ProfileParent;

use Illuminate\Support\Facades\Auth;


class DashboardController extends Controller
{
    //
    public function index()
    {
        if(strcmp(Auth::user()->type, 'parent')==0)
            return view('parent.dashboard');
        else return view('errors.404');

    }

    public function show(Request $request){
        
    }
}