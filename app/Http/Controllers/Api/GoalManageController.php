<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Goal;

class GoalManageController extends Controller
{
    //

    public function detail(Request $request, $id)
    {
        $player_id = (int)$request->get('player_id');
        $goal_id = (int)$id;
        
        $res = Goal::where([
            'player_id'=> $player_id, 
            'id' => $goal_id
        ])->orderBy('id', 'DESC') -> first();
        
        if($res)
            return ['status_code'=>200, 'params'=>$res];
        return ['status_code'=>400];
    }

    public function last(Request $request)
    {
        $player_id = (int)$request->get('player_id');
        $res = Goal::where('player_id', $player_id)->orderBy('id', 'DESC') -> first();
        if($res)
            return ['status_code'=>200, 'params'=>$res];
        return ['status_code'=>400];
    }
    
    public function list(Request $request)
    {
        $player_id = (int)$request->get('player_id');
        $res = Goal::where('player_id', $player_id)->orderBy('id', 'DESC') -> get();
        if($res)
            return ['status_code'=>200, 'params'=>$res];
        return ['status_code'=>400];
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
        $player_id = (int)$request->get('player_id');

        $res = Goal::create([
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

        // $res = Goal::where('player_id', $player_id)->orderBy('id','DESC')->get();
        
        return ['status_code' => 200, 'params'=>$res];
    }



    public function update(Request $request, $id)
    {
        # code...
        $goal_id = (int) $id;

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
        $player_id = (int)$request->get('player_id');
         
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

    public function delete(Request $request, $id)
    {
        //TODO
        Goal::where('id', (int)$id)->delete();

        $player_id = (int)$request->get('player_id');
        $res = Goal::where('player_id', $player_id)->orderBy('id', 'DESC') -> get();
        if($res)
            return ['status_code'=>200, 'params'=>$res];
        return ['status_code'=>400];
    }

}
