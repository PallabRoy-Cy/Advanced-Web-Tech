<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;

class AuthService
{
    public function authenticateUser()
    {
        $userId = session('uid');
    }
}