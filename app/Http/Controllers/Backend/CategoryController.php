<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function create(Request $request){
        $this->validate($request,[
            'name'=>'required|string',
            'description'=>'nullable|string'
        ]);

        Category::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);
    }
}
