import React, { useState } from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function addJabatan(props) {

    const [name, setName] = useState('');
    const [isNotif, setIsNotif] = useState(false);
    const handleSubmit = () => {
        const data = {
            name
        }
        Inertia.post('/storejabatan', data)
        setIsNotif(true)
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

                <div className='m-6'>
                    {isNotif && 
                        <div className="flex p-4 mb-4 text-sm text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
                            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Info</span>
                                    <div>
                                        <span className="font-medium">{props.flash.massage}</span>
                                    </div>
                        </div>
                    }
                </div>

            <div className='flex justify-center'>
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Add Position in website</h5>
                        <div>
                            <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Position</label>
                            <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Manager" required onChange={(name) => setName(name.target.value)} value={name}/>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleSubmit()}>Add Position</button>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}