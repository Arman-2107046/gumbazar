<?php

namespace App\Filament\Resources\Ads\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class AdForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('user_id')
                    ->required()
                    ->numeric(),
                TextInput::make('category_id')
                    ->required()
                    ->numeric(),
                TextInput::make('subcategory_id')
                    ->required()
                    ->numeric(),
                TextInput::make('location_id')
                    ->required()
                    ->numeric(),
                TextInput::make('condition')
                    ->required(),
                TextInput::make('title')
                    ->required(),
                Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('price')
                    ->numeric()
                    ->prefix('$'),
                TextInput::make('phone_number')
                    ->tel()
                    ->required(),
                TextInput::make('whatsapp_number'),
                TextInput::make('status')
                    ->required()
                    ->default('active'),
                DateTimePicker::make('expires_at'),
            ]);
    }
}
