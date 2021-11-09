<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFatherRelationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('father_relation', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->autoIncrement()->comment('ID');
            $table->foreignId('father_id')->constrained('fathers')->comment('parentID');
            $table->string('child_email');
            
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
        Schema::dropIfExists('father_relation');
    }
}
