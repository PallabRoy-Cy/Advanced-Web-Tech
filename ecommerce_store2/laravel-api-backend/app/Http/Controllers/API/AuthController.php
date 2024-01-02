<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;



class AuthController extends Controller
{

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:191',
            'email' => 'required|max:191|unique:users',
            'password' => 'required|confirmed',
        ]);

        if ($validator->fails()) {

            return response()->json([
                'status' => 422,
                'validation_errors' => $validator->messages(),

            ]);
        }


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $token = $user->createToken($user->email . '_Token')->plainTextToken;
        
        return response()->json([
            'status' => 200,
            'username' => $user->name,
            'token' => $token,
            'message' => 'Registered Successfully',
        ]);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|max:191',
            'password' => 'required',
        ]);
        if ($validator->fails()) {

            return response()->json([
                'status' => 422,
                'validation_errors' => $validator->messages(),

            ]);
        } else {

            $user = User::where('email', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                return response()->json([
                    'status' => 401,
                    'message' => 'User Not Found',
                ]);
            } else {

                // session(['uid' => $user->id]);
                // dd(session('uid'));
                $token = $user->createToken('auth_token')->plainTextToken;
                return response()->json([
                    'status' => 200,
                    'username' => $user->name,
                    'token' => $token,
                    'user' => $user,
                    'message' => 'Logged in Successfully',
                ]);
            }
        }
    }
    

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Logged out Successfully',
        ]);
    }

    public function getUserDetails()
    {
        //fetch user id without auth(); and find id by name
        $user = User::where('name', auth()->user()->name)->first();
            // Return user details
            return response()->json([
                'id' => $user->id,
                'name' => $user->name,
                // Add other properties as needed
            ]);
    }


}