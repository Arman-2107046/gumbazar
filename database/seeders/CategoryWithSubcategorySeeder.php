<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Support\Str;

class CategoryWithSubcategorySeeder extends Seeder
{
    public function run(): void
    {
        $thumbnailUrl = 'https://images.pexels.com/photos/28839480/pexels-photo-28839480.jpeg';

        $data = [
            'Electronics' => [
                'Mobile Phones',
                'Laptops',
                'Tablets',
                'Accessories',
            ],
            'Vehicles' => [
                'Cars',
                'Motorcycles',
                'Bicycles',
            ],
            'Real Estate' => [
                'Apartments',
                'Houses',
                'Land',
            ],
            'Services' => [
                'Cleaning',
                'Plumbing',
                'Electrician',
            ],
        ];

        foreach ($data as $categoryName => $subcategories) {

            $category = Category::updateOrCreate(
                ['slug' => Str::slug($categoryName)],
                [
                    'name' => $categoryName,
                    'thumbnail' => $thumbnailUrl, // ✅ same image for all
                    'is_active' => true,
                ]
            );

            foreach ($subcategories as $subName) {
                Subcategory::updateOrCreate(
                    [
                        'category_id' => $category->id,
                        'name' => $subName,
                    ],
                    ['is_active' => true]
                );
            }
        }
    }
}
