<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>HYS | プロファイル編集</title>

    <link rel="shortcut icon" href="{{asset('ball.png')}}">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>
<body>
    <main>
        <div class="container">
            <div class="mx-0 mx-md-5">
                <div class="mx-md-5 my-3 pt-2 bg-white shadow-lg rounded-lg">
                    <h3 class="mt-2 p-1 text-white bg-green text-center font-weight-bold">
                        <span class="ft-25">プロフィール編集<span>
                    </h3>
                    <div class="p-3">
                        <div id="father-profile"></div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="{{ asset('js/app.js') }}" defer></script>
</html>