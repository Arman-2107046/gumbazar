<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ad extends Model
{
    use SoftDeletes;

    /**
     * Mass assignable attributes
     */
    protected $fillable = [
        'user_id',
        'category_id',
        'subcategory_id',
        'location_id',
        'condition',
        'title',
        'description',
        'price',
        'phone_number',        // ✅ added
        'whatsapp_number',     // ✅ added
        'status',
        'expires_at',
    ];

    /**
     * Casts
     */
    protected $casts = [
        'price' => 'decimal:2',
        'expires_at' => 'datetime',
    ];

    /*
    |--------------------------------------------------------------------------
    | Relationships
    |--------------------------------------------------------------------------
    */

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function subcategory()
    {
        return $this->belongsTo(Subcategory::class);
    }

    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function images()
    {
        return $this->hasMany(AdImage::class);
    }

    /*
    |--------------------------------------------------------------------------
    | Helpers (simple & optional)
    |--------------------------------------------------------------------------
    */

    // public function isExpired(): bool
    // {
    //     return $this->expires_at !== null && $this->expires_at->isPast();
    // }

    // public function isActive(): bool
    // {
    //     return $this->status === 'active' && ! $this->isExpired();
    // }
}
