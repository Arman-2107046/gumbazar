<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();

            // Ads lifecycle
            $table->integer('ad_post_duration_days')->default(30);
            $table->integer('ad_boost_duration_days')->default(7);
            $table->integer('ad_edit_window_hours')->default(24);

            // Coin purchase pricing
            $table->integer('coin_price_taka')->default(10); // 1 coin = 10 taka
            $table->integer('coin_min_purchase')->default(1);

            // Coin inventory (admin-managed)
            $table->integer('coins')->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
