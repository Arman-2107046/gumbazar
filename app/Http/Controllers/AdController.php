<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use App\Models\Category;
use App\Models\Location;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdController extends Controller
{
    /**
     * Show all ads with filters + pagination
     */
    public function index(Request $request)
    {
        $ads = Ad::query()
            ->with([
                'images',
                'location:id,name',
                'user:id,is_verified',
            ])
            ->where('status', 'active')

            // 📍 Location filter
            ->when($request->filled('location'), function ($q) use ($request) {
                $q->where('location_id', $request->location);
            })

            // 💰 Price range
            ->when($request->filled('min_price'), function ($q) use ($request) {
                $q->where('price', '>=', $request->min_price);
            })
            ->when($request->filled('max_price'), function ($q) use ($request) {
                $q->where('price', '<=', $request->max_price);
            })

            // ✅ Verified sellers
            ->when($request->verified === '1', function ($q) {
                $q->whereHas('user', function ($u) {
                    $u->where('is_verified', true);
                });
            })

            // 👤 Member sellers
            ->when($request->member === '1', function ($q) {
                $q->whereHas('user', function ($u) {
                    $u->where('is_verified', false);
                });
            })

            ->latest()
            ->paginate(8)
            ->withQueryString();

        return Inertia::render('AllAds', [
            'ads' => $ads,

            // 📂 Sidebar categories
            'categories' => Category::where('is_active', true)
                ->select('id', 'name', 'slug')
                ->orderBy('name')
                ->get(),

            // 📍 Locations filter
            'locations' => Location::select('id', 'name')->orderBy('name')->get(),

            // 🔎 Active filters
            'filters' => $request->only([
                'location',
                'min_price',
                'max_price',
                'verified',
                'member',
            ]),
        ]);
    }

    /**
     * Show single ad with related ads
     */
    public function show(Ad $ad)
    {
        $ad->load([
            'images',
            'user',
            'location',
            'category',
        ]);

        $relatedAds = Ad::with(['images', 'location'])
            ->where('status', 'active')
            ->where('category_id', $ad->category_id)
            ->where('id', '!=', $ad->id)
            ->latest()
            ->limit(4)
            ->get();

        return Inertia::render('AdShow', [
            'ad' => $ad,
            'relatedAds' => $relatedAds,
        ]);
    }
}
