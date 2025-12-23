<?php

namespace App\Filament\Pages;

use App\Models\Setting;
use BackedEnum;
use UnitEnum;
use Filament\Pages\Page;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Grid;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;

class Settings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static ?string $slug = 'settings';

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-cog';
    protected static string|UnitEnum|null $navigationGroup = 'System';
    protected static ?string $navigationLabel = 'Global Settings';

    protected string $view = 'filament.pages.settings';

    /** 🔑 ALL FORM STATE LIVES HERE */
    public array $data = [];

    public function mount(): void
    {
        $settings = Setting::first();

        if (! $settings) {
            $settings = Setting::create([
                'ad_post_duration_days' => 30,
                'ad_boost_duration_days' => 7,
                'ad_edit_window_hours' => 24,
                'coin_price_taka' => 10,
                'coin_min_purchase' => 1,
                'coins' => 0,
            ]);
        }

        $this->data = $settings->toArray();
        $this->data['addCoins'] = null; // temp field
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make('Ad Lifecycle')
                    ->description('Control how long ads stay active and editable.')
                    ->icon('heroicon-o-clock')
                    ->schema([
                        Grid::make(3)->schema([
                            TextInput::make('ad_post_duration_days')
                                ->numeric()
                                ->required(),

                            TextInput::make('ad_boost_duration_days')
                                ->numeric()
                                ->required(),

                            TextInput::make('ad_edit_window_hours')
                                ->numeric()
                                ->required(),
                        ]),
                    ])
                    ->collapsible(),

                Section::make('Coin Pricing')
                    ->description('Define coin pricing and purchase limits.')
                    ->icon('heroicon-o-currency-dollar')
                    ->schema([
                        Grid::make(2)->schema([
                            TextInput::make('coin_price_taka')
                                ->label('Price of 1 coin (৳)')
                                ->numeric()
                                ->required(),

                            TextInput::make('coin_min_purchase')
                                ->label('Minimum coins purchasable')
                                ->numeric()
                                ->required(),
                        ]),
                    ]),

                Section::make('Coin Inventory')
                    ->description('Admins can only ADD coins, not overwrite.')
                    ->icon('heroicon-o-banknotes')
                    ->schema([
                        Grid::make(2)->schema([
                            TextInput::make('coins')
                                ->label('Available Coins')
                                ->numeric()
                                ->disabled()
                                ->helperText('Current platform coin balance'),

                            TextInput::make('addCoins')
                                ->label('Add Coins')
                                ->numeric()
                                ->minValue(1)
                                ->helperText('Enter coins to add'),
                        ]),
                    ]),
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        $data = $this->data;
        unset($data['addCoins']); // ❌ never save temp field

        Setting::first()->update($data);

        $this->notify('success', 'Settings updated successfully.');
    }
public function addCoins(): void
{
    $addCoins = $this->data['addCoins'] ?? null;

    if (! $addCoins || $addCoins < 1) {
        Notification::make()
            ->title('Please enter a valid coin amount')
            ->danger()
            ->send();
        return;
    }

    $settings = Setting::first();
    $settings->increment('coins', $addCoins);

    // Refresh UI state
    $this->data['coins'] = $settings->coins;
    $this->data['addCoins'] = null;

    Notification::make()
        ->title('Coins added successfully')
        ->success()
        ->send();
}

}
