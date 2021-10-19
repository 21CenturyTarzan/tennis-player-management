<?php

namespace App\Http\Controllers\front\player;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Goal;
use App\Models\GoalMatch;
use App\Models\GoalStage;
use App\Models\GoalTask;
use App\Models\Player;

class GoalManageController extends Controller
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
