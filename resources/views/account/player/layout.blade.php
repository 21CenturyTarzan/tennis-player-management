<!doctype html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta http-equiv="content-type" charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no,email=no,address=no" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name=”robots” content=”noindex” />
    <!-- favicon -->
    <link rel="icon" type="image/x-icon" href="faviconのパスが入ります" />

    <!-- Android アドレスバーの色 -->
    <meta name="theme-color" content="#ffffff" />

    <!-- iOS ホーム画面 -->
    <link rel="apple-touch-icon" href="Web http://dummydummydummydummydummydummydummy" />
    <meta name="apple-mobile-web-app-title" content="ほげほげ" />

    <!-- Windows ピン留め時の見た目 -->
    <meta name="msapplication-config" content="/config/browserconfig.xml" />

    <title> HYS | @yield('title')</title>

    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel = "stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    
    
    <!-- <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}" /> -->

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    
    

    </head>
    <body>
        <main class="l-container meeting-consent">
            <div class="l-content">
                @yield('player.content')
            </div>

            <div class="l-side">
                <div class="l-side-logo">
                    <a href="">
                        <img src="{{ asset('assets/img/common/logo.svg') }}" alt="ロゴ" />    
                    </a>
                </div>
                <nav class="mypage-nav">
                    <ul class="mypage-nav-list">
                        <li class="mypage-nav-list__item -meeting nav-active">
                            <a href="/c-account/meeting" class="mypage-nav-list__link">
                                <i class="icon meeting"></i><span>ミーティング</span>
                            </a>
                        </li>
                        <li class="mypage-nav-list__item -search">
                            <a href="/c-account/search" class="mypage-nav-list__link">
                                <i class="icon search"></i><span>検索</span>
                            </a>
                        </li>
                        <li class="mypage-nav-list__item -childinfo">
                            <a href="/c-account/parent" class="mypage-nav-list__link">
                                <i class="icon parents"></i><span>親情報</span>
                            </a>
                        </li>
                        <li class="mypage-nav-list__item -profile">
                            <a href="/c-account/profile" class="user-icon mypage-nav-list__link">
                                <figure>
                                    <div class="prof-wrap">
                                        <img src="{{ asset('assets/img/avatar/avatar-sample01@2x.png') }}" alt="" />
                                    </div>
                                </figure>
                                <span>プロフィール</span>
                            </a>
                        </li>
                        <li class="mypage-nav-list__item -logout">
                            <a class="mypage-nav-list__link">
                                <i class="icon log-out"></i><span>ログアウト</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>
    </body>

    <script src="{{ asset('js/app.js') }}"></script>
</html>
