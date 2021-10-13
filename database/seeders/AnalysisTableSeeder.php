<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Analysis;
use Illuminate\Support\Str;

class AnalysisTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Analysis::create([
            'question'=>"What's your question1?"
        ]);
        Analysis::create([
            'question'=>"What's your question2?"
        ]);
        Analysis::create([
            'question'=>"What's your question3?"
        ]);
        Analysis::create([
            'question'=>"What's your question4?"
        ]);
        Analysis::create([
            'question'=>"What's your question5?"
        ]);
    }
}
