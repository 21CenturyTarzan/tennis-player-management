<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Quotation;

class QuotationController extends Controller
{
    //
    public function list()
    {
        $res['quotations'] = Quotation::get();
        $res['category'] = Quotation::select('category')->groupBy('category')->get()->toArray();
        return ['status_code'=>200, 'params'=>$res];
    }
}
