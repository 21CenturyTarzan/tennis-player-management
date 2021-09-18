<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\ProfilePlayer;
use App\Models\ProfileParent;


class DashboardController extends Controller
{
    //
    public function index()
    {
        if(strcmp(Auth::user()->type, 'parent') == 0)
            $img_url = ProfileParent::where(['account_id' => Auth::user()->id])->get('img')->first();
        else if(strcmp(Auth::user()->type, 'player') == 0)
            $img_url = ProfilePlayer::where(['account_id' => Auth::user()->id])->get('img')->first();
        return view('dashboard.index')->with(['img_url' => $img_url->img]);
    }
}
