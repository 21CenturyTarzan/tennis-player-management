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
    
    Route::apiResource('/players', PlayerController::class)->only(['index', 'show']);

    Route::get('/analysis/list', 'App\Http\Controllers\Api\AnalysisController@list');
    Route::get('/quotation/list', 'App\Http\Controllers\Api\QuotationController@list');

    Route::group(['prefix' => 'player'], function () {
        Route::get('/info', 'App\Http\Controllers\Api\InfoController@info');
        Route::post('/info/update/profile', 'App\Http\Controllers\Api\InfoController@updateProfile');
        Route::put('/info/update/password', 'App\Http\Controllers\Api\InfoController@updatePassword');
    
        Route::get('/goal/detail/{id}', 'App\Http\Controllers\Api\GoalManageController@detail');
        Route::get('/goal/last', 'App\Http\Controllers\Api\GoalManageController@last');
        Route::get('/goal/list', 'App\Http\Controllers\Api\GoalManageController@list');
        Route::post('/goal/store', 'App\Http\Controllers\Api\GoalManageController@store');
        Route::post('/goal/update/{id}', 'App\Http\Controllers\Api\GoalManageController@update');
        Route::delete('/goal/delete/{id}', 'App\Http\Controllers\Api\GoalManageController@delete');
    
        Route::get('/match/detail/{id}', 'App\Http\Controllers\Api\MatchController@detail');
        Route::get('/match/list', 'App\Http\Controllers\Api\MatchController@list');
        Route::post('/match/prepare/store', 'App\Http\Controllers\Api\MatchController@prepare_store');
        Route::post('/match/prepare/update/{id}', 'App\Http\Controllers\Api\MatchController@prepare_update');
        Route::post('/match/result/store', 'App\Http\Controllers\Api\MatchController@result_store');
        Route::post('/match/result/update/{id}', 'App\Http\Controllers\Api\MatchController@result_update');
        Route::delete('/match/delete/{id}', 'App\Http\Controllers\Api\MatchController@delete');
        
        Route::get('/favourite/list', 'App\Http\Controllers\Api\FavouriteController@list');
        Route::get('/favourite/set', 'App\Http\Controllers\Api\FavouriteController@set');

    });

});


Route::group(['prefix' => 'admin'], function () {
    // AdminController
    Route::post('/login', '\App\Http\Controllers\Api\AdminController@login')->name('adminlogin');

    Route::group(['middleware' => 'auth:admins'], function () {
        // AdminController
        Route::post('/logout', '\App\Http\Controllers\Api\AdminController@logout');

        // FathersController
        // Route::group(['prefix' => 'fathers'], function () {
        //     Route::get('/list', '\App\Http\Controllers\Api\FathersController@list');
          
        // });
    });
});