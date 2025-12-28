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
            'subcategories' => fn ($q) => $q->where('is_active', true),
        ])
        ->firstOrFail();

    $ads = $category->ads()
        ->where('status', 'active')
        ->whereNull('deleted_at')

        // Subcategories
        ->when($request->filled('subcategories'), function ($q) use ($request) {
            $q->whereIn('subcategory_id', $request->subcategories);
        })

        // Location
        ->when($request->filled('location'), function ($q) use ($request) {
            $q->where('location_id', $request->location);
        })

        // Min price
        ->when($request->filled('min_price'), function ($q) use ($request) {
            $q->where('price', '>=', $request->min_price);
        })

        // Max price
        ->when($request->filled('max_price'), function ($q) use ($request) {
            $q->where('price', '<=', $request->max_price);
        })

        // Verified sellers
        ->when($request->verified === "1", function ($q) {
            $q->whereHas('user', function ($u) {
                $u->where('is_verified', true);
            });
        })

        // Members (not verified)
        ->when($request->member === "1", function ($q) {
            $q->whereHas('user', function ($u) {
                $u->where('is_verified', false);
            });
        })

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
