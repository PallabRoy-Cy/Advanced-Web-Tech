<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'pname' => 'required|max:255',
            'brand' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'validation_errors' => $validator->messages(),

            ]);
        } else {
            $product = new Product();
            $product->pname = $request->input('pname');
            $product->brand = $request->input('brand');
            $product->selling_price = $request->input('selling_price');
            $product->orginal_price = $request->input('orginal_price');
            $product->qty = $request->input('qty');

            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $filename = time() . '.' . $extension;
                $file->move('uploads/product/', $filename);
                $product->image = 'uploads/product/' . $filename;
            }
            $product->save();
            return response()->json([
                'status' => 200,
                'message' => 'Product Added Successfully',
            ]);
        }
    }

    public function view(Request $request)
    {
        $product = Product::all();
        return response()->json([
            'status' => 200,
            'product' => $product,
        ]);
    }
}
