<?php

use App\Http\Controllers\Backend\DashboardController;
use Illuminate\Support\Facades\Route;


Route::group(['prefix'=>'backend', 'as'=>'backend.', 'middleware'=>['auth']], function(){
    // Dashboard
    Route::get('dashboard', DashboardController::class)->name('dashboard');

    // Category

    // Post
});
