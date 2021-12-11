<?php

namespace App\Http\Controllers;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductAPIController extends Controller
{
    //
    public function list(){
     $products=Products::all();
     return $products;
    }

}
