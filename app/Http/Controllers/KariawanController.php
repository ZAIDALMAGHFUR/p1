<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use App\Models\Position;
use Illuminate\Http\Request;
use Termwind\Components\Dd;

class KariawanController extends Controller
{
    public function index()
    {
        $user = User::all();
        $positions = Position::all();
        $role  = Role::all();
        return inertia('Admin/kariawan', [
            'user' => $user, 
            'positions' => $positions,
            'role' => $role,
        ]);
    }

    public function addkariawan(Position $position, Role $role)
    {
        // dd($position);
        $position = Position::all();
        $role  = Role::all();
        return inertia('Admin/addkariawan', [
            'positions' => $position,
            'role' => $role,
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->phone = $request->phone;
        $user->position_id = $request->position_id;
        $user->role_id = $request->role_id;
        $user->save();
        return redirect()->back()->with('massage', 'Data Kariawan Berhasil Ditambahkan');
    }

    public function edit(User $user, $id)
    {
        $user = User::find($id);
        $position = Position::all();
        $role  = Role::all();
        return inertia('Admin/editkariawan', [
            'allkariawan' => $user,
            'positions' => $position,
            'role' => $role,
        ]);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->phone = $request->phone;
        $user->position_id = $request->position_id;
        $user->role_id = $request->role_id;
        $user->save();
        return redirect()->route('kariawan')->with('massage', 'Data Kariawan Berhasil Diupdate');
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return redirect()->route('kariawan')->with('massage', 'Data Kariawan Berhasil Dihapus');   
    }
}
