<?php

namespace App\Http\Controllers\Front\Player;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\User;
use App\Models\ProfilePlayer;
use App\Models\Rank;


class DashboardController extends Controller
{
    //
    public function index()
    {
        $res['rank'] = Rank::where('account_id', Auth::user()->id)->with('ranklist') -> orderBy('id', 'DESC') -> first();
        if(strcmp(Auth::user()->type, 'player') == 0)
            return view('player.dashboard', $res);
        else return view('errors.404');
    }

    public function info()
    {
        
    }

}
