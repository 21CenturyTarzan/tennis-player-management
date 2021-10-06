@extends('account.player.layout')
@extends('account.player.side')

@section('title','選手管理編集')

@section('player.content')
    <div id="goal-editor"></div>
@endsection

@push('js')
<script>
    $('.-info').removeClass('nav-active');
    $('.-goal').addClass('nav-active');
    $('.-match').removeClass('nav-active');
    $('.-result').removeClass('nav-active');
    $('.-logout').removeClass('nav-active');
</script>
@endpush