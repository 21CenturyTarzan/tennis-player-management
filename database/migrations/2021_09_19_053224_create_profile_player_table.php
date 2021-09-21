<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilePlayerTable extends Migration
{
    public function up()
    {
        Schema::create('profile_player', function (Blueprint $table) {
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

            $table->dateTime('created_at', $precision = 0)->nullable();
            $table->dateTime('updated_at', $precision = 0)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profile_player');
    }
}
