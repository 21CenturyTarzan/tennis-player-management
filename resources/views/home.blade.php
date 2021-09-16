@extends('layouts.app')

@if(Auth::user())
    @section('auth-btn')
        <a class="btn" href="{{route('login')}}">LOGIN</a>
        <a class="btn"  href="{{route('register')}}">SIGN UP</a> 
    @endsection
@else
    @section('auth-btn')
        <a class="btn" data-toggle="modal" data-target="#loginModal">LOGIN</a>
        <a class="btn" data-toggle="modal" data-target="#registerModal">SIGN UP</a> 
    @endsection
@endif