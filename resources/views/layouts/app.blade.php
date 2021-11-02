<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>HYS</title>

    <link rel="shortcut icon" href="{{asset('ball.png')}}">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>
<body style="overflow:hidden">
    <div id="home">
        <div class="topmv">
            <figure>
                <img src="{{asset('images/top_mv_l2.png')}}" alt="">
            </figure>
            <figure style="  position: absolute;  right: -300px;  ">
                <img src="{{asset('images/top_mv_r1.png')}}" alt="">
            </figure>
            <div class="bg"></div>
        </div>
        <div class="logo-wrapper">
            <picture>
                <source media="(max-width: 767px)" srcset="{{asset('images/top_mv_logo.svg')}}" width="300" height="250">
                <img src="{{asset('images/top_mv_logo.svg')}}" alt="logo.svg" width="450" height="350">
            </picture>
            <p class="mt-1 mt-md-4 ft-sm-25">HYS TENNIS PLAYER MANAGEMENT</p>

            <div class="btn-bar mt-1 mt-md-1">
                @yield('auth-btn')
            </div>
        </div>
    </div>

    @include('layouts.modal_login')
    @include('layouts.modal_register')
    
    @include('layouts.loader2')
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        // document.querySelector('.loader2-wrap').style.display="block";
        // $(window).on('load', ()=>{
        //     document.querySelector('.loader2-wrap').style.display="none";
        // })
    </script>
    <script src="{{ asset('js/app.js') }}" defer></script>
    @yield('scripts')
</body>
    
</html>
