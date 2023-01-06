<?php

namespace App\Http\Controllers;

use App\Models\Position;
use App\Models\positions;
use Illuminate\Http\Request;

class JabatanController extends Controller
{
    public function index()
    {
        $position = Position::all();
        // dd($Position);
        return inertia('Admin/jabatan',[
            'Position' => $position,
        ]);
    }

    public function addjabatan()
    {
        return inertia('Admin/addjabatan');
    }

    public function store(Request $request)
    {
        $position = new Position();
        $position->name = $request->name;
        $position->save();
        return redirect()->back()->with('massage', 'Data Jabatan Berhasil Ditambahkan');
    }

    public function edit(Position $position, $id )
    {
        $position = Position::find($id);
        return inertia('Admin/editjabatan',[
            'alljabatan' => $position,
        ]);
    }

    public function update(Request $request, $id)
    {
        $position = Position::find($id);
        $position->name = $request->name;
        $position->save();
        return redirect()->route('jabatan')->with('massage', 'Data Jabatan Berhasil Diupdate');
    }

    public function destroy($id)
    {
        $position = Position::find($id);
        $position->delete();
        return redirect()->route('jabatan')->with('massage', 'Data Jabatan Berhasil Dihapus');
    }
}

