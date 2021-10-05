@extends('account.player.layout')

@section('title','個人情報')

@section('player.content')
    <div id="info">
        <div class="mt-3 pt-2 rounded-top-15 text-white player-main-info">
            <div class="name pt-3 pt-md-5 ">
                <p class="text-center bg-red-4 font-weight-bold">
                    {{ @Auth::user()->name }}
                    <a href="{{route('account.player.edit.info')}}" class="edit"><img src="/images/icon-pencil.svg" alt="icon-pencil.svg" width="30" height="30"></a>
                </p>
            </div>
            <div class="mt-3 mt-md-5">
                <div class="row">
                    <div class="col-md-4 text-center text-md-right">
                        <div class="m-auto ml-md-auto m-md-0 border-1 avatar-wrapper">
                            <img src="{{@Auth::user()->img}}" alt="{{@Auth::user()->img}}" class="avatar">
                        </div>
                    </div>
                    <div class="col-md-8">
                        <p class="text-center bg-black-4 ft-30 ft-xs-20  m-1 m-md-0 my-md-3">
                            @if($rank != null)  {{$rank->title1}}
                            @else 私の目標は○○！！
                            @endif
                        </p>
                        <p class="text-center bg-black-4 ft-30 ft-xs-20  m-1 m-md-0 my-md-3">
                            @if($rank != null)  {{$rank->title2}}
                            @else 私の目標は○○！！
                            @endif
                        </p>
                    </div>
                </div>
            </div>
            <div class="person-info mt-3 mt-md-5 bg-black-6 rounded-top-20 border-top border-white text-center">
                <table class="table m-0 p-1 text-white text-center">
                    <tbody>
                        <tr>
                            <td class="col-4 border-0">
                                <p class="hint">{{date('Y-m-d', strtotime($profile->birth))}}</p>
                                <p class="value">{{\Carbon\Carbon::parse($profile->birth)->age}}<span>歳</span></p>
                            </td>
                            <td class="col-4 border-0">
                                <p class="hint">Height</p>
                                <p class="value">{{$profile->height}}<span>cm</span></p>
                            </td>
                            <td class="col-4 border-0">
                                <p class="hint">Weight</p>
                                <p class="value">{{$profile->weight}}<span>kg</span></p>
                            </td>
                        </tr>
                        <tr>    
                            <td class="col-4 border-0">
                                <p class="hint">U18</p>
                                <p class="value">
                                @if($rank != null)  {{$rank->kanto_u_18}}<span>位</span>
                                @else -
                                @endif
                                </p>
                            </td>
                            <td class="col-4 border-0">
                                <p class="hint">2021 W-L</p>
                                <p class="value">40-4</p>
                            </td>
                            <td class="col-4 border-0">
                                <p class="hint">勝率</p>
                                <p class="value">64<span>%</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>    
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-6">
                <div class="p-2 shadow-lg bg-black-4">
                    <h4 class="text-center text-white">勝率</h4>
                    <table class="table table-bordered m-0 p-1 text-white text-center">
                        <thead>
                            <tr>
                                <td class="bg-white-2">区分</td>
                                <td class="bg-white-2">W-L</td>
                                <td class="bg-white-2">%</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1set</td>
                                <td>10-5</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>3set</td>
                                <td>90-10</td>
                                <td>90</td>
                            </tr>
                            <tr>
                                <td>オムニコート</td>
                                <td>10-1</td>
                                <td>90</td>
                            </tr>
                            <tr>
                                <td>ハードコート</td>
                                <td>10-10</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>クレーコート</td>
                                <td>10-5</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>20-4</td>
                                <td>33.3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="col-md-6 mt-4 mt-md-0">
                <div class="p-2 shadow-lg bg-black-4">
                    <h4 class="text-center text-white">RANK</h4>
                    <table class="table table-bordered m-0 p-1 text-white text-center">
                        <thead>
                            <tr>
                                <td class="bg-white-2">区分</td>
                                <td class="bg-white-2">位</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JTAU18</td>
                                <td>
                                    @if($rank != null)  {{$rank->jta_u_18}}
                                    @else -
                                    @endif
                                </td>
                            </tr>
                            <tr>
                                <td>関東U18</td>
                                <td>
                                    @if($rank != null)  {{$rank->kanto_u_18}}
                                    @else -
                                    @endif
                                </td>
                            </tr>
                            @if($rank != null)
                                @forelse($rank->rank_list as $item)
                                    <tr>
                                        <td>{{$item->rank_type}}</td>
                                        <td>{{$item->rank_value}}</td>
                                    </tr>
                                @empty
                                @endforelse
                            @endif
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    
        <div class="mt-4 p-2 shadow-lg bg-black-4">
            <h4 class="text-center text-white">個人情報</h4>
            <table class="table table-bordered m-0 text-white text-center" id="person-info">
                <tbody>
                    <tr>
                        <th>性別</th>
                        <td>{{$profile->gender}}</td>
                    </tr>
                    <tr>
                        <th>生年月日</th>
                        <td>{{date('m月d日Y年', strtotime($profile->birth))}}</td>
                    </tr>
                    <tr>
                        <th>学校</th>
                        <td>{{$profile->school}}</td>
                    </tr>
                    <tr>
                        <th>学年</th>
                        <td>{{$profile->grade}}</td>
                    </tr>
                    <tr>
                        <th>郵便番号</th>
                        <td>{{$profile->phone}}</td>
                    </tr>
                    <tr>
                        <th>住所</th>
                        <td>{{$profile->address}}</td>
                    </tr>
                    <tr>
                        <th>受講回数</th>
                        <td>{{$profile->lesson}}<br>
                        </td>
                    </tr>      
                    <tr>
                        <th>主な戦績</th>
                        <td>
                            <pre class="text-left">{{$profile->career}}</pre>
                        </td>
                    </tr>                   
                </tbody>
            </table>
        </div>

    </div>
@endsection

@push('js')
    <script src="{{ asset('js/app.js') }}"></script>
@endpush