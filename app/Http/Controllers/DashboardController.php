<?php

namespace App\Http\Controllers;

use inertia;
use App\Models\User;
use App\Models\Holiday;
use App\Models\positions;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user = User::all()->count();
        $positions = positions::all()->count();
        $Holiday = Holiday::all()->count();
        // dd($user);
        return inertia('Dashboard', [
            'user' => $user, 
            'positions' => $positions,
            'Holiday' => $Holiday,
    ]);
    }
}
