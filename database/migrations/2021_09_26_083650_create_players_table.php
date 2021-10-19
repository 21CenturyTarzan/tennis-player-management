<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlayersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('players', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->autoIncrement()->comment('ID');
            $table->foreignId('account_id')->constrained('users')->comment('アカウントID');
            $table->string('gender', 10)->comment('gender');
            $table->dateTime('birth', $precision = 0)->comment('birth');
            $table->float('height')->comment('height');
            $table->float('weight')->comment('weight');
            $table->string('school', 255)->comment('school');
            $table->string('grade', 255)->comment('grade');
            $table->string('phone', 255)->comment('phone');
            $table->string('address', 255)->comment('address');
            $table->string('lesson', 255)->comment('lesson');
            $table->text('career', 4096)->comment('career');
            $table->tinyInteger('jta_u_18')->nullable();
            $table->tinyInteger('kanto_u_18')->nullable();
            $table->text('rank_list')->nullable();
            $table->string('title1')->nullable();
            $table->string('title2')->nullable();
            
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('players');
    }
}
