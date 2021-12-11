<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
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
    return view('create');
});

Route::post('/store',[ProductController::class,'store']);
Route::get('/show',[ProductController::class,'show']);
Route::get('/delete/{id}',[ProductController::class,'destroy']);
Route::get('/edit/{id}',[ProductController::class,'edit']);
Route::post('/update/{id}',[ProductController::class,'update']);