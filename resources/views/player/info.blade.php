@extends('player.layout')

@section('title','Edit')

@section('player.content')
    <div style="padding-top: 72px; padding-bottom: 20px" id="info-editor" data-profile="{{ $profile }}">
    </div>
@endsection

@push('js')
<script src="{{ asset('js/app.js') }}"></script>
@endpush