import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Admin(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Admin" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Selamat Datang Admin</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


// import React from 'react'

// function Admin() {
//     return (
//         <>
//             <div>Admin</div>
//             <h1>makan enak semua yang bisa di lkukan denganmudah akan smeu ayangh bsia di lakuakn demgan semu yamnh bida di lakukan dengan kmudah akan smudah jika lebh bersama sama dengan mudayn ga bdia di llakuan dengan kdua akan sdmua jika semuayang bdai  </h1>
//         </>
//     )
// }

// export default Admin