import React, { useState } from 'react';
// import { usePage } from '@inertiajs/inertia-react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function addJabatan(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [positions, setPositions] = useState([]);
    const [position_id, setPosition_id] = useState('');
    const [role_id, setRole_id] = useState('');
    
    const [isNotif, setIsNotif] = useState(false);
    const handleSubmit = () => {
        const data = {
            name,
            email,
            password,
            phone,
            position_id,
            role_id
        }
        Inertia.post('/storekariawan', data)
        setIsNotif(true)
        setName('')
        setEmail('')
        setPassword('')
        setPhone('')
        setPosition_id('')
        setRole_id('')
    }

    
    console.log('props last: ',props)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add karyawan</h2>}
        >
            <Head title="Kariawan" />
            <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                <h1>Tambahakan karyawan</h1>
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

            <div>
                <div className='flex justify-center'>
                    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6" action="#">
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Tambah karyawan in website</h5>
                            <div>

                                {/* nama */}
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                                <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="nama" required onChange={(name) => setName(name.target.value)} value={name}/>

                                {/* email */}
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="saipul@gmail.com" required onChange={(email) => setEmail(email.target.value)} value={email}/>

                                {/* password */}
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(password) => setPassword(password.target.value)} value={password}/>

                                {/* no telphone */}
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No Phone</label>
                                <input type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="8021657782" required onChange={(phone) => setPhone(phone.target.value)} value={phone}/>
                                
                                {/* Jabatan */}
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                                <select name="jabatan" id="jabatan"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"required onChange={(event) => setPosition_id(event.target.value)}value={position_id}> 
                                {props.positions.map((position, index) => {
                                    return(
                                        <option key={index} value={position.id}>
                                            {position.name}
                                        </option>
                                        )})}
                                </select>
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                                <select name="jabatan" id="jabatan"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"required onChange={(event) => setRole_id(event.target.value)}value={role_id}>
                                {props.role.map((role, index) => {
                                    return(
                                        <option key={index + 6} value={role.id}>
                                            {role.name}
                                        </option>
                                        )})}
                                </select>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleSubmit()}>Tambah karyawan</button>
                        </form>
                    </div>
                </div>
                    <div className='p-[3rem]'>
                        <h1>NB</h1>
                        <p>1. Password harus lebih dari 8 karakter</p>
                    </div>
            </div>

        </AuthenticatedLayout>
    );
}