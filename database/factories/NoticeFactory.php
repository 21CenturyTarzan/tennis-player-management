<?php

namespace Database\Factories;

use App\Models\Notice;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class NoticeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Notice::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'from' => rand(2, 20),
            'to' => 1,
            'msg' => $this->faker->sentence(100),
            'state' => $this->getState(),
            'created_at'=>$this->faker->dateTimeBetween($startDate = '-4 days', $endDate = 'now')
        ];
    }

    public function getState()
    {
        # code...
        $state = array('unread','read','reply');
        return $state[rand(1, 100) % 3];
    }
}
