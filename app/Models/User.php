<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'is_verified',
        'is_suspended', // ✅ added
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'is_verified' => 'boolean',
            'is_suspended' => 'boolean', // ✅ added
            'password' => 'hashed',
        ];
    }

    /**
     * Optional helpers (safe)
     */
    public function getSellerTypeAttribute(): string
    {
        return $this->is_verified ? 'Verified Seller' : 'Member';
    }

    public function getIsActiveAttribute(): bool
    {
        return ! $this->is_suspended;
    }
}
