<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function contact(){
        return view('pages.Contact');
    }

    public function contactSubmit(Request $request){
        //using requests validate method
        $validate = $request->validate(
            [
                'name'=>'required|min:5|max:10',
                'textarea'=>'required',
                'email'=>'email',
                'phone'=>'required|regex:/^([0-9\s\-\+\(\)]*)$/'
            ],
            [
              
            ]
        );

        return "Submitted Successfully";  
    }
}

