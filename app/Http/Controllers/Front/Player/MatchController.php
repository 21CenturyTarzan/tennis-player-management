<?php

namespace App\Http\Controllers\front\player;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Player;
use App\Models\Tournament;
use App\Models\Caution;

class MatchController extends Controller
{
    //
    public function index()
    {
        if(strcmp(Auth::user()->type, 'player') == 0)
        {
            $res['player_id'] = Player::where('account_id', Auth::user()->id)->first()->id;
            return view('account.player.index', $res);
        }
        else return view('errors.404');
    }


    public function store(Request $r)
    {
        $tournament_name = $r->get('tournament_name');
        $tournament_date = $r->get('tournament_date');
        $opponent_name = $r->get('opponent_name');
        $opponent_club = $r->get('opponent_club');
        $surface = $r->get('surface');
        $round = $r->get('round');
        $weather = $r->get('weather');
        $category = $r->get('category');
        $mood = (int)$r->get('mood');
        $caution_list = json_decode($r->get('caution_list'));

        $player_id = Player::where('account_id', Auth::user()->id)->first()->id;

        Tournament::create([
            'player_id' => $player_id,
            'category' => $category,
            'tournament_name' => $tournament_name,
            'tournament_date' => $tournament_date,
            'opponent_name' => $opponent_name,
            'opponent_club' => $opponent_club,
            'surface' => $surface,
            'round' => $round,
            'weather' => $weather,
            'mood' => $mood,
        ]);

        $tournament_id = Tournament::where('player_id', $player_id)->orderBy('id', 'DESC')->first()->id;

        foreach($caution_list as $item)
        {
            Caution::create([
                'tournament_id' => $tournament_id,
                'caution' => $item,
            ]);
        }

        return ['status_code' => 200];
    }

    public function update(Request $r)
    {
        //TODO
        $tournament_id = (int)$r->get('tournament_id');

        $tournament_name = $r->get('tournament_name');
        $tournament_date = $r->get('tournament_date');
        $opponent_name = $r->get('opponent_name');
        $opponent_club = $r->get('opponent_club');
        $surface = $r->get('surface');
        $round = $r->get('round');
        $weather = $r->get('weather');
        $category = $r->get('category');
        $mood = (int)$r->get('mood');
        $caution_list = json_decode($r->get('caution_list'));

        Tournament::where(['id' => $tournament_id])->first()->update([
            'category' => $category,
            'tournament_name' => $tournament_name,
            'tournament_date' => $tournament_date,
            'opponent_name' => $opponent_name,
            'opponent_club' => $opponent_club,
            'surface' => $surface,
            'round' => $round,
            'weather' => $weather,
            'mood' => $mood,
        ]);

        foreach($caution_list as $item)
        {
            Caution::where(['id'=>$item->id])->first()->update([
                'caution' => $item->caution
            ]);
        }

        return ['status_code' => 200];
    }
}
