<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Tennis School</title>

    <link rel="shortcut icon" href="{{asset('ball.png')}}">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>
<body>

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
                <source media="(max-width: 767px)" srcset="{{asset('images/top_mv_logo.svg')}}" width="350" height="300">
                <img src="{{asset('images/top_mv_logo.svg')}}" alt="logo.svg" >
            </picture>
            <p class="mt-1 mt-md-4">HYS TENNIS PLAYER MANAGEMENT</p>

            <div class="btn-bar mt-1 mt-md-5">
                <a class="btn" href="{{route('login')}}">LOGIN</a>
                <a class="btn" href="{{route('register')}}">SIGN UP</a> 
            </div>

        </div>
    </div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="{{ asset('js/app.js') }}" defer></script>
    
    @yield('scripts')
</body>
    
</html>
