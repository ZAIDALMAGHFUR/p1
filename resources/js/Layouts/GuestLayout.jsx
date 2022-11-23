import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col p-5  sm:justify-center items-center pt-6 sm:pt-0 bg-gray-800">
            {/* <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-white mb-20" />
                </Link>
            </div> */}

            <div className="w-full sm:max-w-md mt-48 px-6 py-4 bg-gray-900 shadow-md overflow-hidden sm:rounded-lg xl:mt-6">
                {children}
            </div>
        </div>
    );
}
