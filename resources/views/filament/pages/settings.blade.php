<x-filament::page>
    {{ $this->form }}

    <div class="flex justify-end gap-3 mt-6">
        <x-filament::button color="gray" wire:click="addCoins">
            Add Coins
        </x-filament::button>

        <x-filament::button wire:click="save">
            Save Settings
        </x-filament::button>
    </div>
</x-filament::page>
