<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Ad;
use App\Models\AdImage;
use App\Models\User;
use App\Models\Category;
use App\Models\Location;
use Illuminate\Support\Carbon;

class AdSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::first();
        $categories = Category::with('subcategories')->get();
        $locations = Location::all();

        if (! $user || $categories->isEmpty() || $locations->isEmpty()) {
            $this->command->warn('Users, categories, subcategories, or locations missing.');
            return;
        }

        $imageUrls = [
            'https://images.pexels.com/photos/18105/pexels-photo.jpg',
            'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg',
            'https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg',
        ];

        $totalAds = 300;
        $created = 0;

        while ($created < $totalAds) {
            foreach ($categories as $category) {
                foreach ($category->subcategories as $subcategory) {

                    if ($created >= $totalAds) {
                        break 2;
                    }

                    $location = $locations[$created % $locations->count()];

                    $title = "{$subcategory->name} – Premium Quality Product";

                    $description = "
This {$subcategory->name} is a high-quality item listed under the {$category->name} category.
The product is in excellent condition and has been carefully maintained.

Features and details:
• Original and authentic product
• Clean condition with no major defects
• Suitable for both personal and professional use
• Long-lasting performance and reliability
• Ready for immediate delivery or pickup

If you are looking for a dependable {$subcategory->name}, this listing offers great value.
Please contact for more details, pricing discussion, or to arrange a viewing.
                    ";

                    $ad = Ad::create([
                        'user_id'        => $user->id,
                        'category_id'    => $category->id,
                        'subcategory_id' => $subcategory->id,
                        'location_id'    => $location->id,
                        'condition'      => ['new', 'pre_owned', 'refurbished'][array_rand(['new', 'pre_owned', 'refurbished'])],
                        'title'          => $title,
                        'description'    => trim($description),
                        'price'          => rand(2000, 200000),
                        'phone_number'   => '01700000000',
                        'whatsapp_number'=> '01700000000',
                        'status'         => 'active',
                        'expires_at'     => Carbon::now()->addDays(30),
                    ]);

                    // Attach images
                    $sortOrder = 0;
                    foreach ($imageUrls as $url) {
                        AdImage::create([
                            'ad_id'       => $ad->id,
                            'image_path'  => $url,   // ✅ correct column
                            'sort_order'  => $sortOrder++,
                        ]);
                    }

                    $created++;
                }
            }
        }
    }
}
