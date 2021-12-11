<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\Logincontroller;

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

Route::get('/', [HomeController::class,'home'])->name('home');
Route::get('/contact', [ContactController::class,'contact'])->name('contact');
Route::post('/contact', [ContactController::class,'ContactSubmit'])->name('contact');
Route::get('/registration', [RegistrationController::class,'registration'])->name('registration');
Route::post('/registration', [RegistrationController::class,'RegistrationSubmit'])->name('registration');
Route::get('/registration/edit/{id}/{name}',[RegistrationController::class,'edit']);
Route::get('/registration/list',[RegistrationController::class,'list'])->name('list');
Route::get('/login', [Logincontroller::class,'login'])->name('login');
Route::post('/login', [LoginController::class,'loginSubmit'])->name('login');


