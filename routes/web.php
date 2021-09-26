<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Front\Admin\DashboardController;
use App\Http\Controllers\Front\Admin\NoticeController;
use App\Http\Controllers\Front\Admin\PlayerController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
})->name('home');

Auth::routes();

Route::middleware(['auth', 'verified'])->name('account.')->group(function () {

    Route::get('/home', [HomeController::class, 'index'])->name('home');

    Route::get('/profile/edit/1', [App\Http\Controllers\Front\Player\ProfileController::class, 'index'])->name('player.profile.edit');
    Route::get('/profile/edit/2', [App\Http\Controllers\Front\Parent\ProfileController::class, 'index'])->name('parent.profile.edit');
    Route::post('/profile/store/player', [App\Http\Controllers\Front\Player\ProfileController::class, 'store'])->name('player.profile.store');
    Route::post('/profile/store/parent', [App\Http\Controllers\Front\Parent\ProfileController::class, 'store'])->name('parent.profile.store');
    
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/player/{id}', [DashboardController::class, 'show'])->name('dashboard.player.show');

    Route::get('/api/msgs', [NoticeController::class, 'index'])->name('msgs.get');
    Route::put('/api/msgs/read/{id}', [NoticeController::class, 'read'])->name('message.read');
    Route::post('/api/msgs/reply/{id}', [NoticeController::class, 'saveReplyMsg'])->name('message.reply');
    
    Route::get('/api/players', [PlayerController::class, 'index'])->name('players.get');

    Route::get('/info/edit', [App\Http\Controllers\Front\Player\InfoController::class, 'index'])->name('edit.info');
    Route::post('/info/store', [App\Http\Controllers\Front\Player\InfoController::class, 'store'])->name('store.info');

});






