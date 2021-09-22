<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Account\ProfileController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Dashboard\NoticeController;


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
    
    Route::get('/profile/new', [ProfileController::class, 'index'])->name('profile.new');
    Route::post('/profile/store/player', [ProfileController::class, 'store_player'])->name('profile.store.player');
    Route::post('/profile/store/parent', [ProfileController::class, 'store_parent'])->name('profile.store.parent');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/api/msgs', [NoticeController::class, 'index'])->name('msgs.get');
    Route::put('/api/msgs/read/{id}', [NoticeController::class, 'read'])->name('message.read');
    Route::post('/api/msgs/reply/{id}', [NoticeController::class, 'saveReplyMsg'])->name('message.reply');

});






