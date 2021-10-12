@extends('account.player.layout')

@section('title','目標管理')
@php 
    $routers = ['info', 'goal', 'match', 'result'];
    foreach ($routers as $router) {
        if(Request::is('player/'.$router.'*')) {
            break;
        }
    }
@endphp
@section('player.content')
<div id="player-app"></div>
<input type="hidden" id="player_router" value="{{$router}}" />
<input type="hidden" id="account_id" value="{{ Auth::user()->id }}" />
<input type="hidden" id="player_id" value="{{ $player_id }}" />
@endsection