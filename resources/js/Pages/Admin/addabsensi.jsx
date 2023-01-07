import React, { useState } from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2'
// import Checkboxposition from '../../Components/Checkboxposition';

export default function addAbsensi(props) {


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [start_time, setStart_time] = useState('');
    const [batas_start_time, setBatas_start_time] = useState('');
    const [end_time, setEnd_time] = useState('');
    const [batas_end_time, setBatas_end_time] = useState('');
    const [attendance_id, setAttendance_id] = useState('');
    const [position_id, setPosition_id] = useState('');
    const handleSubmit = () => {
        const data = {
            title,
            description,
            start_time,
            batas_start_time,
            end_time,
            batas_end_time,
            attendance_id,
            position_id
        }


        Swal.fire({
            icon: 'success',
            title: 'Absensi berhasil di tambahkan!',
            showConfirmButton: true,
          })

        Inertia.post('/storeharilibur', data)
        setTitle('')
        setDescription('')
        setHoliday_date('')
    }


    // const onHandleChange = (event) => {
    //     setData(event.target.position_id, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    // };

    console.log(props.Position)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Absensi</h2>}
        >
            <Head title="Jabatan" />
            <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                <h1>Tambahakan Absensi</h1>
            </div>

            <div className='flex justify-center'>
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Add Absensi</h5>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama/Judul Hari Libur</label>
                            <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Hari Ahad"  onChange={(title) => setTitle(title.target.value)} value={title}/>
                        </div>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">keterangan</label>
                            <textarea type="keterangan" name="keterangan" id="keterangan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Hari Ahad"  onChange={(description) => setDescription(description.target.value)} value={description}/>
                        </div>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal</label>
                            <input type="text" name="keterangan" id="keterangan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  onChange={(start_time) => setStart_time(start_time.target.value)} value={start_time}/>
                        </div>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal</label>
                            <input type="text" name="keterangan" id="keterangan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  onChange={(batas_start_time) => setBatas_start_time(batas_start_time.target.value)} value={batas_start_time}/>
                        </div>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal</label>
                            <input type="text" name="keterangan" id="keterangan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  onChange={(end_time) => setEnd_time(end_time.target.value)} value={end_time}/>
                        </div>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal</label>
                            <input type="text" name="keterangan" id="keterangan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  onChange={(batas_end_time) => setBatas_end_time(batas_end_time.target.value)} value={batas_end_time}/>
                        </div>

                        {/* <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkboxposition name="position" value={props.position_id} handleChange={onHandleChange} />
                            </label>
                        </div> */}

                        <div>
                            
                        </div>

                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleSubmit()}>Add Absensi</button>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}