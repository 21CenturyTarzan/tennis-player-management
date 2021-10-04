<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\ProfilePlayer;
use App\Models\ProfileParent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        if(strcmp(Auth::user()->type, 'parent') == 0){
            $tmp = ProfileParent::where('account_id', Auth::user()->id)->count();
            if($tmp == 0)
                return redirect('/parent/profile/edit');
            else return redirect('/parent/dashboard');
        }
        else if(strcmp(Auth::user()->type, 'player') == 0){
            $tmp = ProfilePlayer::where('account_id', Auth::user()->id)->count();
            if($tmp == 0)
                return redirect('/player/profile/edit');
            else return redirect('/player/info');
        }
        else return redirect('/admin/dashboard');
    }
}
