<?php

namespace App\Http\Controllers;

use inertia;
use App\Models\User;
use App\Models\Holiday;
use App\Models\Position;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user = User::all()->count();
        $positions = Position::all()->count();
        $Holiday = Holiday::all()->count();
        // dd($user);
        return inertia('Admin/Dashboard', [
            'user' => $user, 
            'positions' => $positions,
            'Holiday' => $Holiday,
    ]);
    }
}
