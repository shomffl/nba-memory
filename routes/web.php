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

Route::group(["middleware" => ["auth", "can:admin"]], function(){
    Route::get("/games/create", [GameController::class, "create"])->name("games.create");
    Route::post("/games/store", [GameController::class, "store"])->name("games.store");
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

require __DIR__.'/auth.php';

Route::prefix('admin')->name('admin.')->group(function(){
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->middleware(['auth:admin', 'verified'])->name('dashboard');

    require __DIR__.'/admin.php';
});

