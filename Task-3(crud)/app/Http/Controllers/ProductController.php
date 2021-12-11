<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
   //
   public function Create(){
    return view('create');
}
    public function store(Request $request){
    
    //using class validate method
    // $this->validate(
    //     $request,
    //     [
    //         'name'=>'required|min:5|max:10|regex:/^[A-Za-z]+$/',
    //         'price'=>'required',
    //         'qty'=>'qty',
    //         'description'=>'required|regex:/^([0-9\s\-\+\(\)]*)$/'
    //     ],
    //     [
    //         'name.required'=>'Please put your name',
    //         'name.min'=>'Name must be greater than 2 charcters'
    //     ]
    // );

    $var = new Products();
    $var->name= $request->get('name');
    $var->price = $request->get('price');
    $var->qty=$request->get('qty');
    $var->description = $request->get('description');
    $var->save();
    echo "<h1>Submit Successfully<h1>";
}
/**
* Display the specified resource.
*
* @param  \App\Models\Post  $post
* @return \Illuminate\Http\Response
*/
public function show(Products $products)
{
   $products=Products::all();

   return view('list',['products'=>$products]);
}

/**
* Show the form for editing the specified resource.
*
* @param  \App\Models\Post  $post
* @return \Illuminate\Http\Response
*/
public function edit(Products $products,$id)
{
   $products=Products::find($id);
   return view('edit',['products'=>$products]);
}

/**
* Update the specified resource in storage.
*
* @param  \Illuminate\Http\Request  $request
* @param  \App\Models\Post  $post
* @return \Illuminate\Http\Response
*/
public function update(Request $request, Products $products,$id)
{
    $products=Products::find($id);
    $products->name=$request->get('name');
    $products->price=$request->get('price');
    $products->qty=$request->get('qty');
    $products->description=$request->get('description');

     $products->save();

     return redirect('show');
}

/**
* Remove the specified resource from storage.
*
* @param  \App\Models\Post  $post
* @return \Illuminate\Http\Response
*/
public function destroy(Products $products,$id)
{
   $products=Products::find($id);
   $products->delete();
   return redirect('show');

}
}
