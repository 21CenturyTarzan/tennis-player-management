<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\ProfilePlayer;
use App\Models\ProfileParent;
use App\Models\Children;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(strcmp(Auth::user()->type, 'parent') == 0){
            $tmp = ProfileParent::where('account_id', Auth::user()->id)->count();
            if($tmp == 0)
                return view('profile.new');
            else return redirect('/dashboard');
        }
        else if(strcmp(Auth::user()->type, 'player') == 0){
            $tmp = ProfilePlayer::where('account_id', Auth::user()->id)->count();
            if($tmp == 0)
                return view('profile.new');
            else return redirect('/dashboard');
        }
        else return redirect('/dashboard');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store_player(Request $request)
    {
        //
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

        $path = 'uploads/';
        if (!file_exists(public_path($path))) {
            mkdir(public_path($path), 0777, true);
        }
        if ($file = $request->get('image')) {
            if(strcmp($file,'/images/avatar.jpg')==0){
                $img_url = '/images/avatar.jpg';
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
        try {
            ProfilePlayer::create([
                'account_id' => Auth::user()->id,
                'type' => Auth::user()->type,
                'name' => Auth::user()->name,
                'img' => $img_url,
                'gender' => $gender,
                'birth' => $birth,
                'height' => $height,
                'weight' => $weight,
                'school' => $school,
                'grade' => $grade,
                'phone' => $phone,
                'address' => $address,
                'lesson' => $lesson,
                'career' => $career
            ]);
            return 'success';
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function store_parent(Request $request){
        $gender = json_decode($request->get('gender'));
        $birth  =  json_decode($request->get('birth'));
        $birth = date_create_from_format('Y-m-d', $birth);
        $phone  = json_decode($request->get('phone'));
        $child_email= json_decode($request->get('childEmail'));

        $path = 'uploads/';
        if (!file_exists(public_path($path))) {
            mkdir(public_path($path), 0777, true);
        }
        if ($file = $request->get('image')) {
            if(strcmp($file,'/images/avatar.jpg')==0){
                $img_url = '/images/avatar.jpg';
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
        try {
            ProfileParent::create([
                'account_id' => Auth::user()->id,
                'type' => Auth::user()->type,
                'name' => Auth::user()->name,
                'img' => $img_url,
                'gender' => $gender,
                'birth' => $birth,
                'phone' => $phone
            ]);
            Children::create([
                'parent_id' => Auth::user()->id,
                'child_email' => $child_email
            ]);

            return 'success';

        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function show(Profile $profile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function edit(Profile $profile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Profile $profile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function destroy(Profile $profile)
    {
        //
    }
}
