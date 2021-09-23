@extends('player.layout')

@section('title','Edit')

@section('player.content')
    <div style="padding-top: 72px; padding-bottom: 20px" id="info">
        <div class="mt-3 pt-2 rounded-top-15 text-white player-main-info">
            <div class="name pt-3 pt-md-5 ">
                <p class="text-center bg-red-4 font-weight-bold">
                    <!-- name -->
                    <input type="text" name="name" class="w-50 w-md-75 edit-box" value="{{Auth::user()->name}}">
                </p>
            </div>
            <div class="img-wrap mt-3 mt-md-5">
                <div class="row">
                    <div class="col-md-4 text-center text-md-right">
                        <img src="{{Auth::user()->img}}" alt="{{Auth::user()->img}}">
                    </div>
                    <div class="col-md-8">
                        <p class="text-center bg-black-4">
                            <!-- title1 -->
                            <input type="text" name="title1" class="w-75 edit-box" value="私の目標は○○！！">
                        </p>
                        <p class="text-center bg-black-4">
                            <!-- title2 -->
                            <input type="text" name="title2" class="w-75 edit-box" value="誰々に勝ちたい！！">
                        </p>
                    </div>
                </div>
            </div>
            <div class="person-info mt-3 mt-md-5 bg-black-6 rounded-top-20 border-top border-white text-center">
                <table class="table m-0 p-1 text-white text-center">
                    <tbody>
                        <tr>
                            <td class="col-4 border-0">
                                <p class="value">
                                    34<span>歳</span>
                                </p>
                            </td>
                            <td class="col-4 border-0">
                                <!-- height -->
                                <p class="value">
                                    <input type="number" name="height" class="w-75 edit-box" value="170"><span>cm</span>
                                </p>
                            </td>
                            <td class="col-4 border-0">
                                <!-- weight -->
                                <p class="value">
                                    <input type="number" name="weight" class="w-75 edit-box" value="65.4"><span>kg</span>
                                </p>
                            </td>
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
                        <td>
                            <input type="text" name="jta-u18" class="w-25 edit-box" value="1"><span>位</span>
                        </td>
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
@endsection