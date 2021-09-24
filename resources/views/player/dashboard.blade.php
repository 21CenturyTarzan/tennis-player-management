@extends('player.layout')

@section('title', 'Dashboard')

@section('player.content')
    <div style="padding-top: 72px;" id="info">
        <div class="mt-3 pt-2 rounded-top-15 text-white player-main-info">
            <div class="name pt-3 pt-md-5 ">
                <p class="text-center bg-red-4 font-weight-bold">
                    {{ @Auth::user()->name }}
                    <a href="{{route('account.edit.info')}}" class="edit"><img src="/images/icon-pencil.svg" alt="icon-pencil.svg" width="30" height="30"></a>
                </p>
            </div>
            <div class="img-wrap mt-3 mt-md-5">
                <div class="row">
                    <div class="col-md-4 text-center text-md-right">
                        <img src="{{@Auth::user()->img}}" alt="{{@Auth::user()->img}}">
                    </div>
                    <div class="col-md-8">
                        <p class="text-center bg-black-4">私の目標は○○！！</p>
                        <p class="text-center bg-black-4">誰々に勝ちたい！！</p>
                    </div>
                </div>
            </div>
            <div class="person-info mt-3 mt-md-5 bg-black-6 rounded-top-20 border-top border-white text-center">
                <table class="table m-0 p-1 text-white text-center">
                    <tbody>
                        <tr>
                            <td class="col-4 border-0"><p class="value">34<span>歳</span></p></td>
                            <td class="col-4 border-0"><p class="value">170<span>cm</span></p></td>
                            <td class="col-4 border-0"><p class="value">65.4<span>kg</span></p></td>
                        </tr>
                    </tbody>
                </table>    
            </div>
        </div>

        <div class="mt-3 p-2 shadow-lg bg-black-4">
            <h3 class="text-center text-white">RANK</h3>
            <table class="table table-bordered m-0 p-1 text-white text-center">
                <tbody>
                    <tr>
                        <th>JTAU18</th>
                        <td>1位</td>
                        <th>JTAU34</th>
                        <td>1位</td>
                    </tr>
                    <tr>
                        <th>関東U18</th>
                        <td>1位</td>
                        <th>関東U34</th>
                        <td>1位</td>
                    </tr>
                    <tr>
                        <th>埼玉U34</th>
                        <td>1位</td>
                        <th>School</th>
                        <td>1位</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="mt-3 p-2 shadow-lg bg-black-4">
            <h3 class="text-center text-white">個人情報</h3>
            <table class="table table-bordered m-0 text-white">
                <tbody>
                    <tr>
                        <th>性別</th>
                        <td>女</td>
                        <th>生年月日</th>
                        <td>1月17日2002年</td>
                    </tr>
                    <tr>
                        <th>学校</th>
                        <td>Kansas States University</td>
                        <th>学年</th>
                        <td>大学1年</td>
                    </tr>
                    <tr>
                        <th>郵便番号</th>
                        <td>000-0000</td>
                        <th>住所</th>
                        <td>埼玉県所沢市</td>
                    </tr>
                    <tr>
                        <th>主な戦績</th>
                        <td colspan="3">
                            I have enough experience of playing tennis.<br>
                            I have been training tennis more than 7 years.<br>
                            Tennis is my favourite sport.<br>
                        </td>
                    </tr>
                    <tr>
                        <th>1set勝率</th>
                        <td>78%</td>
                        <th>3set勝率</th>
                        <td>70%</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

    </div>

    <div style="padding-top: 72px;" id="manage">
        <div class="mt-3 py-2 rounded-15 bg-white shadow-lg">
            <h3 class="mt-2 p-1  text-white bg-green text-center font-weight-bold">
                <span>選手管理<span>
                @if(strcmp(Auth::user()->type, 'player') ==0 )
                    <a href="#" class="edit py-1" style="margin-top:-5px"><img src="/images/icon-pencil.svg" alt="icon-pencil.svg" width="30" height="30"></a>
                @endif
            </h3>
            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">近日予定の試合</p>
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
            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">短期目標に向かっての課題</p>
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
        <div class="mt-3 py-2 rounded-15 bg-white shadow-lg">
            <h3 class="mt-2 p-1 text-white bg-green text-center font-weight-bold">
                試合前準備
                @if(strcmp(Auth::user()->type, 'player') ==0 )
                    <a href="#" class="edit py-1" style="margin-top:-5px"><img src="/images/icon-pencil.svg" alt="icon-pencil.svg" width="30" height="30"></a>
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

    <div style="padding-top: 72px;" id="reflect">
        <div class="mt-3 py-2 rounded-15 bg-white shadow-lg">
            <h3 class="mt-2 p-1 text-white bg-green text-center font-weight-bold">
                試合結果
                @if(strcmp(Auth::user()->type, 'player') ==0 )
                    <a href="#" class="edit py-1" style="margin-top:-5px"><img src="/images/icon-pencil.svg" alt="icon-pencil.svg" width="30" height="30"></a>
                @endif    
            </h3>
            
            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white"></p>
            

            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white"></p>
            

            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white"></p>
            


            <p class="w-100 p-1 pl-2 mb-2 bg-black-4 text-white text-right">最新の更新日 : 2019/3/20 19:40</p>
        </div>
    </div>
@endsection