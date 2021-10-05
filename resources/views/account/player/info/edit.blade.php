@extends('account.player.layout')

@section('title','Edit')

@section('player.content')
    <div id="info-editor"
         data-profile="{{ $profile }}"
         data-rank="{{ $rank }}"
    >
    </div>
@endsection

@push('js')
    <script src="{{ asset('js/app.js') }}"></script>
@endpush