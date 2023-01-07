import React, { useState } from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from "@inertiajs/inertia";

export default function editharilibur(props) {

    //state
    const [title, setTitle] = useState(props.allharilibur.title);
    const [description, setDescription] = useState(props.allharilibur.description);
    const [holiday_date, setHoliday_date] = useState(props.allharilibur.holiday_date);

    const handleUpdate =() => {
        
        Swal.fire(
            'Hari libur berhasil di update !',
            'Klik tombol di bawah ini untuk melanjutkan !',
            'success'
          )
    }
    
    //method "updateCategory"
    const updateHoliday = async (e) => {
        e.preventDefault();

        //sending data to backend
        Inertia.post(`/updateharilibur/${props.allharilibur.id}`, {

            //data
            title: title,
            description: description,
            holiday_date: holiday_date,
            _method: "PUT"
        });
    }
    console.log(props.allharilibur.id);
    return (

        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Hari Libur</h2>}
        >
            <Head title="Jabatan" />
            <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                <h1>Edit Hari Libur</h1>
            </div>

            <div className='flex justify-center'>
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={updateHoliday} onClick={() => handleUpdate()}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Edit Hari Libur</h5>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Position</label>
                            <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Manager" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Position</label>
                            <textarea type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Manager" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Position</label>
                            <input type="date" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Manager" value={holiday_date} onChange={(e) => setHoliday_date(e.target.value)}/>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleUpdate()}>Update Hari Libur</button>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
