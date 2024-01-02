<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Product extends Model
{
    use HasFactory;

    protected  $table = 'products';
    protected $fillable = [
        'user_id',
        'product',
        'pdimg',
        'tags',
        'manufacturer',
        'price',
        'quantity',
        'description',
    ];

    // many products -> one vendor
    // public function user(){
    //     return $this->belongsTo(User::class,'user_id');
    // }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
