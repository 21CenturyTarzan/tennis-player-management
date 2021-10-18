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

    public function store(Request $request)
    {
        ///////////////////////////////////////////////////////
        $stage_list  = $request->get('stage_list');      //Dont convert Json decode
        $match_list  = $request->get('match_list');      //Dont convert Json decode
        $task_list   = $request->get('task_list');         //Dont convert Json decode
        
        $study_start_time  = $request->get('study_start_time');
        $study_end_time  = $request->get('study_end_time');
        $sleep_start_time  = $request->get('sleep_start_time');
        $sleep_end_time  = $request->get('sleep_end_time');
        $pushups  = $request->get('pushups');
        $pilates  = $request->get('pilates');
        $gymnastics  = $request->get('gymnastics');
        $stretching_time  = $request->get('stretching_time');
        $breakfast  = (int)$request->get('breakfast');
        $lunch  = (int)$request->get('lunch');
        $dinner  = (int)$request->get('dinner');
        /////////////////////////////////////////////////////
        $player_id = Player::where('account_id', Auth::id())->first()->id;

        Goal::create([
            'player_id'=> $player_id,
            'match_list'=> $match_list,               
            'stage_list'=> $stage_list,               
            'task_list'=> $task_list,               
            'study_time_start'=> $study_start_time,
            'study_time_end'=> $study_end_time,          
            'pushups' => $pushups,           //腕立て
            'pilates'=> $pilates,            //腹筋
            'gymnastics'=> $gymnastics ,           //背筋      
            'stretching_time'=>$stretching_time,   //ストレッチ
            'breakfast'=>$breakfast,        //朝食
            'lunch'=>$lunch,        //昼食
            'dinner'=>$dinner,        //夕食
            'sleep_time_start'=>$sleep_start_time,      //睡眠時間
            'sleep_time_end'=> $sleep_end_time 
        ]);
        
        return ['status_code' => 200];
    }

    public function update(Request $request)
    {
        # code...
        $stage_list  = $request->get('stage_list');      //Dont convert Json decode
        $match_list  = $request->get('match_list');      //Dont convert Json decode
        $task_list   = $request->get('task_list');         //Dont convert Json decode
        
        $study_start_time  = $request->get('study_start_time');
        $study_end_time  = $request->get('study_end_time');
        $sleep_start_time  = $request->get('sleep_start_time');
        $sleep_end_time  = $request->get('sleep_end_time');
        $pushups  = $request->get('pushups');
        $pilates  = $request->get('pilates');
        $gymnastics  = $request->get('gymnastics');
        $stretching_time  = $request->get('stretching_time');
        $breakfast  = (int)$request->get('breakfast');
        $lunch  = (int)$request->get('lunch');
        $dinner  = (int)$request->get('dinner');
        /////////////////////////////////////////////////////
        $player_id = Player::where('account_id', Auth::id())->first()->id;

        $goal_id = (int)$request->get('goal_id');

        
        Goal::where('id', $goal_id) -> update([          
            'match_list'=> $match_list,               
            'stage_list'=> $stage_list,               
            'task_list'=> $task_list,                     
            'study_time_start'=> $study_start_time,
            'study_time_end'=> $study_end_time,          
            'pushups' => $pushups,           //腕立て
            'pilates'=> $pilates,            //腹筋
            'gymnastics'=> $gymnastics ,           //背筋      
            'stretching_time'=>$stretching_time,   //ストレッチ
            'breakfast'=>$breakfast,        //朝食
            'lunch'=>$lunch,        //昼食
            'dinner'=>$dinner,        //夕食
            'sleep_time_start'=>$sleep_start_time,      //睡眠時間
            'sleep_time_end'=> $sleep_end_time 
        ]);
        
       
        return ['status_code' => 200];
    }
}
