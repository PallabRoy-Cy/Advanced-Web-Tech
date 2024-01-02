<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/allproducts', [ProductController::class, 'allproducts']);
Route::delete('/delete/{id}', [ProductController::class, 'delete']);
Route::get('/getproduct/{id}', [ProductController::class, 'getProduct']);
Route::put('/updateproduct/{id}', [ProductController::class, 'update']);
Route::get('/search/{key}', [ProductController::class, 'search']);



Route::middleware('auth:sanctum')->group(function () {

    Route::get('/sanctum/csrf-cookie', function (Request $request) {
        return response()->json(['message' => 'CSRF cookie set']);
    });
    Route::post('/addproduct', [ProductController::class, 'addproduct']);
    Route::get('/useres', [AuthController::class, 'getUserDetails']);
    Route::post('/logout', [AuthController::class, 'logout']);
    
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });