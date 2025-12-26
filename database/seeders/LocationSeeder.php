<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LocationSeeder extends Seeder
{
    public function run(): void
    {
        $locations = [
            // Dhaka (Major Areas)
            'Dhaka',
            'Uttara, Dhaka',
            'Gulshan, Dhaka',
            'Banani, Dhaka',
            'Baridhara, Dhaka',
            'Dhanmondi, Dhaka',
            'Mirpur, Dhaka',
            'Mohammadpur, Dhaka',
            'Bashundhara, Dhaka',
            'Badda, Dhaka',
            'Tejgaon, Dhaka',
            'Motijheel, Dhaka',
            'Ramna, Dhaka',
            'Khilgaon, Dhaka',
            'Malibagh, Dhaka',
            'Jatrabari, Dhaka',
            'Old Dhaka',

            // Other Major Cities
            'Chattogram',
            'Sylhet',
            'Khulna',
            'Rajshahi',
            'Barishal',
            'Rangpur',
            'Mymensingh',
        ];


        foreach ($locations as $location) {
            DB::table('locations')->updateOrInsert(
                ['name' => $location],
                ['is_active' => true]
            );
        }
    }
}
