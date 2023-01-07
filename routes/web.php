<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\AbsensiController;
use App\Http\Controllers\JabatanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\KariawanController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HariliburController;

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
Route::put('/updatejabatan/{id}', [JabatanController::class, 'update'])->middleware(['auth', 'OnlyAdmin'])->name('update');
Route::delete('/deletejabatan/{id}', [JabatanController::class, 'destroy'])->middleware(['auth', 'OnlyAdmin'])->name('delete');

//kariawan route
Route::get('/kariawan',[KariawanController::class, 'index'])->middleware(['auth', 'OnlyAdmin'])->name('kariawan');
Route::get('/addkariawan',[KariawanController::class, 'addkariawan'])->middleware(['auth', 'OnlyAdmin'])->name('addkariawan');
Route::post('/storekariawan',[KariawanController::class, 'store'])->middleware(['auth', 'OnlyAdmin'])->name('storekariawan');
Route::get('/editkariawan/{id}', [KariawanController::class, 'edit'])->middleware(['auth', 'OnlyAdmin'])->name('editkariawan');
Route::put('/updatekariawan/{id}', [KariawanController::class, 'update'])->middleware(['auth', 'OnlyAdmin'])->name('updatekariawan');
Route::delete('/deletekariawan/{id}', [KariawanController::class, 'destroy'])->middleware(['auth', 'OnlyAdmin'])->name('deletekariawan');

//Hari Libur
Route::get('/harilibur',[HariliburController::class, 'index'])->middleware(['auth', 'OnlyAdmin'])->name('harilibur');
Route::get('/addharilibur',[HariliburController::class, 'addharilibur'])->middleware(['auth', 'OnlyAdmin'])->name('addharilibur');
Route::post('/storeharilibur',[HariliburController::class, 'store'])->middleware(['auth', 'OnlyAdmin'])->name('storeharilibur');
Route::get('/editharilibur/{id}', [HariliburController::class, 'edit'])->middleware(['auth', 'OnlyAdmin'])->name('editharilibur');
Route::put('/updateharilibur/{id}', [HariliburController::class, 'update'])->middleware(['auth', 'OnlyAdmin'])->name('updateharilibur');
Route::delete('/deleteharilibur/{id}', [HariliburController::class, 'destroy'])->middleware(['auth', 'OnlyAdmin'])->name('deleteharilibur');

//Absensi
Route::get('/absensi',[AbsensiController::class, 'index'])->middleware(['auth', 'OnlyAdmin'])->name('absensi');
Route::get('/addabsensi',[AbsensiController::class, 'addabsensi'])->middleware(['auth', 'OnlyAdmin'])->name('addabsensi');
Route::post('/storeabsensi',[AbsensiController::class, 'store'])->middleware(['auth', 'OnlyAdmin'])->name('storeabsensi');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::get('/profile', [ProfileController::class, 'user'])->name('profile.user');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::patch('/profile', [ProfileController::class, 'update1'])->name('profile.update1');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';