import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => (
    <header className="fixed top-0 left-0 right-0 h-18 grid grid-cols-3 items-center bg-white shadow-md p-4 z-10">
        <div className="text-xl font-bold flex justify-start">
            <Image src={'/perspective_logo.png'} alt={'Perspective'} width="40" height="40" />
        </div>
        <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 text-center">
                    Funnel Preview
        </h1>
        <div className="flex justify-end">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Load a new file</button>
        </div>
    </header>
);

export default Header;
