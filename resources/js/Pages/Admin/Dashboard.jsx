import React, {useState} from 'react';
import 'boxicons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    // console.log(props.positions)
    const getDate = new window.Date();

    let time = getDate.toLocaleTimeString();
        const [currentTime, setCurrentTime] = useState(time);

        function updateTime(){
            let getDate = new window.Date();
            let time = getDate.toLocaleTimeString();
            setCurrentTime(time);
        }

        setInterval(updateTime, 1000);
    if (props.auth.user.role_id == 1) {
        return (
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            >

                <Head title="Dashboard Admin" />
                <div className="p-10 xl:flex">
                    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p
                                                className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-black dark:opacity-60">Total
                                                Users</p>
                                            <h5 className="mb-2 font-bold text-black"> {props.user} users</h5>
                                            <p className="mb-0 text-black dark:opacity-60">
                                                <span className="text-sm font-bold leading-normal text-emerald-500">All Users </span>
                                                This Website
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                        <div className="inline-block w-12 h-12 text-center pt-3 rounded-full bg-gradient-to-tl from-blue-500 to-violet-500">
                                            <box-icon name='user' color='#ffffff' ></box-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p
                                                className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-black dark:opacity-60">
                                                total jabatan</p>
                                            <h5 className="mb-2 font-bold text-black">{props.positions} Jabatan</h5>
                                            <p className="mb-0 text-black dark:opacity-60">
                                                <span className="text-sm font-bold leading-normal text-emerald-500">All </span>
                                                This Website
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                        <div className="inline-block w-12 h-12 text-center pt-3 rounded-full bg-gradient-to-tl from-cyan-700 to-blue-500">
                                            <box-icon name='food-menu' color='#ffffff' ></box-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p
                                                className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-black dark:opacity-60">
                                                total Hari libur</p>
                                                <h5 className="mb-2 font-bold text-black">{props.Holiday} Hari Libur</h5>
                                                    <p className="mb-0 text-black dark:opacity-60">
                                                        <span className="text-sm font-bold leading-normal text-emerald-500">All </span>
                                                        This Website
                                                    </p>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                        <div className="inline-block w-12 h-12 text-center pt-3 rounded-full bg-gradient-to-tl from-red-600 to-orange-600">
                                            <box-icon name='landscape' color='#ffffff' ></box-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p
                                                className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-black dark:opacity-60">
                                                Jam  saat ini</p>
                                                {
                                                    currentTime
                                                }
                                                <p className="mb-0 text-black dark:opacity-60">
                                                        <span className="text-sm font-bold leading-normal text-emerald-500">All </span>
                                                        This Website
                                                </p>
                                            
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                        <div className="inline-block w-12 h-12 text-center pt-3 rounded-full bg-gradient-to-tl from-blue-600 to-purple-600">
                                        <box-icon type='solid' name='hourglass-bottom' color='#ffffff'></box-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </AuthenticatedLayout>
        )
    } else if (props.auth.user.role_id != 1) {
        return (
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                ilang="hidden"
                // ganampak="hidden"
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            >
                <Head title="Dashboard" />

                <div className="m-[5rem]">
                            <a href="/lihatabsensi"><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Lihat Absensi</button></a>
                </div>
            </AuthenticatedLayout>
        )
    }
}

