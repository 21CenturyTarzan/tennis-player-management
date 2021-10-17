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
        $stage_list  = json_decode($request->get('stage_list'));
        $match_list  = json_decode($request->get('match_list'));
        $task_list  = json_decode($request->get('task_list'));
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

        $cnt = GoalStage::where(['player_id'=>$player_id])->count();

        if($cnt == 0)
        {
            foreach($stage_list as $item){
                GoalStage::create([
                    'player_id' => $player_id,
                    'stage_type' => $item->stage_type,            //長期目標  中期目標  短期目標
                    'stage_match'=> $item->stage_match,
                    'stage_goal'=> $item->stage_goal,
                    'stage_result'=> $item->stage_result
                ]);
            }
        }
        else{
            foreach($stage_list as $item){
                GoalStage::where('id', $item->id)->update([
                    'player_id' => $player_id,
                    'stage_type' => $item->stage_type,            //長期目標  中期目標  短期目標
                    'stage_match'=> $item->stage_match,
                    'stage_goal'=> $item->stage_goal,
                    'stage_result'=> $item->stage_result
                ]);
            }
        }


        Goal::create([
            'player_id'=>$player_id,                
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
        
        
        $goal_id = Goal::select('id')->orderBy('id', 'DESC')->first()->id;

        foreach($match_list as $item){
            GoalMatch::create([
                'goal_id' => $goal_id,
                'match_name'=> $item->match_name,   
                'match_date'=> $item->match_date,
                'match_goal'=> $item->match_goal,
            ]);
        }


        foreach($task_list as $item){
            GoalTask::create([
                'goal_id' => $goal_id,
                'task_type' => $item->task_type,            //技術的な課題  フィジカル的な課題 メンタル的な課題 戦術的な課題
                'icon' => $item->icon,
                'task_detail' => $item->task_detail,
                'task_rate' => $item->task_rate
            ]);
        }
        return ['status_code' => 200];
    }

    public function update(Request $request)
    {
        # code...
        $stage_list  = json_decode($request->get('stage_list'));
        $match_list  = json_decode($request->get('match_list'));
        $task_list  = json_decode($request->get('task_list'));
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

        
        foreach($stage_list as $item){
            GoalStage::where('id', $item->id)->update([
                'player_id' => $player_id,
                'stage_type' => $item->stage_type,            //長期目標  中期目標  短期目標
                'stage_match'=> $item->stage_match,
                'stage_goal'=> $item->stage_goal,
                'stage_result'=> $item->stage_result
            ]);
        }
        
        Goal::where('id', $goal_id) -> update([                
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
        
        foreach($match_list as $item){
            GoalMatch::where('id', $item->id)->update([
                'match_name'=> $item->match_name,   
                'match_date'=> $item->match_date,
                'match_goal'=> $item->match_goal,
            ]);
        }


        foreach($task_list as $item){
            GoalTask::where('id', $item->id)->update([
                'task_type' => $item->task_type,            //技術的な課題  フィジカル的な課題 メンタル的な課題 戦術的な課題
                'icon' => $item->icon,
                'task_detail' => $item->task_detail,
                'task_rate' => $item->task_rate
            ]);
        }
        return ['status_code' => 200];
    }
}
