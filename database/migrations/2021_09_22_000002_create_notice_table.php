<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNoticeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notice', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->autoIncrement()->comment('ID');
            $table->unsignedBigInteger('to')->comment('ReceiverID');
            $table->foreignId('from')->constrained('users')->comment('SenderID');
            $table->text('msg', 4096)->comment('Message');
            $table->string('state', 20)->comment('State');
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
        Schema::dropIfExists('notice');
    }
}
