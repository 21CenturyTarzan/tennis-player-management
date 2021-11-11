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
use Illuminate\Support\Facades\Log;

class MatchController extends Controller
{
    //

    public function detail(Request $request, $id)
    {
        $player_id = (int)$request->get('player_id');
        $res['tournament'] = Tournament::where([
            'id' => (int)$id,
            'player_id' => $player_id
        ])->with('tournament_result')->orderBy('id', 'DESC')->first();

        $res['analysis'] = Analysis::get();

        return ['status_code'=>200, 'params'=>$res];
    }

    public function list(Request $request)
    {
        $player_id = (int)$request->get('player_id');
     
        $res = Tournament::where('player_id', $player_id)->orderBy('id', 'DESC')->with('tournament_result')->get()->toArray();

        if($res)
            return ['status_code'=>200, 'params'=>$res];
        
        return ['status_code'=>400];
        
    }
    
    public function delete(Request $request, $id)
    {
        //TODO
        TournamentResult::where('tournament_id', (int)$id)->delete();
        Tournament::where('id', (int)$id)->delete();

        $player_id = (int)$request->get('player_id');
        $res = Tournament::where('player_id', $player_id)->with('tournament_result')->orderBy('id', 'DESC')->get();
        if($res)
            return ['status_code'=>200, 'params'=>$res];
        return ['status_code'=>400];
    }


    //////////////////////////


    public function prepare_store(Request $request)
    {
        $tournament_name = $request->tournament_name;
        $tournament_date = $request->tournament_date;
        $opponent_name = $request->opponent_name;
        $opponent_club = $request->opponent_club;
        $surface =       $request->surface;
        $round =         $request->round;
        $weather =       $request->weather;
        $category =      $request->category;
        $caution_list =  $request->caution_list;       //Dont Change Json decode. input raw data
        $player_id = (int)$request->player_id;

        $res = Tournament::create([
            'player_id' => $player_id,
            'category' => $category,
            'tournament_name' => $tournament_name,
            'tournament_date' => $tournament_date,
            'opponent_name' => $opponent_name,
            'opponent_club' => $opponent_club,
            'surface' => $surface,
            'round' => $round,
            'weather' => $weather,
            'caution_list' => $caution_list
        ]);

        return ['status_code' => 200, 'params'=>$res];
    }

    public function prepare_update(Request $request, $id)
    {
        //TODO
        $tournament_name = $request->tournament_name;
        $tournament_date = $request->tournament_date;
        $opponent_name = $request->opponent_name;
        $opponent_club = $request->opponent_club;
        $surface =       $request->surface;
        $round =         $request->round;
        $weather =       $request->weather;
        $category =      $request->category;
        $caution_list =  $request->caution_list;       //Dont Change Json decode. input raw data
        $player_id = (int)$request->player_id;

        Tournament::where([
            'id' => (int)$id,
            'player_id' => $player_id
        ])->first()->update([
            'category' => $category,
            'tournament_name' => $tournament_name,
            'tournament_date' => $tournament_date,
            'opponent_name' => $opponent_name,
            'opponent_club' => $opponent_club,
            'surface' => $surface,
            'round' => $round,
            'weather' => $weather,
            'caution_list' => $caution_list
        ]);


        return ['status_code' => 200];
    }



    /////////////////////////

    public function result_store(Request $request)
    {
        //TODO
        $caution_rate =    $request->caution_rate;
        $effort_eval = (int)$request->effort_eval;
        $play_eval =   (int)$request->play_eval;
        $mood =        (int)$request->mood;
        $tactics =         $request->tactics;
        $improvement =     $request->improvement;
        $check_mental =    $request->check_mental;
        $about_opponent =  $request->about_opponent;
        $score_list =      $request->score_list;

        $tournament_id = $request->tournament_id;

        TournamentResult::create([
            'tournament_id' => $tournament_id,
            'caution_rate' => $caution_rate,
            'effort_eval' => $effort_eval,
            'mood' => $mood,
            'play_eval' => $play_eval,
            'score_list' => $score_list,
            'about_opponent' => $about_opponent,
            'tactics' => $tactics,
            'improvement' => $improvement,
            'check_mental' => $check_mental
        ]);

        return ['status_code' => 200];
    }

    public function result_update(Request $request, $id)
    {
        $caution_rate =    $request->caution_rate;
        $effort_eval = (int)$request->effort_eval;
        $play_eval =   (int)$request->play_eval;
        $mood =        (int)$request->mood;
        $tactics =         $request->tactics;
        $improvement =     $request->improvement;
        $check_mental =    $request->check_mental;
        $about_opponent =  $request->about_opponent;
        $score_list =      $request->score_list;

        $tournament_id = $id;

        TournamentResult::where('tournament_id', $tournament_id)->update([
            'tournament_id' => $tournament_id,
            'caution_rate' => $caution_rate,
            'effort_eval' => $effort_eval,
            'play_eval' => $play_eval,
            'mood' => $mood,
            'score_list' => $score_list,
            'about_opponent' => $about_opponent,
            'tactics' => $tactics,
            'improvement' => $improvement,
            'check_mental' => $check_mental
        ]);

        return ['status_code' => 200];
    }

}
