<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\GameController;
use App\Http\Controllers\PostController;

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



Route::group(["middleware" => ["auth"]], function() {
    Route::get("games",[GameController::class, "index"])->name("games.index");
    Route::resource('posts', PostController::class);

});

require __DIR__.'/auth.php';



Route::group(["middleware" => ["auth:admin", 'verified']], function(){
    Route::get("admin/games/create", [GameController::class, "create"])->name("admin.games.create");
    Route::post("admin/games/store", [GameController::class, "store"])->name("admin.games.store");

    Route::get('admin/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');
});


require __DIR__.'/admin.php';
