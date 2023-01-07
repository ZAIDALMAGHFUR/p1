<?php

namespace App\Http\Controllers;

use App\Models\Position;
use App\Models\Attendance;
use Illuminate\Http\Request;

class AbsensiController extends Controller
{
    public function index()
    {
        $position = Position::all();
        $Attendance = Attendance::all();
        // dd($position);
        return inertia('Admin/absensi',[
            'Attendance' => $Attendance,
            'Position' => $position,
        ]);
    }

    public function addabsensi()
    {
        $position = Position::all();
        return inertia('Admin/addabsensi',[
            'Position' => $position,
        ]);
    }
}
