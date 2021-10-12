<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PlayerController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware(['throttle:seventy'])->group(function() {
    
    Route::apiResource('players', PlayerController::class)->only(['index', 'show']);
    
    Route::get('player/info', 'App\Http\Controllers\Api\PlayerController@info');
    Route::get('player/goal', 'App\Http\Controllers\Api\PlayerController@goal');
    
});