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
        return view('dashboard.index');
    }
}
