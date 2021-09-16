@extends('layouts.app')

@section('auth-btn')
    <a class="btn" href="{{route('login')}}">LOGIN</a>
    <a class="btn" data-toggle="modal" data-target="#registerModal">SIGN UP</a> 
@endsection

@section('scripts')
@parent

<script>
$(function() {
    $('#registerModal').modal({
        show: true
    });
});
</script>
@endsection