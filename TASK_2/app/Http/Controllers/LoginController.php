<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Login;

class LoginController extends Controller
{
    public function login(){
        return view('pages.Login');
    }

    public function loginSubmit(Request $request){
        
         $validate = $request->validate(
            [
                
            
                'username'=>'required',
                'pass'=>'required'
            ],
            [
              
            ]
        );

        return "Login Successfully"; 
    }
        
}

