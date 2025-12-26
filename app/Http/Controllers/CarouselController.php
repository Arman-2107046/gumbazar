<?php

namespace App\Http\Controllers;

use App\Models\Carousel;
use Inertia\Inertia;

class CarouselController extends Controller
{
    public function index()
    {
        $carousels = Carousel::where('is_active', true)
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('Welcome', [
            'carousels' => $carousels,
        ]);
    }
}
