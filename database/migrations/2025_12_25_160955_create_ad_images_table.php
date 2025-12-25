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
        Schema::create('ad_images', function (Blueprint $table) {
               $table->id();

            // Relationship
            $table->foreignId('ad_id')
                ->constrained()
                ->cascadeOnDelete();

            // Image reference (local path now, Cloudinary URL later)
            $table->string('image_path');

            // Order of images (0 = main image)
            $table->unsignedInteger('sort_order')->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ad_images');
    }
};
