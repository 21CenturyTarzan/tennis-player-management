<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Analysis;

class AnalysisController extends Controller
{
    //
    public function list()
    {
        # code...
        $res = Analysis::get();
        return ['status_code'=>200, 'params'=>$res];
    }
}
