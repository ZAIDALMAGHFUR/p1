import React, { useState } from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2'

export default function addJabatan(props) {

    const [name, setName] = useState('');
    const handleSubmit = () => {
        const data = {
            name
        }

        Swal.fire({
            icon: 'success',
            title: 'Data Jabatan berhasil di tambahkan!',
            showConfirmButton: true,
          })

        Inertia.post('/storejabatan', data)
        setName('')
    }

    // console.log('props last: ',props)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Jabatan</h2>}
        >
            <Head title="Jabatan" />
            <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                <h1>Tambahakan Posisi Jabatan</h1>
            </div>

            <div className='flex justify-center'>
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Add Position in website</h5>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Position</label>
                            <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Manager"  onChange={(name) => setName(name.target.value)} value={name}/>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleSubmit()}>Add Position</button>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}