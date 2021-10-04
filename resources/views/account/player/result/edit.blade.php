@extends('account.player.layout')
@extends('account.player.side')

@section('title','試合結果編集')

@section('player.content')
    <div id="result-editor"></div>
@endsection

@push('js')
    <script src="{{ asset('js/app.js') }}"></script>
@endpush