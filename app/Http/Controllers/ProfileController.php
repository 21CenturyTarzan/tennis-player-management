<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Player;
use App\Models\Father;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(strcmp(Auth::user()->type, 'parent') == 0){
            $tmp = Father::where('account_id', Auth::user()->id)->count();
            if($tmp == 0)
                return view('parent.profile');
            else return redirect('/parent/dashboard');
        }
        else if(strcmp(Auth::user()->type, 'player') == 0){
            $tmp = Player::where('account_id', Auth::user()->id)->count();
            if($tmp == 0)
                return view('player.profile');
            else return redirect('/player/dashboard');
        }
        else return redirect('/admin/dashboard');
    }
}
