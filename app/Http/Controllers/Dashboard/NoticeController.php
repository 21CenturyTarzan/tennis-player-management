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
}
