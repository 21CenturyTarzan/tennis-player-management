@extends('account.admin.layout')

@section('title','目標管理')
@php 
    $routers = ['info', 'goal', 'match', 'favourite'];
    foreach ($routers as $router) {
        if(Request::is('player/'.$router.'*')) {
            break;
        }
    }
@endphp
@section('admin.content')
<div id="player-app"></div>
<input type="hidden" id="admin_router" value="{{$router}}" />
@endsection