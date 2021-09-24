@extends('player.layout')

@section('title','Edit')

@section('player.content')
    <div style="padding-top: 72px; padding-bottom: 20px" id="info">
        <form action="">
            <div class="mt-3 pt-2 rounded-top-15 text-white player-main-info">
                <div class="name pt-3 pt-md-5 ">
                    <p class="text-center bg-red-4 font-weight-bold">
                        <!-- name -->
                        <input type="text" name="name" class="w-50 w-md-75 bg-none edit-box border-0" value="{{Auth::user()->name}}">
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
                                <input type="text" name="title1" class="w-75 bg-none edit-box border-0" value="私の目標は○○！！">
                            </p>
                            <p class="text-center bg-black-4">
                                <!-- title2 -->
                                <input type="text" name="title2" class="w-75 bg-none edit-box border-0" value="誰々に勝ちたい！！">
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
                                        <input type="number" name="height" class="w-75 bg-none edit-box border-0" value="170"><span>cm</span>
                                    </p>
                                </td>
                                <td class="col-4 border-0">
                                    <!-- weight -->
                                    <p class="value">
                                        <input type="number" name="weight" class="w-75 bg-none edit-box border-0" value="65.4"><span>kg</span>
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
                            <td><input type="number" name="jta-u-18" class="w-75 bg-none edit-box border-0" value="1"><span>位</span></td>
                        </tr>
                        <tr>
                            <th>JTAU34</th>
                            <td><input type="number" name="jta-u-own" class="w-75 bg-none edit-box border-0" value="1"><span>位</span></td>
                        </tr>
                        <tr>
                            <th>関東U18</th>
                            <td><input type="number" name="gandong-u-18" class="w-75 bg-none edit-box border-0" value="1"><span>位</span></td>
                        </tr>
                        <tr>
                            <th>関東U34</th>
                            <td><input type="number" name="gandong-u-own" class="w-75 bg-none edit-box border-0" value="1"><span>位</span></td>
                        </tr>
                        <tr>
                            <th>埼玉U34</th>
                            <td><input type="number" name="saitama" class="w-75 bg-none edit-box border-0" value="1"><span>位</span></td>
                        </tr>
                        <tr>
                            <th>School</th>
                            <td><input type="number" name="school" class="w-75 bg-none edit-box border-0" value="1"><span>位</span></td>
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
                            <td><input type="text" name="gender" class="w-100 bg-none edit-box border-0" value="女"></td>
                        </tr>
                        <tr>
                            <th>生年月日</th>
                            <td><input type="date" name="birth" class="w-100 bg-none edit-box border-0" value=""></td>
                        </tr>
                        <tr>
                            <th>学校</th>
                            <td><input type="text" name="school" class="w-100 bg-none edit-box border-0" value="Kansas States University"></td>
                        </tr>
                        <tr>
                            <th>学年</th>
                            <td><input type="text" name="grade" class="w-100 bg-none edit-box border-0" value="大学1年"></td>
                        </tr>
                        <tr>
                            <th>郵便番号</th>
                            <td><input type="text" name="phone" class="w-100 bg-none edit-box border-0" value="000-0000"></td>
                        </tr>
                        <tr>
                            <th>住所</th>
                            <td><input type="text" name="address" class="w-100 bg-none edit-box border-0" value="埼玉県所沢市"></td>
                        </tr>
                        <tr>
                            <th>主な戦績</th>
                            <td><textarea name="" id="career" rows="5" class="w-100 bg-none text-white border-0"></textarea></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </form>
    </div>
@endsection