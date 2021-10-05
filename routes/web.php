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
    
    Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
    
    Route::get('/parent/dashboard', [App\Http\Controllers\Front\Parent\DashboardController::class, 'index'])->name('parent.dashboard');
    Route::get('/parent/profile/edit', [App\Http\Controllers\Front\Parent\ProfileController::class, 'edit'])->name('parent.profile.edit');
    Route::post('/parent/profile/store', [App\Http\Controllers\Front\Parent\ProfileController::class, 'store'])->name('parent.profile.store');
    
    // Route::get('/dashboard/player/{id}', [DashboardController::class, 'show'])->name('dashboard.player.show');
    
    // Route::get('/api/msgs', [NoticeController::class, 'index'])->name('msgs.get');
    // Route::put('/api/msgs/read/{id}', [NoticeController::class, 'read'])->name('message.read');
    // Route::post('/api/msgs/reply/{id}', [NoticeController::class, 'saveReplyMsg'])->name('message.reply');
    // Route::get('/api/players', [PlayerController::class, 'index'])->name('players.get');
    
    Route::get('/player/dashboard', [App\Http\Controllers\Front\Player\DashboardController::class, 'index'])->name('player.dashboard');
    
    Route::get('/player/profile/edit', [App\Http\Controllers\Front\Player\ProfileController::class, 'edit'])->name('player.profile.edit');
    Route::post('/player/profile/store', [App\Http\Controllers\Front\Player\ProfileController::class, 'store'])->name('player.profile.store');

    Route::get('/player/info/edit', [App\Http\Controllers\Front\Player\InfoController::class, 'edit'])->name('player.edit.info');
    Route::post('/player/info/store', [App\Http\Controllers\Front\Player\InfoController::class, 'store'])->name('player.store.info');

    Route::get('/player/goal/edit', [App\Http\Controllers\Front\Player\GoalManageController::class, 'edit'])->name('player.edit.goal');
    Route::post('/player/goal/store', [App\Http\Controllers\Front\Player\GoalManageController::class, 'store'])->name('player.store.goal');

    Route::get('/player/match/edit', [App\Http\Controllers\Front\Player\MatchController::class, 'edit'])->name('player.edit.match');
    Route::post('/player/match/store', [App\Http\Controllers\Front\Player\MatchController::class, 'store'])->name('player.store.match');

    Route::get('/player/result/edit', [App\Http\Controllers\Front\Player\ResultController::class, 'edit'])->name('player.edit.result');
    Route::post('/player/result/store', [App\Http\Controllers\Front\Player\ResultController::class, 'store'])->name('player.store.result');

});






