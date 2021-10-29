<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Favourite;
use App\Models\Quotation;

class FavouriteController extends Controller
{
    //

    public function list(Request $request)
    {
        $arr = Favourite::where('player_id', $request->player_id)->with('quotation')->get()->toArray();

        $tmp = array();
        $category = array();
        foreach($arr as $item){
            array_push($tmp, $item['quotation_id']);
            if(!in_array($item['quotation']['category'], $category))
                array_push($category, $item['quotation']['category']);
        }

        $res['category'] = $category;
        $res['indexes'] = $tmp;
        $res['quotations'] = $arr;  

        return ['status_code'=>200, 'params'=>$res];
    }


    public function set(Request $request)
    {
        $player_id = (int)$request->player_id;
        $quotation_id = (int)$request->quotation_id;

        $cnt = Favourite::where(['player_id'=>$player_id, 'quotation_id'=>$quotation_id])->get()->count();

        if(!$cnt){
            Favourite::create([
                'player_id'=>$player_id,
                'quotation_id'=>$quotation_id
            ]);
        }  //Add Favourite
        else{
            Favourite::where(['player_id'=>$player_id, 'quotation_id'=>$quotation_id])->delete();
        }

        $arr = Favourite::where(['player_id'=>$player_id])->get()->toArray();
        $res = array();
        foreach($arr as $item){
            array_push($res, $item['quotation_id']);
        }

        return ['status_code'=>200, 'params'=>$res];
    }
}
