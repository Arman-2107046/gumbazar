<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use App\Models\Location;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdController extends Controller
{
    /**
     * Show all ads (grid with filters + pagination)
     */
    public function index(Request $request)
    {
        $ads = Ad::with(['images', 'location', 'user'])
            ->where('status', 'active')

            // 📍 Location filter
            ->when($request->location, function ($q) use ($request) {
                $q->where('location_id', $request->location);
            })

            // 💰 Price filters
            ->when($request->min_price, function ($q) use ($request) {
                $q->where('price', '>=', $request->min_price);
            })
            ->when($request->max_price, function ($q) use ($request) {
                $q->where('price', '<=', $request->max_price);
            })

            // ✅ Verified sellers (users.is_verified = true)
            ->when($request->verified === '1', function ($q) {
                $q->whereHas('user', function ($u) {
                    $u->where('is_verified', true);
                });
            })

            // 👤 Members only (users.is_verified = false)
            ->when($request->member === '1', function ($q) {
                $q->whereHas('user', function ($u) {
                    $u->where('is_verified', false);
                });
            })

            ->latest()
            ->paginate(8)
            ->withQueryString(); // 🔑 keep filters on pagination

        return Inertia::render('AllAds', [
            'ads' => $ads,
            'locations' => Location::all(),
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
     * Show single ad (with related ads)
     */
    public function show(Ad $ad)
    {
        $ad->load([
            'images',
            'user',
            'location',
            'category',
        ]);

        // 🔁 Related ads (same category, exclude current)
        $relatedAds = Ad::with(['images', 'location'])
            ->where('category_id', $ad->category_id)
            ->where('id', '!=', $ad->id)
            ->where('status', 'active')
            ->latest()
            ->limit(4)
            ->get();

        return Inertia::render('AdShow', [
            'ad' => $ad,
            'relatedAds' => $relatedAds,
        ]);
    }
}
