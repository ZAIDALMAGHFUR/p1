<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\JabatanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//dashboard route

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

//jabatan route
Route::get('/jabatan',[JabatanController::class, 'index'])->middleware(['auth', 'OnlyAdmin'])->name('jabatan');
Route::get('/addjabatan',[JabatanController::class, 'addjabatan'])->middleware(['auth', 'OnlyAdmin'])->name('addjabatan');
Route::post('/storejabatan',[JabatanController::class, 'store'])->middleware(['auth', 'OnlyAdmin'])->name('storejabatan');
Route::get('/editjabatan/{id}', [JabatanController::class, 'edit'])->middleware(['auth', 'OnlyAdmin'])->name('edit');
Route::post('/updatejabatan/{id}', [JabatanController::class, 'update'])->middleware(['auth', 'OnlyAdmin'])->name('update');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::get('/profile', [ProfileController::class, 'user'])->name('profile.user');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::patch('/profile', [ProfileController::class, 'update1'])->name('profile.update1');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';