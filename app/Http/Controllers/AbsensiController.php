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


    public function store(Request $request)
    {
        // dd($request->all());
        $Attendance = new Attendance();
        $Attendance->title = $request->title;
        $Attendance->description = $request->description;
        $Attendance->start_time = $request->start_time;
        $Attendance->batas_start_time = $request->batas_start_time;
        $Attendance->end_time = $request->end_time;
        $Attendance->batas_end_time = $request->batas_end_time;
        $Attendance->position_id = $request->position_id;
        $Attendance->save();
        return redirect()->back();
    }
}