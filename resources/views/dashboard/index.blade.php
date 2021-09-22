<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>HYS | Dashboard</title>

    <link rel="shortcut icon" href="{{asset('ball.png')}}">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel = "stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body id="dashboard">
    <nav class="navbar navbar-expand-md navbar-light shadow-sm">
        <div class="container">
            <a class="nav-link btn btn-custom btn-icon" href="#">
                <img src="{{asset('images/top_mv_logo.svg')}}" alt="" width="50" height="50">
            </a>

            <ul class="navbar-nav ml-auto d-inline-block d-md-none">
                <li class="nav-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="ログアウト">
                    <a class="nav-link btn btn-custom btn-icon"  href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                        <!--begin::Svg Icon | path: icons/duotune/finance/fin006.svg-->
                        <img src="{{$img_url}}" alt="" width="35" height="35" style="border-radius:50%">
                        <span class="ml-1 text-white ft-15 d-none d-md-inline-block">{{ Auth::user()->name }}</span>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                            @csrf
                        </form>
                    </a>
                </li>
            </ul>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav ml-md-auto mb-2 mb-md-0">
                    <li class="nav-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="選手リスト">                    
                        <a class="nav-link btn btn-custom btn-icon active"  href="#players">
                            <!--begin::Svg Icon | path: icons/duotune/abstract/abs042.svg-->
                            <span class="svg-icon svg-icon-2x">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#ffffff">
                                    <path d="M9 11a4 4 0 1 0-4-4a4 4 0 0 0 4 4zm8 2a3 3 0 1 0-3-3a3 3 0 0 0 3 3zm4 7a1 1 0 0 0 1-1a5 5 0 0 0-8.06-3.95A7 7 0 0 0 2 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1" fill="#ffffff" />
                                </svg>
                            </span>
                        </a>
                    </li>
                    
                    <li class="nav-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="選手管理">
                        <a class="nav-link btn btn-custom btn-icon"  href="#manage">
                            <span class="svg-icon svg-icon-2x">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#ffffff">
                                    <rect x="2" y="2" width="9" height="9" rx="2" fill="#ffffff" />
                                    <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="#ffffff" />
                                    <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="#ffffff" />
                                    <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="#ffffff" />
                                </svg>
                            </span>
                        </a>
                    </li>

                    <li class="nav-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="試合後リフレクション">
                        <a class="nav-link btn btn-custom btn-icon"  href="#prepare">
                            <span class="svg-icon svg-icon-2x">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#ffffff">
                                    <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="#ffffff" />
                                    <path d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z" fill="#ffffff" />
                                </svg>
                            </span>
                        </a>
                    </li>
                                    
                    <li class="nav-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="試合前準備"> 
                        <a class="nav-link btn btn-custom btn-icon"  href="#reflect">
                            <span class="svg-icon svg-icon-2x">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#ffffff">
                                    <rect x="8" y="9" width="3" height="10" rx="1.5" fill="#ffffff" />
                                    <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="#ffffff" />
                                    <rect x="18" y="11" width="3" height="8" rx="1.5" fill="#ffffff" />
                                    <rect x="3" y="13" width="3" height="6" rx="1.5" fill="#ffffff" />
                                </svg>
                            </span>
                        </a>
                    </li>
 
                    <li class="nav-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="通知">
                        <a class="nav-link btn btn-custom btn-icon"  href="#notice">
                            <!--begin::Svg Icon | path: icons/duotune/finance/fin006.svg-->
                            <span class="svg-icon svg-icon-2x">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#ffffff">
                                    <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="#ffffff" />
                                    <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="#ffffff" />
                                </svg>
                            </span>
                        </a>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto d-none d-md-inline-block">
                    <li class="nav-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="ログアウト">
                        <a class="nav-link btn btn-custom btn-icon"  href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                            <!--begin::Svg Icon | path: icons/duotune/finance/fin006.svg-->
                            <img src="{{$img_url}}" alt="" width="35" height="35" style="border-radius:50%">
                            <span class="ml-1 text-white ft-15 d-none d-md-inline-block">{{ Auth::user()->name }}</span>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main>
        <div class="container">
            <div class="row">

                <div class="col-md-4">
                    <div style="padding-top: 72px;" id="players">
                        <div class="mt-3 pt-2 bg-white radius-15" id="player-list-box">
                        </div>
                    </div>
                    <div style="padding-top: 72px;" id="notice">
                        <div class="mt-3 pt-2 bg-white radius-15" id="message-box">
                            <h3 class="mt-2 p-1 text-white bg-green text-center font-weight-bold">通知</h3>
                            <div id="message-list"></div>

                        </div>
                    </div>
                </div>

                <div class="col-md-8">

                    <div style="padding-top: 72px;" id="info">
                        <div class="mt-3 pt-2 radius-t-15 text-white player-main-info">
                            <div class="name pt-3 pt-md-5 ">
                                <p class="text-center bg-red-4 font-weight-bold">浮田　愛未</p>
                            </div>
                            <div class="img-wrap mt-3 mt-md-5">
                                <div class="row">
                                    <div class="col-md-4 text-center text-md-right">
                                        <img src="/images/avatar/150-1.jpg" alt="">
                                    </div>
                                    <div class="col-md-8">
                                        <p class="text-center bg-black-4">私の目標は○○！！</p>
                                        <p class="text-center bg-black-4">誰々に勝ちたい！！</p>
                                    </div>
                                </div>
                            </div>
                            <div class="person-info mt-3 mt-md-5  bg-black-6">
                                <div class="row">
                                    <div class="col-4">
                                        <p class="value">34<span>歳</span></p>
                                    </div>
                                    <div class="col-4">
                                        <p class="value">170<span>cm</span></p>
                                    </div>
                                    <div class="col-4">
                                        <p class="value">65.4<span>kg</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="padding-top: 72px;" id="manage">
                        <div class="mt-3 py-2 radius-15 bg-white shadow-lg">
                            <h3 class="mt-2 p-1 text-white bg-green text-center font-weight-bold">選手管理</h3>
                            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 radius-r-20 text-white">近日予定の試合</p>
                            <div class="px-2 mb-2">
                                <table class="table table-bordered table-success mb-2">
                                    <thead>
                                        <tr>
                                            <th scope="col">日にち</th>
                                            <th scope="col">試合名</th>
                                            <th scope="col">目標</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>2018-10-29</th>
                                            <td>Olymipic</td>
                                            <td>1位</td>
                                        </tr>
                                        <tr>
                                            <th>2018-10-29</th>
                                            <td>Olymipic</td>
                                            <td>1位</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="table table-bordered table-info mb-2">
                                    <tbody>
                                        <tr>
                                            <th>長期目標</th>
                                            <td>2位</td>
                                        </tr>
                                        <tr>
                                            <th>中期目標</th>
                                            <td>2位</td>
                                        </tr>
                                        <tr>
                                            <th>短期目標</th>
                                            <td>2位</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 radius-r-20 text-white">短期目標に向かっての課題</p>
                            <div class="px-2 mb-2">
                                <table class="table table-bordered mb-2">
                                    <tbody>
                                        <tr class="table-success">
                                            <th class="text-center"><img src="/images/icon-tech.png" width="30" height="30" /></th>
                                            <td>I will train harder and harder to win a gold medal.</td>
                                            <td class="text-center">
                                                <img src="/images/star5.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr class="table-success">
                                            <th class="text-center"><img src="/images/icon-tech.png" width="30" height="30" /></th>
                                            <td>I will train harder and harder to win a gold medal.</td>
                                            <td class="text-center">
                                                <img src="/images/star4.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr class="table-success">
                                            <th class="text-center"><img src="/images/icon-tech.png" width="30" height="30" /></th>
                                            <td>I will train harder and harder to win a gold medal.</td>
                                            <td class="text-center">
                                                <img src="/images/star4.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr class="table-danger">
                                            <th class="text-center"><img src="/images/icon-physics.png" width="30" height="30" /></th>
                                            <td>I will train harder and harder to win a gold medal.</td>
                                            <td class="text-center">
                                                <img src="/images/star3.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr class="table-danger">
                                            <th class="text-center"><img src="/images/icon-physics.png" width="30" height="30" /></th>
                                            <td>I will train harder and harder to win a gold medal.</td>
                                            <td class="text-center">
                                                <img src="/images/star3.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr class="table-danger">
                                            <th class="text-center"><img src="/images/icon-physics.png" width="30" height="30" /></th>
                                            <td>I will train harder and harder to win a gold medal.</td>
                                            <td class="text-center">
                                                <img src="/images/star3.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr class="table-info">
                                            <th class="text-center"><img src="/images/icon-mental.png" width="30" height="30" /></th>
                                            <td>I will train harder and harder to win a gold medal.</td>
                                            <td class="text-center">
                                                <img src="/images/star4.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr class="table-info">
                                            <th class="text-center"><img src="/images/icon-mental.png" width="30" height="30" /></th>
                                            <td>I will train harder and harder to win a gold medal.</td>
                                            <td class="text-center">
                                                <img src="/images/star4.svg" alt="">
                                            </td>
                                        </tr>
                                        <tr class="table-info">
                                            <th class="text-center"><img src="/images/icon-mental.png" width="30" height="30" /></th>
                                            <td>I will train harder and harder to win a gold medal.</td>
                                            <td class="text-center">
                                                <img src="/images/star4.svg" alt="/images/star4.svg">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p class="w-100 p-1 pl-2 mb-2 bg-black-4 text-white text-right">最新の更新日 : 2019/3/20 19:40</p>
                        </div>
                    </div>

                    <div style="padding-top: 72px;"  id="prepare">
                        <div class="mt-3 py-2 radius-15 bg-white shadow-lg">
                            <h3 class="mt-2 p-1 text-white bg-green text-center font-weight-bold">試合前準備</h3>
                            
                            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 radius-r-20 text-white">大会情報</p>
                            <div class="px-2 mb-2">
                                <table class="table table-bordered table-info mb-2">
                                    <tbody>
                                        <tr>
                                            <td>大会名</td>
                                            <td>---------------</td>
                                        </tr>
                                        <tr>
                                            <td>トーナメント日にち</td>
                                            <td>2019-8-29</td>
                                        </tr>
                                        <tr>
                                            <td>対戦相手名前</td>
                                            <td>浮田　愛未</td>
                                        </tr>
                                        <tr>
                                            <td>クラブ名</td>
                                            <td>Manchester</td>
                                        </tr>
                                        <tr>
                                            <td>サーフェス</td>
                                            <td>クレー/オムニ/ハード</td>
                                        </tr>
                                        <tr>
                                            <td>ラウンド</td>
                                            <td>本戦/予選</td>
                                        </tr>
                                        <tr>
                                            <td>天気</td>
                                            <td>晴/曇/雨</td>
                                        </tr>
                                        <tr>
                                            <td>起きた時の体調や気分</td>
                                            <td><img src="/images/star5.svg" alt=""></td>
                                        </tr>
                                        <tr>
                                            <td>カテゴリー</td>
                                            <td>U34</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 radius-r-20 text-white">普段試合で起きることを書く</p>
                            <div class="px-2 mb-2">
                                I dont know here exactly? Can you explain about this section?
                            </div>

                            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 radius-r-20 text-white">試合前の課題設定最低3つ</p>
                            <div class="px-2 mb-2">
                                I dont know here exactly? Can you explain about this section?
                            </div>


                            <p class="w-100 p-1 pl-2 mb-2 bg-black-4 text-white text-right">最新の更新日 : 2019/3/20 19:40</p>
                        </div>
                    </div>

                    <div style="padding-top: 72px;" id="reflect">
                        <div class="mt-3 py-2 radius-15 bg-white shadow-lg">
                            <h3 class="mt-2 p-1 text-white bg-green text-center font-weight-bold">試合後リフレクション</h3>
                            
                            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 radius-r-20 text-white"></p>
                            

                            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 radius-r-20 text-white"></p>
                            

                            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 radius-r-20 text-white"></p>
                            


                            <p class="w-100 p-1 pl-2 mb-2 bg-black-4 text-white text-right">最新の更新日 : 2019/3/20 19:40</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </main>

</body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script>
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    </script>
</html>
