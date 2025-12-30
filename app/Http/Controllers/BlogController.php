<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Blog listing with pagination & category filter
     */
    public function index(Request $request)
    {
        $blogs = Blog::where('is_published', true)
            ->when($request->category, function ($q) use ($request) {
                $q->where('category', $request->category);
            })
            ->latest('published_at')
            ->paginate(9)
            ->withQueryString();

        return Inertia::render('Blogs/Index', [
            'blogs' => $blogs,
            'activeCategory' => $request->category,
        ]);
    }

    /**
     * Single blog page
     */
    public function show(string $slug)
    {
        $blog = Blog::where('slug', $slug)
            ->where('is_published', true)
            ->firstOrFail();

        return Inertia::render('Blogs/Show', [
            'blog' => $blog,
        ]);
    }
}
