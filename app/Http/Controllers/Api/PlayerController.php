<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Player;
use App\Models\Rank;

class PlayerController extends Controller
{
    //
    public function index(){
        return Player::orderBy('created_at')->with('account')->get();
    }

    public function show(){
        
    }

    public function info(Request $r){
        $player_id = (int)$r->get('player_id');
        $res['rank'] = Rank::where('player_id', $player_id)->with('rank_list') -> orderBy('id', 'DESC') -> first();
        $res['profile'] = Player::where('id', $player_id)->with('account')->first();

        return ['status_code' => 200, 'params' => $res];
    }
}
