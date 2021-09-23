<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>HYS | Profile Edit</title>

    <link rel="shortcut icon" href="{{asset('ball.png')}}">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>
<body style="background-image: url(/images/court.jpg)">
    <nav class="navbar navbar-expand-md navbar-light shadow-sm">
        <div class="container">
            <a class="nav-link btn btn-custom btn-icon" href="#">
                <img src="{{asset('images/top_mv_logo.svg')}}" alt="" width="50" height="50">
            </a>

            <ul class="navbar-nav ml-auto d-inline-block">
                <li class="nav-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="ログアウト">
                    <a class="nav-link btn btn-custom btn-icon"  href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                        <!--begin::Svg Icon | path: icons/duotune/finance/fin006.svg-->
                        <img src="{{ Auth::user()->img }}" alt="" width="35" height="35" style="border-radius:50%">
                        <span class="ml-1 text-white ft-15 d-none d-md-inline-block">{{ Auth::user()->name }}</span>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                            @csrf
                        </form>
                    </a>
                </li>
            </ul>
        </div>
    </nav>

    <main>
        <div class="container">
            <div style="padding-top: 72px;" class="mx-0 mx-md-5">
                <div class="mx-md-5 my-3 pt-2 bg-white shadow-lg rounded-lg">
                    <h3 class="mt-2 p-1  text-white bg-green text-center font-weight-bold">
                        <span>プロフィール編集<span>
                    </h3>
                    <div class="p-3">
                        @yield('content')
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="{{ asset('js/app.js') }}" defer></script>
</html>
