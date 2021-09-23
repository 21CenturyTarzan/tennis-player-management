<?php

namespace App\Http\Controllers\Front\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\ProfilePlayer;
use App\Models\ProfileParent;
use App\Models\Children;
use App\Models\User;


class PlayerController extends Controller
{
    //
    public function index(){
        if( strcmp(Auth::user()->type, 'parent')== 0) 
        {
            $child_email = Children::select('child_email')->where('parent_id', Auth::user()->id)->first()->child_email;
            $child_id = User::select('id')->where('email', $child_email)-> first();
            if($child_id)
                return ProfilePlayer::where('account_id', $child_id) -> orderBy('created_at')->with('account')->get();
            else return 'failed';
        }
        else 
            return ProfilePlayer::orderBy('created_at')->with('account')->get();
    }

    public function show(){
        
    }
}
