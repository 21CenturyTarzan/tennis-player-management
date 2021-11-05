<?php

namespace App\Http\Controllers\Front\Player;

use App\Http\Controllers\Controller;
use App\Models\Player;
use App\Models\User;
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
        return view('account.player.profile');
    }

    public function edit()
    {
        return view('account.player.profile');
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
    public function store(Request $request)
    {
        //
        $gender = $request->get('gender');
        $birth  = $request->get('birth');
        $birth = date_create_from_format('Y-m-d', $birth);
        $height   = (float)$request->get('height');
        $weight = (float)$request->get('weight');
        $school = $request->get('school');
        $grade  = $request->get('grade');
        $phone  = $request->get('phone');
        $address= $request->get('address');
        $lesson = $request->get('lesson');
        $career = $request->get('career');

        $path = 'uploads/avatar';
        if (!file_exists(public_path($path))) {
            mkdir(public_path($path), 0777, true);
        }
        if ($file = $request->get('image')) {
            if(strcmp($file,'/images/blank.png')==0){
                $img_url = '/images/blank.png';
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
            Player::create([
                'account_id' => Auth::user()->id,
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
            User::where(['id'=>Auth::id()])->first()->update([
                'img'=> $img_url
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
