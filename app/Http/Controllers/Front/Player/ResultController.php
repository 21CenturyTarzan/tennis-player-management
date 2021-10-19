<?php

namespace App\Http\Controllers\front\player;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Player;
use App\Models\TournamentResult;

class ResultController extends Controller
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

    public function store(Request $request)
    {
        //TODO
        $caution_rate =    $request->get('caution_rate');
        $effort_eval = (int)$request->get('effort_eval');
        $play_eval =   (int)$request->get('play_eval');
        $tactics =         $request->get('tactics');
        $improvement =     $request->get('improvement');
        $check_mental =    $request->get('check_mental');
        $about_opponent =  $request->get('about_opponent');
        $score_list =      $request->get('score_list');

        $tournament_id = $request->get('tournament_id');

        TournamentResult::create([
            'tournament_id' => $tournament_id,
            'caution_rate' => $caution_rate,
            'effort_eval' => $effort_eval,
            'play_eval' => $play_eval,
            'score_list' => $score_list,
            'about_opponent' => $about_opponent,
            'tactics' => $tactics,
            'improvement' => $improvement,
            'check_mental' => $check_mental
        ]);

        return ['status_code' => 200];
    }

}
