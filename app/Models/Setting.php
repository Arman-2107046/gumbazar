<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    //
 protected $fillable = [
        'ad_post_duration_days',
        'ad_boost_duration_days',
        'ad_edit_window_hours',
        'coin_price_taka',
        'coin_min_purchase',
        'coins',
    ];
}
