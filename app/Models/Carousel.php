<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Carousel extends Model
{
    //
    protected $fillable = [
        'name',
        'image_path',
        'link',
        'sort_order',
        'is_active',
    ];
}
