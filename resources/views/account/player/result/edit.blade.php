@extends('account.player.layout')
@extends('account.player.side')

@section('title','試合結果編集')

@section('player.content')
    <div id="result-editor"></div>
@endsection

@push('js')
    <script src="{{ asset('js/app.js') }}"></script>
@endpush

@push('js')
<script>
    $('.-info').removeClass('nav-active');
    $('.-goal').removeClass('nav-active');
    $('.-match').removeClass('nav-active');
    $('.-result').addClass('nav-active');
    $('.-logout').removeClass('nav-active');
</script>
@endpush