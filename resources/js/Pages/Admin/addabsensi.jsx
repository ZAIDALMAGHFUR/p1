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

        Inertia.post('/storeabsensi', data)
        setTitle('')
        setDescription('')
        setStart_time('')
        setBatas_start_time('')
        setEnd_time('')
        setBatas_end_time('')
        setAttendance_id('')
        setPosition_id('')
    }

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
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">start time</label>
                            <input type="time" name="keterangan" id="keterangan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  onChange={(start_time) => setStart_time(start_time.target.value)} value={start_time}/>
                        </div>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">batas start time</label>
                            <input type="time" name="keterangan" id="keterangan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  onChange={(batas_start_time) => setBatas_start_time(batas_start_time.target.value)} value={batas_start_time}/>
                        </div>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">end time</label>
                            <input type="time" name="keterangan" id="keterangan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  onChange={(end_time) => setEnd_time(end_time.target.value)} value={end_time}/>
                        </div>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">batas end ime</label>
                            <input type="time" name="keterangan" id="keterangan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  onChange={(batas_end_time) => setBatas_end_time(batas_end_time.target.value)} value={batas_end_time}/>
                        </div>

                        <div>
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                                <select name="jabatan[]" id="jabatan"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(event) => setPosition_id(event.target.value)}value={position_id}> 
                                   {props.Position.map((position, index) => {
                                        return(
                                            <option key={index} value={position.id}>
                                                {position.name}
                                            </option>
                                            )})
                                   }
                                </select>
                        </div>


                            {/* <div>
                            <label type="position_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Posisi</label>
                            <select multiple size="5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" name="position_id" id="position_id" onChange={(position_id) => setPosition_id(position_id.target.value)} value={position_id}>
                                {props.Position.map((position) => (
                                <option key={position.id} value={position.id} selected={position.selected}>{position.name}</option>
                                ))}
                            </select>
                            </div> */}

                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleSubmit()}>Add Absensi</button>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}