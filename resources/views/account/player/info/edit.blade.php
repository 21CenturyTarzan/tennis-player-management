@extends('account.player.layout')
@extends('account.player.side')

@section('title','個人情報編集')

@section('player.content')
    <div id="info-editor"
         data-profile="{{ $profile }}"
         data-rank="{{ $rank }}"
    >
    </div>
@endsection
