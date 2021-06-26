<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use App\Models\Category;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::updateOrCreate([
            'user_id' => User::where('status', true)->first()->id,
            'category_id' => Category::first()->id,
            'title' => 'Example post',
            'body' => 'This is example post'
        ]);
    }
}
