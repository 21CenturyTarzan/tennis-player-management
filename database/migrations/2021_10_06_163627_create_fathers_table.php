<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFathersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fathers', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->autoIncrement()->comment('ID');
            $table->foreignId('account_id')->constrained('users')->comment('アカウントID');
            $table->string('gender', 10)->comment('gender');
            $table->dateTime('birth', $precision = 0)->comment('birth');
            $table->string('phone', 255)->comment('phone');

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
        Schema::dropIfExists('fathers');
    }
}
