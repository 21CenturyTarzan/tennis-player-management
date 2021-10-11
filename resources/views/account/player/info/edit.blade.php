@extends('account.player.layout')
@section('title','個人情報編集')

@section('player.content')
    <div id="player-app"
         data-profile="{{ $profile }}"
         data-rank="{{ $rank }}"
    >
    </div>
    <input type="hidden" id="player_router" value="info" />
    <input type="hidden" id="father_id" value="1" />
@endsection