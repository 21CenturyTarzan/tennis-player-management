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
<body id="profile">
    <nav class="navbar navbar-expand-md navbar-light shadow-sm">
        <div class="container">
            <a class="nav-link btn btn-custom btn-icon" href="#">
                <img src="{{asset('images/top_mv_logo.svg')}}" alt="" width="50" height="50">
            </a>

            <ul class="navbar-nav ml-auto d-inline-block">
                <li class="nav-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="ログアウト">
                    <a class="nav-link btn btn-custom btn-icon"  href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                        <!--begin::Svg Icon | path: icons/duotune/finance/fin006.svg-->
                        <img src="{{asset('images/blank.png')}}" alt="" width="35" height="35" style="border-radius:50%">
                        <span class="ml-1 text-white ft-15 d-none d-md-inline-block">{{ Auth::user()->name }}</span>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                            @csrf
                        </form>
                    </a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="edit-modal-show">
        <a class="btn" data-toggle="modal" data-target="#profileEditModal">プロフィールを編集する必要があります。</a>
    </div>

    <div class="modal fade" id="profileEditModal" tabindex="-1" role="dialog" aria-labelledby="profileEditModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <img src="/images/login.png" alt="" width="35px" height="35px"/>
                    <h5 class="modal-title" id="registerModal">プロファイルの編集</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                @if (strcmp(Auth::user()->type, 'player') == 0)
                    <div class="modal-body" id="player-profile-modal-content"></div>
                @elseif (strcmp(Auth::user()->type, 'parent') == 0)
                    <div class="modal-body" id="parent-profile-modal-content"></div>
                @endif
            </div>
        </div>
    </div>

</body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="{{ asset('js/app.js') }}" defer></script>

    <script>
    $(function() {
        $('#profileEditModal').modal({
            show: true
        });
    });
    </script>
</html>
