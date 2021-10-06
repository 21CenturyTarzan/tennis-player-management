@extends('account.player.layout')
@extends('account.player.side')

@section('title','試合前準備編集')

@section('player.content')
    <div id="match-editor"></div>
@endsection

@push('js')
<script>
    $('.-info').removeClass('nav-active');
    $('.-goal').removeClass('nav-active');
    $('.-match').addClass('nav-active');
    $('.-result').removeClass('nav-active');
    $('.-logout').removeClass('nav-active');
</script>
@endpush