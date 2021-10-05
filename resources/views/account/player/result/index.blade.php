@extends('account.player.layout')
@extends('account.player.side')

@section('title','試合結果')

@section('player.content')
    <div id="result">
        <div class="mt-3 py-2 rounded-15 bg-white shadow-lg">
            <h3 class="mt-2 p-1 text-white bg-green text-center font-weight-bold position-relative">
                試合結果
                @if(strcmp(Auth::user()->type, 'player') ==0 )
                    <a href="{{route('account.player.edit.result')}}" class="edit py-1" style="margin-top:-5px"><img src="/images/icon-pencil.svg" alt="icon-pencil.svg" width="30" height="30"></a>
                @endif    
            </h3>
            
            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white"></p>
            

            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white"></p>
            

            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white"></p>
            


            <p class="w-100 p-1 pl-2 mb-2 bg-black-4 text-white text-right">最新の更新日 : 2019/3/20 19:40</p>
        </div>
    </div>
@endsection

@push('js')
<script>
    $('.-info').removeClass('nav-active');
    $('.-goal').removeClass('nav-active');
    $('.-match').removeClass('nav-active');
    $('.-result').addClass('nav-active');
    $('.-logout').removeClass('nav-active');
</script>
@endpush
