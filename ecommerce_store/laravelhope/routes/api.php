<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('store-product', [ProductController::class, 'store']);
Route::get('view-product', [ProductController::class, 'view']);

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/checkingAuthenticated', function () {
        return response()->json([
            'message' => 'Authenticated', 'status' => 200], 200);
    });
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
