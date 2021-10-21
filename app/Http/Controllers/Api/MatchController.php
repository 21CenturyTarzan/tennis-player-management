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
        $res = Tournament::where('player_id', $player_id)->with('tournament_result')->orderBy('id', 'DESC')->get();
        if($res)
            return ['status_code'=>200, 'params'=>$res];
        return ['status_code'=>400];
    }


    //////////////////////////


    public function prepare_store(Request $request)
    {
        $tournament_name = $request->get('tournament_name');
        $tournament_date = $request->get('tournament_date');
        $opponent_name = $request->get('opponent_name');
        $opponent_club = $request->get('opponent_club');
        $surface = $request->get('surface');
        $round = $request->get('round');
        $weather = $request->get('weather');
        $category = $request->get('category');
        $mood = (int)$request->get('mood');
        $caution_list = $request->get('caution_list');       //Dont Change Json decode. input raw data

        $player_id = (int)$request->get('player_id');

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
            'mood' => $mood,
            'caution_list' => $caution_list
        ]);

        return ['status_code' => 200, 'params'=>$res];
    }

    public function prepare_update(Request $request, $id)
    {
        //TODO
        $tournament_name = $request->get('tournament_name');
        $tournament_date = $request->get('tournament_date');
        $opponent_name = $request->get('opponent_name');
        $opponent_club = $request->get('opponent_club');
        $surface = $request->get('surface');
        $round = $request->get('round');
        $weather = $request->get('weather');
        $category = $request->get('category');
        $mood = (int)$request->get('mood');
        $caution_list = $request->get('caution_list');       //Dont Change Json decode. input raw data

        $player_id = $request -> get('player_id');

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
            'mood' => $mood,
            'caution_list' => $caution_list
        ]);


        return ['status_code' => 200];
    }



    /////////////////////////

    public function result_store(Request $request)
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

    public function result_update(Request $request, $id)
    {
        $caution_rate =    $request->get('caution_rate');
        $effort_eval = (int)$request->get('effort_eval');
        $play_eval =   (int)$request->get('play_eval');
        $tactics =         $request->get('tactics');
        $improvement =     $request->get('improvement');
        $check_mental =    $request->get('check_mental');
        $about_opponent =  $request->get('about_opponent');
        $score_list =      $request->get('score_list');

        $tournament_id = (int) $id;

        TournamentResult::where('tournament_id', $tournament_id)->update([
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
