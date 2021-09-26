<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRanksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ranks', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->autoIncrement()->comment('ID');
            $table->foreignId('account_id')->constrained('users')->comment('PlayerID');
            $table->unsignedBigInteger('jta_u_18')->comment('JTAU18 Rank');
            $table->unsignedBigInteger('kanto_u_18')->comment('KantoU18 Rank');

            $table->string('title1', 255)->comment('Title1');
            $table->string('title2', 255)->comment('Title2');

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
        Schema::dropIfExists('ranks');
    }
}
