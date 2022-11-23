import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className=" bg-gray-500 h-[18rem] w-[20rem] mt-52 rounded-md">
                    <h1 className='text-center text-white font-semibold mt-3'>Holla selamat datang website Absensi</h1>
                    <div className='text-center'>
                        {props.auth.user ? (
                            <Link href={route('dashboard')} className="text-sm text-white underline">
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="text-sm text-white bg-teal-500 p-3  rounded-md hover:bg-slate-900">
                                    Log in
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="ml-4 text-sm text-white bg-teal-500 p-3  rounded-md hover:bg-slate-900"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
