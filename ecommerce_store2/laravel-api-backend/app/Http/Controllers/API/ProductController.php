<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Controllers\API\AuthService;






class ProductController extends Controller
{
    public function addproduct(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'product' => 'required',
            'manufacturer' => ['required'],
            'price' => 'required',
            'quantity' => 'required',
            'tags' => 'required',
            'description' => 'required',
            'pdimg' => 'required'
        ]);
 
        if ($validator->fails()) {

            return response()->json([
                'status' => 422,
                'validation_errors' => $validator->messages(),

            ]);
        } else {
    
        try {
        //$token = $request->header('Authorization');
        $user = Auth::user();
        // if ($user) {
        //     // Access the user ID directly from the authenticated user
        //     $userId = $user->id;
        
        //     // You can also use the following alternative to retrieve the user ID
        //     // $userId = $user->getKey();
        
        //     dd($userId);
        // }

        if (!$user) {
            throw new \Exception('User is not authenticated.');
        }


    
        $product = new Product();

        // Assign user ID to the product
        $product->user_id = $user->id;
        $product->product = $request->input('product');
        $product->manufacturer = $request->input('manufacturer');
        $product->price = $request->input('price');
        $product->tags = $request->input('tags');
        $product->quantity = $request->input('quantity');
        $product->description = $request->input('description');

        if ($request->hasFile('pdimg')) {
            $file = $request->file('pdimg');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('products_image', $filename);
            $product->pdimg = 'products_image/' . $filename;
        }

        $product->save();

        return response()->json([
            'status' => 200,
            'message' => 'Product Added Successfully',
        ]);
    } catch (\Exception $e) 
    {

        return response()->json([
        'status' => 500,
        'message' => $e->getMessage(),
    ]);
} 
}

}
    public function allproducts()
    {
        return Product::all();
    }

    public function delete($id)
    {
        $result = Product::where('id', $id)->delete();
        if ($result) {
            return ["result" => "Product has been deleted"];
        } else {
            return ["result" => "Product doesn't exist"];
        }
    }

    public function getProduct($id)
    {
        return Product::find($id);
    }


    public function update(Request $request, $id)
    {

        $product = Product::find($id);
        $product->product = $request->input('product');
        $product->tags = $request->input('tags');
        $product->manufacturer = $request->input('manufacturer');
        $product->price = $request->input('price');
        $product->quantity = $request->input('quantity');
        $product->description = $request->input('description');

        if($request->file('pdimg')){
            $product->pdimg = $request->file('pdimg')->store('products_image');
        }

        $product->save();

        return "success";

       /*  $formData = $request->validate([
            'product' => 'required',
            'manufacturer' => ['required'],
            'price' => 'required',
            'quantity' => 'required',
            'tags' => 'required',
            'description' => 'required'
        ]);
        
        if($request->hasFile('pdimg')){
            $formData['pdimg'] = $request->file('pdimg')->store('products_image');
        }

        $id->update($formData);

        return "Success"; */
    }

    public function search($key){
        return Product::where('product','Like',"%$key%")
            ->orWhere('description','like',"%$key%")
            ->orWhere('tags','like',"%$key%")
            ->orWhere('manufacturer','like',"%$key%")->get();
    }

    }

