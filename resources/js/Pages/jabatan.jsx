import React from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Jabatan(props) {
    console.log(props)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Absensi</h2>}
        >
            <Head title="Jabatan" />
            <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                <h1>Tambahakan Posisi Jabatan</h1>
                <a href="/addjabatan"><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Tambahakan Jabatan</button></a>
            </div>

            <div className='xl:m-[5rem]'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">created at</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        {props.Position ? props.Position.map((data, i) => {
                                return(
                                    <tbody key={i}>
                                        <tr className="bg-white dark:bg-gray-800">
                                            <td className="px-6 py-4">{data.name}</td>
                                            <td className="px-6 py-4">{data.created_at}</td>
                                            <td className="px-6 py-4">
                                                <div className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                                                    <InertiaLink href={`/editjabatan/${data.id}`}>edit</InertiaLink>
                                                </div>

                                                <a href="" className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>delete</a>
                                            </td>
                                        </tr>
                                    </tbody>    
                                )
                            }): ""}
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}