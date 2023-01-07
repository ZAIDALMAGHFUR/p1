import React from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Kariawan(props) {
    console.log(props)


    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">karyawan</h2>}
        >
            <Head title="karyawan" />

            <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                <h1>Tambahakan Kariawan</h1>
                <a href="/addkariawan"><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Tambahakan karyawan</button></a>
            </div>

            <div>
                <div className='xl:m-[5rem]'>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="col" className="px-6 py-3 border">No</th>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Email</th>
                                    <th scope="col" className="px-6 py-3">No.Telphone</th>
                                    <th scope="col" className="px-6 py-3">Role</th>
                                    <th scope="col" className="px-6 py-3">Jabatan</th>
                                    <th scope="col" className="px-6 py-3">Edit</th>
                                    <th scope="col" className="px-6 py-3">Delete</th>
                                </tr>
                            </thead>
                            {props.user ? props.user.map((data, i) => {
                                return(
                                    <tbody key={i}>
                                        <tr className="bg-white dark:bg-gray-800" key={i}>
                                            <td className="px-6 py-4 border">{i + 1 }</td>
                                            <td className="px-6 py-4 border-b">{data.name}</td>
                                            <td className="px-6 py-4 border-b">{data.email}</td>
                                            <td className="px-6 py-4 border-b">{data.phone}</td>
                                            <td className="px-6 py-4 border-b">
                                                {
                                                    data.role_id == 1 ? "Admin" : data.role_id == 2 ? "Oprator" : data.role_id == 3 ? "User" : "User"
                                                }
                                            </td>
                                            <td className="px-6 py-4 border-b">

                                                {
                                                    data.position_id == 1 ? "Oprator" : data.position_id == 2 ? "Ketua Kelas" : data.position_id == 3 ? "Guru" : data.position_id == 4 ? "siswa" : data.position_id == 5 ? "User" : "User"
                                                }

                                            </td>
                                            <td className="px-6 py-4 border-b">
                                                    <Link href={`/editkariawan/${data.id}` }>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                    </Link>
                                            </td>

                                            <td className="px-6 py-4 border-b">
                                                    <Link href={`/deletekariawan/${data.id}`} method="delete">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none"
                                                            viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </Link>
                                            </td>
                                        </tr>
                                    </tbody>    
                                )
                            }): ""}
                        </table>
                    </div>
                </div>
                <div className='p-20'>
                    <h1>Nb</h1>
                    <p><span>1</span>. Pastikan tidak ada yang menggunakan data di atas untuk menghapus nya</p>
                    <p> <span>2</span>. Posisi di atas datap di  gunakan untu menentukan jabatan apa sja yang di perboleh kan absensi</p>
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
}

