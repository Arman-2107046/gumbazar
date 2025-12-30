<?php

use App\Http\Controllers\AdController;
use App\Http\Controllers\CarouselController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/', [CarouselController::class, 'index']);



Route::get('/all-ads', [AdController::class, 'index'])
    ->name('ads.index');

Route::get('/ads/{ad}', [AdController::class, 'show'])
    ->name('ads.show');

// Route::get('/', [HomeController::class, 'index'])->name('home');


Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/category/{slug}', [HomeController::class, 'category'])->name('category.show');



Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/business', function () {
    return Inertia::render('Business');
});

Route::get('/career', function () {
    return Inertia::render('Career');
});

Route::get('/advertising', function () {
    return Inertia::render('Advertising');
});

Route::get('/faq', function () {
    return Inertia::render('Faq');
});

Route::get('/safety', function () {
    return Inertia::render('Safety');
});

Route::get('/policy', function () {
    return Inertia::render('Policy');
});

















Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';



// netstat -ano | findstr :3306
// taskkill /PID 6264 /F
