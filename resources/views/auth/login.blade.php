@extends('layouts.app')

@section('auth-btn')
    <a class="btn" data-toggle="modal" data-target="#loginModal">LOGIN</a>
    <a class="btn" href="{{route('register')}}">SIGN UP</a> 
@endsection

@section('scripts')
@parent

<script>
$(function() {
    $('#loginModal').modal({
        show: true
    });
});
</script>
@endsection