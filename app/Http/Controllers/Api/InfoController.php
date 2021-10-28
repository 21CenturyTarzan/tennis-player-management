<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

use App\Models\Player;
use App\Models\Rank;
use App\Models\RankList;
use App\Models\Goal;
use App\Models\GoalStage;
use App\Models\Analysis;
use App\Models\Tournament;
use App\Models\User;

class InfoController extends Controller
{
    //

    public function info(Request $request){
        $player_id = (int)$request->get('player_id');
        // $res['rank'] = Rank::where('player_id', $player_id)->with('rank_list') -> orderBy('id', 'DESC') -> first();
        // $res['profile'] = Player::where('id', $player_id)->with('account')->first();
        $res = Player::where('id', $player_id)->with('account')->first();

        return ['status_code' => 200, 'params' => $res];
    }

    
    public function updateProfile(Request $request)
    {
        $name = json_decode($request->get('name'));
        $gender = json_decode($request->get('gender'));
        $birth  =  json_decode($request->get('birth'));
        $birth = date_create_from_format('Y-m-d', $birth);
        $height   = (float)json_decode($request->get('height'));
        $weight = (float)json_decode($request->get('weight'));
        $school = json_decode($request->get('school'));
        $grade  = json_decode($request->get('grade'));
        $phone  = json_decode($request->get('phone'));
        $address= json_decode($request->get('address'));
        $lesson = json_decode($request->get('lesson'));
        $career = json_decode($request->get('career'));
        $jta_u_18 = (int)json_decode($request->get('jta_u_18'));
        $kanto_u_18 = (int)json_decode($request->get('kanto_u_18'));
        $rank_list = $request->get('rank_list');            //dont change json
        $title1 = json_decode($request->get('title1'));
        $title2 = json_decode($request->get('title2'));

        $path = 'uploads/avatar';
        if (!file_exists(public_path($path))) {
            mkdir(public_path($path), 0777, true);
        }
        if ($file = $request->get('image')) {
            if(str_contains($file,'/images') || str_contains($file,'/uploads')){
                $img_url = $file;
            }
            else{

                $img_name = time(). rand(1, 100) . '.' . explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
                $replace = substr($file, 0, strpos($file, ',')+1); 
                $image = str_replace($replace, '', $file); 
                $image = str_replace(' ', '+', $image);     
                \File::put(public_path($path). $img_name, base64_decode($image));
                $img_url = '/'.$path.$img_name;
            }
        }

        $player_id = (int) $request->get('player_id');

        try {
            
            Player::where('id', $player_id)->first()->update([
                'gender' => $gender,
                'birth' => $birth,
                'height' => $height,
                'weight' => $weight,
                'school' => $school,
                'grade' => $grade,
                'phone' => $phone,
                'address' => $address,
                'lesson' => $lesson,
                'career' => $career,
                'jta_u_18' => $jta_u_18,
                'kanto_u_18' => $kanto_u_18,
                'rank_list' => $rank_list,
                'title1' => $title1,
                'title2' => $title2
            ]);

            $account_id = Player::where('id', $player_id)->first()->account_id;

            User::where('id', $account_id)->first()->update([
                'name'=>$name,
                'img'=> $img_url
            ]);
            return ['status_code' => 200];
        } catch (\Throwable $th) {
            throw $th;
            return ['status_code' => 400];
        }
    }


    public function updatePassword(Request $request)
    {
            // バリデーションエラー
        $validate = Validator::make($request->all(), [
            'password' => 'required|min:8|max:72|confirmed',
        ]);

        if ($validate->fails()) {
            return ['status_code' => 422, 'error_messages' => $validate->errors()];
        }

        $update = [
            'password' => Hash::make($request->password)
        ];

        $account_id = Player::where('id', $request->player_id)->first()->account_id;

        try {
            User::where('id', $account_id)->update($update);
        } catch (\Throwable $e) {
            // 失敗
            Log::critical($e->getMessage());
            return ['status_code' => 400, 'error_messages' => ['パスワード変更に失敗しました']];
        }

        // 成功
        return ['status_code' => 200, 'success_messages' => ['パスワード変更成功しました']];
    }
}
