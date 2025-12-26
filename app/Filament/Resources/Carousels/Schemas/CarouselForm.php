<?php

namespace App\Filament\Resources\Carousels\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class CarouselForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),

                FileUpload::make('image_path')
                    ->label('Carousel Image')
                    ->disk('public')                // ✅ required
                    ->directory('carousels')        // ✅ keep files organized
                    ->image()
                    ->preserveFilenames()           // ✅ keep original name
                    // 👉 OR use the safer version below (recommended for prod)
                    // ->getUploadedFileNameForStorageUsing(
                    //     fn ($file) => time() . '-' . $file->getClientOriginalName()
                    // )
                    ->required(),

                TextInput::make('link')
                    ->url()
                    ->nullable(),

                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0)
                    ->required(),

                Toggle::make('is_active')
                    ->default(true)
                    ->required(),
            ]);
    }
}
