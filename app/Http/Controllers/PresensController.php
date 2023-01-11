<?php

namespace App\Http\Controllers;

use App\Models\Position;
use App\Models\Attendance;
use Illuminate\Http\Request;

class PresensController extends Controller
{
    public function index()
    {
        $Attendance = Attendance::all();
        $Position = Position::all();
        // dd($Attendance);
        return inertia('user/lihatabsensi',[
            'Attendance' => $Attendance,
            'Position' => $Position
        ]);
    }
}
