<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {   
        return [
            'name' => $this->faker->name,
            'type' => $this->type(),
            'img' =>  $this->avatar(),
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            'created_at'=>$this->faker->dateTimeBetween($startDate = '-5 years', $endDate = 'now')
        ];
    }

    public function type(){
        if( rand(1, 90000) % 2 == 1 )
            return 'father';
        else return 'player';
    }

    public function avatar(){
        return '/images/avatar/150-'.rand(1, 24).'.jpg';
    }
}
