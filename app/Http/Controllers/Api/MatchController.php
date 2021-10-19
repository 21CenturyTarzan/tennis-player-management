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

class MatchController extends Controller
{
    //

    public function match(Request $r)
    {
        $res['question_list'] = Analysis::get();

        $player_id = (int)$r->get('player_id');
        $res['tournament'] = Tournament::where('player_id', $player_id)->with('result')->orderBy('id', 'DESC')->first();

        
        return ['status_code'=>200, 'params'=>$res];
    }
}
