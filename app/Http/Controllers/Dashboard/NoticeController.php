<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Notice;

class NoticeController extends Controller
{
    //
    public function index()
    {
        # code...
        return Notice::where('to', Auth::user()->id)->orderBy('created_at', 'DESC')->with('account', 'profile')->limit(10)->get();
    }

    public function read(Request $request)
    {
        $msg_id = (int)$request->id;
        $state = Notice::where('id', $msg_id)->first()->state;
        if(strcmp($state,'unread') == 0){
            Notice::where(['id'=>$msg_id])->first()->update([
                'state'=> 'read'
            ]);
        }

        return Notice::where('to', Auth::user()->id)->orderBy('created_at', 'DESC')->with('account', 'profile')->limit(10)->get();
    }

    public function saveReplyMsg(Request $request){
        $msg_id = (int)$request->id;
        Notice::where(['id'=>$msg_id])->first()->update([
            'state'=> 'reply'
        ]);

        $to = Notice::where(['id'=>$msg_id])->first()->from;

        Notice::create([
            'from' => Auth::user()->id,
            'to' => $to,
            'msg' => $request->get('msg'),
            'state' => 'unread'
        ]);
        
        return Notice::where('to', Auth::user()->id)->orderBy('created_at', 'DESC')->with('account', 'profile')->limit(10)->get();
    }
}
