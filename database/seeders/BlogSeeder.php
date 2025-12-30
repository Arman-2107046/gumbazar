<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Blog;
use Illuminate\Support\Str;

class BlogSeeder extends Seeder
{
    public function run(): void
    {
        $blogs = [
            // 🔁 REPLACED FIRST THREE
            [
                'title' => 'Beginner Guide to Online Shopping',
                'category' => 'guides',
                'excerpt' => 'A complete beginner-friendly guide to shopping online with confidence.',
                'content' => 'This is sample blog content. You can update it later.',
            ],
            [
                'title' => 'Things to Check Before Buying Used Products',
                'category' => 'guides',
                'excerpt' => 'Important things you should always check before buying pre-owned items.',
                'content' => 'This is sample blog content. You can update it later.',
            ],
            [
                'title' => 'Marketplace News You Should Not Miss',
                'category' => 'news',
                'excerpt' => 'Key marketplace updates and news every user should know.',
                'content' => 'This is sample blog content. You can update it later.',
            ],

            // ✅ REST REMAINS
            [
                'title' => 'New Features You Should Know',
                'category' => 'news',
                'excerpt' => 'An overview of newly launched platform features.',
                'content' => 'This is sample blog content. You can update it later.',
            ],
            [
                'title' => 'Tips to Sell Faster',
                'category' => 'tips',
                'excerpt' => 'Effective tips to help you sell products faster.',
                'content' => 'This is sample blog content. You can update it later.',
            ],
            [
                'title' => 'Writing Better Ad Titles',
                'category' => 'tips',
                'excerpt' => 'How strong titles can increase your ad visibility.',
                'content' => 'This is sample blog content. You can update it later.',
            ],
            [
                'title' => 'Best Pricing Strategies for Sellers',
                'category' => 'tips',
                'excerpt' => 'Pricing strategies that attract more buyers.',
                'content' => 'This is sample blog content. You can update it later.',
            ],
            [
                'title' => 'Current Market Trends',
                'category' => 'market_updates',
                'excerpt' => 'An overview of current buying and selling trends.',
                'content' => 'This is sample blog content. You can update it later.',
            ],
            [
                'title' => 'Popular Categories This Month',
                'category' => 'market_updates',
                'excerpt' => 'Categories that are trending among buyers.',
                'content' => 'This is sample blog content. You can update it later.',
            ],
            [
                'title' => 'Buyer Behavior Insights',
                'category' => 'market_updates',
                'excerpt' => 'Understanding how buyers make decisions.',
                'content' => 'This is sample blog content. You can update it later.',
            ],
            [
                'title' => 'Important Platform Announcement',
                'category' => 'announcements',
                'excerpt' => 'Official updates from the platform team.',
                'content' => 'This is sample blog content. You can update it later.',
            ],
            [
                'title' => 'Policy Updates You Must Know',
                'category' => 'announcements',
                'excerpt' => 'Recent changes to our platform policies.',
                'content' => 'This is sample blog content. You can update it later.',
            ],
            [
                'title' => 'Security Improvements Announcement',
                'category' => 'announcements',
                'excerpt' => 'New security measures introduced on the platform.',
                'content' => 'This is sample blog content. You can update it later.',
            ],
            [
                'title' => 'How We Protect Buyers and Sellers',
                'category' => 'guides',
                'excerpt' => 'Learn about the safety systems we use.',
                'content' => 'This is sample blog content. You can update it later.',
            ],
            [
                'title' => 'Growing Your Seller Reputation',
                'category' => 'tips',
                'excerpt' => 'Steps to build trust and credibility as a seller.',
                'content' => 'This is sample blog content. You can update it later.',
            ],
        ];

        foreach ($blogs as $blog) {
            Blog::updateOrCreate(
                [
                    'slug' => Str::slug($blog['title']),
                ],
                [
                    'title' => $blog['title'],
                    'category' => $blog['category'],
                    'excerpt' => $blog['excerpt'],
                    'content' => $blog['content'],
                    'is_published' => true,
                    'published_at' => now(),
                ]
            );
        }
    }
}
