<?php

namespace App\Http\Controllers;

use App\Models\Holiday;
use Illuminate\Http\Request;

class HariliburController extends Controller
{
    public function index()
    {
        $holiday = Holiday::all();
        // dd($holiday);
        return inertia('Admin/harilibur', [
            'holiday' => $holiday,
        ]);
    }

    public function addharilibur()
    {
        return inertia('Admin/addharilibur');
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $holiday = new Holiday();
        $holiday->title = $request->title;
        $holiday->description = $request->description;
        $holiday->holiday_date = $request->holiday_date;
        $holiday->save();
        return redirect()->back()->with('massage', 'Data Hari Libur Berhasil Ditambahkan');
    }

    public function edit(Holiday $holiday, $id)
    {
        $holiday = Holiday::find($id);
        return inertia('Admin/editharilibur', [
            'allharilibur' => $holiday,
        ]);
    }

    public function update(Request $request, $id)
    {
        $holiday = Holiday::find($id);
        $holiday->title = $request->title;
        $holiday->description = $request->description;
        $holiday->holiday_date = $request->holiday_date;
        $holiday->save();
        return redirect()->route('harilibur')->with('massage', 'Data Hari Libur Berhasil Diupdate');
    }

    public function destroy($id)
    {
        $holiday = Holiday::find($id);
        $holiday->delete();
        return redirect()->route('harilibur')->with('massage', 'Data Hari Libur Berhasil Dihapus');
    }
}
