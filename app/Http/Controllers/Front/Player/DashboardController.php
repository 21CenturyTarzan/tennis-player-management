<?php

namespace App\Http\Controllers\Front\Player;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\User;
use App\Models\Player;
use App\Models\Rank;


class DashboardController extends Controller
{
    //
    public function index()
    {
        if(strcmp(Auth::user()->type, 'player') == 0)
        {
            $res['player_id'] = Player::where('account_id', Auth::user()->id)->first()->id;
            return view('account.player.index', $res);
        }
        else return view('errors.404');
    }

}
