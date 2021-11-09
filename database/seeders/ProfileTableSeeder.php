<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Player;
use App\Models\Father;
use App\Models\FatherRelation;
use App\Models\User;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class ProfileTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = Faker::create();
        
        $users = User::get();

        foreach($users as $user){ 

           
            $birth = $faker->dateTimeBetween('-50 years', 'now');
            $birth = $birth->format("Y-m-d");


            if(strcmp($user->type, 'player') == 0){

                Player::create([
                    'account_id' => $user->id,
                    'gender' => $this->gender(),
                    'birth' => $birth,
                    'height' => rand(1500, 1800)/10,
                    'weight' => rand(400, 800)/10,
                    'school' => 'Tokyo University',
                    'grade' => $this->grade(),
                    'phone' => $this->phone(),
                    'address' => $this->address(),
                    'lesson' => $faker->sentence(20),
                    'career' => $faker->sentence(30),
                    'created_at'=>$faker->dateTimeBetween($startDate = '-5 years', $endDate = 'now')
                ]);
            }
            else if(strcmp($user->type, 'father') == 0){
                
                Father::create([
                    'account_id' => $user->id,
                    'gender' => $this->gender(),
                    'birth' => $birth,
                    'phone' => $this->phone(),
                    'created_at'=>$faker->dateTimeBetween($startDate = '-5 years', $endDate = 'now')
                ]);
                $cnt = User::count();
                $users = User::get();
                $n = rand(0, $cnt-1);
                $child_email = $users[$n] -> email;
                FatherRelation::create([
                    'father_id' => $user->id,
                    'child_email' => $child_email
                ]);
            }
        }
    }

    public function gender(){
        if( rand(1, 90000) % 2 == 1 )
            return '女';
        else return '男';
    }

    public function grade(){
    
        $grade = array(
            '小学 1年',
            '小学 2年',
            '小学 3年',
            '小学 4年',
            '小学 5年',
            '小学 6年',
            '中学 1年',
            '中学 2年',
            '中学 3年',
            '高校 1年',
            '高校 2年',
            '高校 3年'
        );
        return $grade[rand(0,11)];
    }

    public function phone(){
        $phone = array(
            '555-9892',
            '534-9892',
            '512-9892',
            '564-4892',
            '521-9342',
            '542-9892',
            '542-9232',
            '512-7852',
            '524-9252',
            '542-9892',
            '553-9892',
            '564-9892'
        );
        return $phone[rand(0,11)];

    }

    public function address(){
        $address = array(
            'Asada Mesh Co., Ltd. Hideaki HAYASHI',
            'Eguchi Kohan Co., Ltd.',
            'Jujo Chemical Co., Ltd.',
            'Mitani Micronics Co., Ltd.',
            'NBC Meshtec Inc.',
            'Nippon Bunkaseiko Co., Ltd.',
            'Seripack Co., Ltd.',
            'Unno Giken Co., Ltd.',
            'NBC Meshtec Inc.',
            'Spacesystems Co., Ltd.',
            'Jobu Shikizai Co., Ltd.',
            'Jobu Shikizai Co., Ltd.'
        );
        return $address[rand(0,11)];
    }

}
