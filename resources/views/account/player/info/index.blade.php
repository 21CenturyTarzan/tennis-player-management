@extends('account.player.layout')
@extends('account.player.side')

@section('title','個人情報')

@section('player.content')
<div id="player-app"></div>
<input type="hidden" id="player_router" value="info" />
<input type="hidden" id="father_id" value="1" />
@endsection