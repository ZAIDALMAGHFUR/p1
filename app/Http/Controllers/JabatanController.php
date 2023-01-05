<?php

namespace App\Http\Controllers;

use App\Models\Position;
use App\Models\positions;
use Illuminate\Http\Request;

class JabatanController extends Controller
{
    public function index()
    {
        $Position = positions::all();
        // dd($Position);
        return inertia('jabatan',[
            'Position' => $Position,
        ]);
    }

    public function addjabatan()
    {
        return inertia('addjabatan');
    }

    public function store(Request $request)
    {
        $Position = new positions();
        $Position->name = $request->name;
        $Position->save();
        return redirect()->back()->with('massage', 'Data Jabatan Berhasil Ditambahkan');
    }

    public function edit(positions $positions, Request $request)
    {
        return inertia('editjabatan',[
            'data' => $positions->find($request-> id)
        ]);
    }

    public function update(positions $positions, Request $request)
    {
        $positions->where('id', $request->id)->update([
            'name' => $request->name,
        ]);
        return redirect()->back()->with('massage', 'Data Jabatan Berhasil Diubah');
    }
}
