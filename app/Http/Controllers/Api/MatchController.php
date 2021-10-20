<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Player;
use App\Models\Rank;
use App\Models\Goal;
use App\Models\GoalStage;
use App\Models\Analysis;
use App\Models\Tournament;
use App\Models\TournamentResult;

class MatchController extends Controller
{
    //

    public function match(Request $request)
    {
        $res['question_list'] = Analysis::get();

        $player_id = (int)$request->get('player_id');
        $res['tournament'] = Tournament::where('player_id', $player_id)->with('result')->orderBy('id', 'DESC')->first();

        
        return ['status_code'=>200, 'params'=>$res];
    }

    public function list(Request $request)
    {
        $player_id = (int)$request->get('player_id');
        $res = Tournament::where('player_id', $player_id)->with('result')->orderBy('id', 'DESC')->get();

        if($res)
            return ['status_code'=>200, 'params'=>$res];
        
        return ['status_code'=>400];
        
    }

    public function analysis(Request $request)
    {
        $res = Analysis::get();

        return ['status_code'=>200, 'params'=>$res];
    }

    public function delete(Request $request, $id)
    {
        //TODO
        TournamentResult::where('tournament_id', (int)$id)->delete();
        Tournament::where('id', (int)$id)->delete();

        $player_id = (int)$request->get('player_id');
        $res = Tournament::where('player_id', $player_id)->with('result')->orderBy('id', 'DESC')->get();
        if($res)
            return ['status_code'=>200, 'params'=>$res];
        return ['status_code'=>400];
    }
}
