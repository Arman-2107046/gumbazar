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
            'Mobiles' => [
                'Smartphones',
                'Feature Phones',
                'Mobile Accessories',
                'Chargers & Cables',
                'Power Banks',
                'Mobile Repairs',
            ],

            'Electronics' => [
                'Laptops',
                'Tablets',
                'Televisions',
                'Cameras',
                'Headphones',
                'Smart Devices',
            ],

            'Vehicles' => [
                'Cars',
                'Motorcycles',
                'Bicycles',
                'Electric Vehicles',
                'Vehicle Parts',
                'Vehicle Services',
            ],

            'Home & Living' => [
                'Furniture',
                'Home Decor',
                'Kitchen Appliances',
                'Lighting',
                'Beds & Mattresses',
                'Cleaning Supplies',
            ],

            "Men's Fashion" => [
                'Shirts',
                'T-Shirts',
                'Pants',
                'Shoes',
                'Watches',
                'Accessories',
            ],

            "Women's Fashion" => [
                'Dresses',
                'Tops',
                'Handbags',
                'Shoes',
                'Jewelry',
                'Beauty Products',
            ],

            'Hobbies & Sports' => [
                'Fitness Equipment',
                'Outdoor Sports',
                'Indoor Games',
                'Musical Instruments',
                'Art Supplies',
                'Collectibles',
            ],

            'Education' => [
                'Books',
                'Online Courses',
                'Coaching Centers',
                'Language Learning',
                'Skill Development',
                'Educational Tools',
            ],
        ];

        foreach ($data as $categoryName => $subcategories) {

            $category = Category::updateOrCreate(
                ['slug' => Str::slug($categoryName)],
                [
                    'name' => $categoryName,
                    'thumbnail' => $thumbnailUrl,
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
