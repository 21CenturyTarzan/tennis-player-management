<?php

namespace App\Http\Controllers\Front\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Player;
use App\Models\Father;


class DashboardController extends Controller
{
    //
    public function index()
    {

        if(strcmp(Auth::user()->type, 'admin')==0)
            return view('admin.dashboard');
        else return view('errors.404');

    }

    public function show(Request $request){
        
    }
}
