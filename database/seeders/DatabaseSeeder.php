<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AdminTableSeeder::class);
        $this->call(UserTableSeeder::class);
        $this->call(ProfileTableSeeder::class);
        $this->call(NoticeTableSeeder::class);
        $this->call(AnalysisTableSeeder::class);
        $this->call(QuotationTableSeeder::class);
    }
}
