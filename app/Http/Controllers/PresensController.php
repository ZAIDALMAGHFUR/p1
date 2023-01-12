<?php

namespace App\Http\Controllers;

use App\Models\Holiday;
use App\Models\Position;
use App\Models\Presence;
use Carbon\CarbonPeriod;
use App\Models\Attendance;
use App\Models\Permission;
use Illuminate\Http\Request;

class PresensController extends Controller
{
    public function index()
    {
        $Attendance = Attendance::query()
            ->forCurrentUser(auth()->user()->position_id)
            ->get()
            ->sortByDesc('data.is_end')
            ->sortByDesc('data.is_start');
            
        $Position = Position::all();
        // dd($Attendance);
        return inertia('user/lihatabsensi',[
            'Attendance' => $Attendance,
            'Position' => $Position
        ]);
    }

    public function show(Attendance $attendance)
    {
        $presences = Presence::query()
            ->where('attendance_id', $attendance->id)
            ->where('user_id', auth()->user()->id)
            ->get();

        $isHasEnterToday = $presences
            ->where('presence_date', now()->toDateString())
            ->isNotEmpty();

        $isTherePermission = Permission::query()
            ->where('permission_date', now()->toDateString())
            ->where('attendance_id', $attendance->id)
            ->where('user_id', auth()->user()->id)
            ->first();

        $data = [
            'is_has_enter_today' => $isHasEnterToday, // sudah absen masuk
            'is_not_out_yet' => $presences->where('presence_out_time', null)->isNotEmpty(), // belum absen pulang
            'is_there_permission' => (bool) $isTherePermission,
            'is_permission_accepted' => $isTherePermission?->is_accepted ?? false
        ];

        $holiday = $attendance->data->is_holiday_today ? Holiday::query()
            ->where('holiday_date', now()->toDateString())
            ->first() : false;

        $history = Presence::query()
            ->where('user_id', auth()->user()->id)
            ->where('attendance_id', $attendance->id)
            ->get();

        // untuku melihat karyawan yang tidak hadir
        $priodDate = CarbonPeriod::create($attendance->created_at->toDate(), now()->toDateString());
        $absent = [];
        foreach ($priodDate as $date) {
            $isAbsent = Presence::query()
                ->where('user_id', auth()->user()->id)
                ->where('attendance_id', $attendance->id)
                ->where('presence_date', $date->toDateString())
                ->get();
            if ($isAbsent->isEmpty()) {
                $absent[] = $date->toDateString();
            }
        }

        return inertia('user/absensi', [
            'attendance' => $attendance,
            'data' => $data,
            'holiday' => $holiday,
            'history' => $history,
            'absent' => $absent
        ]);
    }

}












































    // public function show(Attendance $attendance)
    // {
    //     $presences = Presence::query()
    //         ->where('attendance_id', $attendance->id)
    //         ->where('user_id', auth()->user()->id)
    //         ->get();

    //     $isHasEnterToday = $presences
    //         ->where('presence_date', now()->toDateString())
    //         ->isNotEmpty();

    //     $isTherePermission = Permission::query()
    //         ->where('permission_date', now()->toDateString())
    //         ->where('attendance_id', $attendance->id)
    //         ->where('user_id', auth()->user()->id)
    //         ->first();

    //     $data = [
    //         'is_has_enter_today' => $isHasEnterToday, // sudah absen masuk
    //         'is_not_out_yet' => $presences->where('presence_out_time', null)->isNotEmpty(), // belum absen pulang
    //         'is_there_permission' => (bool) $isTherePermission,
    //         'is_permission_accepted' => $isTherePermission?->is_accepted ?? false
    //     ];

    //     $holiday = $attendance->data->is_holiday_today ? Holiday::query()
    //         ->where('holiday_date', now()->toDateString())
    //         ->first() : false;

    //     $history = Presence::query()
    //         ->where('user_id', auth()->user()->id)
    //         ->where('attendance_id', $attendance->id)
    //         ->get();

    //     // untuku melihat karyawan yang tidak hadir
    //     $priodDate = CarbonPeriod::create($attendance->created_at->toDateString(), now()->toDateString())
    //         ->toArray();

    //     foreach ($priodDate as $i => $date) { // get only stringdate
    //         $priodDate[$i] = $date->toDateString();
    //     }

    //     $priodDate = array_slice(array_reverse($priodDate), 0, 30);

    //     return view('home.show', [
    //         "title" => "Informasi Absensi Kehadiran",
    //         "attendance" => $attendance,
    //         "data" => $data,
    //         "holiday" => $holiday,
    //         'history' => $history,
    //         'priodDate' => $priodDate
    //     ]);
    // }