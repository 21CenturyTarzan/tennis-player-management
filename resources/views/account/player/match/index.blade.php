@extends('account.player.layout')
@extends('account.player.side')

@section('title','試合前準備')

@section('player.content')
    <div id="prepare">
        <div class="mt-3 py-2 rounded-15 bg-white shadow-lg">
            <h3 class="mt-2 p-1 text-white bg-green text-center font-weight-bold position-relative">
                <span>試合前準備</span>
                @if(strcmp(Auth::user()->type, 'player') ==0 )
                    <a href="{{route('account.player.edit.match')}}" class="edit py-1" style="margin-top:-5px"><img src="/images/icon-pencil.svg" alt="icon-pencil.svg" width="30" height="30"></a>
                @endif
            </h3>
            
            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">大会情報</p>
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

            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">自己分析</p>
            <div class="px-2 mb-2">
                I dont know here exactly? Can you explain about this section?
            </div>

            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">試合前に心がける事</p>
            <div class="px-2 mb-2">
                I dont know here exactly? Can you explain about this section?
            </div>


            <p class="w-100 p-1 pl-2 mb-2 bg-black-4 text-white text-right">最新の更新日 : 2019/3/20 19:40</p>
        </div>
    </div>
@endsection


@push('js')
<script>
    $('.-info').removeClass('nav-active');
    $('.-goal').removeClass('nav-active');
    $('.-match').addClass('nav-active');
    $('.-result').removeClass('nav-active');
    $('.-logout').removeClass('nav-active');
</script>
@endpush