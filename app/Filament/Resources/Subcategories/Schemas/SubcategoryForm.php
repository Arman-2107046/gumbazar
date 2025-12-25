<?php

namespace App\Filament\Resources\Subcategories\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Schemas\Schema;

class SubcategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Select::make('category_id')
                ->relationship('category', 'name')
                ->required()
                ->searchable()
                ->preload()
                ->hidden(fn ($livewire) => $livewire instanceof RelationManager),

            TextInput::make('name')
                ->required()
                ->maxLength(255),

            Toggle::make('is_active')
                ->default(true),
        ]);
    }
}
