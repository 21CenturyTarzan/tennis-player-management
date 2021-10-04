@section('player.side')
    <div class="l-side">
        <div class="l-side-logo">
            <a href="">
                <img src="{{ asset('images/top_mv_logo.svg') }}" width="200px" height="200px" alt="ロゴ" />    
            </a>
        </div>
        <nav class="mypage-nav">
            <ul class="mypage-nav-list">
                <li class="mypage-nav-list__item -info">
                    <a href="/player/info" class="mypage-nav-list__link">
                        <i class="icon info"></i><span>個人情報</span>
                    </a>
                </li>
                <li class="mypage-nav-list__item -goal">
                    <a href="/player/goal" class="mypage-nav-list__link">
                        <i class="icon parents"></i><span>選手管理</span>
                    </a>
                </li>
                <li class="mypage-nav-list__item -match">
                    <a href="/player/match" class="mypage-nav-list__link">
                        <i class="icon match"></i><span>試合前準備</span>
                    </a>
                </li>
                <li class="mypage-nav-list__item -result">
                    <a href="/player/result" class="user-icon mypage-nav-list__link">
                        <i class="icon meeting"></i><span>試合結果</span>
                    </a>
                </li>
                <li class="mypage-nav-list__item -logout">
                    <a class="mypage-nav-list__link" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                        <i class="icon log-out"></i><span>ログアウト</span>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                            @csrf
                        </form>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
@endsection