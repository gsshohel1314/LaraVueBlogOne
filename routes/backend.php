<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\PostController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\DashboardController;


Route::group(['prefix'=>'backend', 'as'=>'backend.', 'middleware'=>['auth']], function(){
    Route::get('/{anypath}', DashboardController::class)->where('path', '.*');

    // Dashboard
    Route::get('dashboard', DashboardController::class)->name('dashboard');


    // Category
    Route::post('category/create', [CategoryController::class, 'create']);
    
    // Post
    // Route::resource('post', PostController::class);
});
