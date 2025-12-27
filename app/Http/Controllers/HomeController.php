<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Carousel;
use Inertia\Inertia;
use Illuminate\Http\Request;


class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome', [
            'categories' => Category::where('is_active', true)
                ->select('id', 'name', 'slug', 'thumbnail')
                ->get(),

            'carousels' => Carousel::where('is_active', true)->get(),
        ]);
    }

    public function category(Request $request, $slug)
    {
        $category = Category::where('slug', $slug)
            ->with([
                'subcategories' => fn($q) => $q->where('is_active', true),
            ])
            ->firstOrFail();

        $ads = $category->ads()
            ->where('status', 'active')
            ->whereNull('deleted_at')
            ->with([
                'images',
                'user:id,is_verified',
                'location:id,name',
            ])
            ->latest()
            ->paginate(8)
            ->withQueryString();

        return Inertia::render('Category/Show', [
            'category' => $category,
            'ads' => $ads,
            'filters' => $request->only([
                'subcategories',
                'min_price',
                'max_price',
                'location',
                'verified',
                'member',
            ]),
            'locations' => \App\Models\Location::select('id', 'name')->get(),
        ]);
    }
}
