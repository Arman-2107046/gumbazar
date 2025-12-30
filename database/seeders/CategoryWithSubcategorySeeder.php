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
        $data = [
            'Mobiles' => [
                'thumbnail' => 'https://i.pinimg.com/736x/e3/68/ef/e368ef3484e0eaf48e36a9f014963d27.jpg',
                'subcategories' => [
                    'Smartphones',
                    'Feature Phones',
                    'Mobile Accessories',
                    'Chargers & Cables',
                    'Power Banks',
                    'Mobile Repairs',
                ],
            ],

            'Electronics' => [
                'thumbnail' => 'https://i.pinimg.com/736x/56/ba/83/56ba83a4120c89af29b2d556da67b122.jpg',
                'subcategories' => [
                    'Laptops',
                    'Tablets',
                    'Televisions',
                    'Cameras',
                    'Headphones',
                    'Smart Devices',
                ],
            ],

            'Vehicles' => [
                'thumbnail' => 'https://i.pinimg.com/1200x/47/cc/23/47cc23add152f95861716a434d46daca.jpg',
                'subcategories' => [
                    'Cars',
                    'Motorcycles',
                    'Bicycles',
                    'Electric Vehicles',
                    'Vehicle Parts',
                    'Vehicle Services',
                ],
            ],

            'Home & Living' => [
                'thumbnail' => 'https://i.pinimg.com/1200x/4e/bf/61/4ebf61c8743198419d0c407ea93dbe80.jpg',
                'subcategories' => [
                    'Furniture',
                    'Home Decor',
                    'Kitchen Appliances',
                    'Lighting',
                    'Beds & Mattresses',
                    'Cleaning Supplies',
                ],
            ],

            "Men's Fashion" => [
                'thumbnail' => 'https://i.pinimg.com/736x/28/fc/bb/28fcbbf0c1a8c691f4a6cc2aebf08c5a.jpg',
                'subcategories' => [
                    'Shirts',
                    'T-Shirts',
                    'Pants',
                    'Shoes',
                    'Watches',
                    'Accessories',
                ],
            ],

            "Women's Fashion" => [
                'thumbnail' => 'https://i.pinimg.com/736x/9a/f0/d5/9af0d5d0f5763a06c0aacf35ded2a295.jpg',
                'subcategories' => [
                    'Dresses',
                    'Tops',
                    'Handbags',
                    'Shoes',
                    'Jewelry',
                    'Beauty Products',
                ],
            ],

            'Hobbies & Sports' => [
                'thumbnail' => 'https://i.pinimg.com/736x/56/71/32/567132eacdcce7c19ae8646fbe142ff9.jpg',
                'subcategories' => [
                    'Fitness Equipment',
                    'Outdoor Sports',
                    'Indoor Games',
                    'Musical Instruments',
                    'Art Supplies',
                    'Collectibles',
                ],
            ],

            'Education' => [
                'thumbnail' => 'https://i.pinimg.com/736x/dd/4f/ef/dd4fef3522358fef4e353578404d619e.jpg',
                'subcategories' => [
                    'Books',
                    'Online Courses',
                    'Coaching Centers',
                    'Language Learning',
                    'Skill Development',
                    'Educational Tools',
                ],
            ],
        ];

        foreach ($data as $categoryName => $categoryData) {

            $category = Category::updateOrCreate(
                ['slug' => Str::slug($categoryName)],
                [
                    'name' => $categoryName,
                    'thumbnail' => $categoryData['thumbnail'],
                    'is_active' => true,
                ]
            );

            foreach ($categoryData['subcategories'] as $subName) {
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
