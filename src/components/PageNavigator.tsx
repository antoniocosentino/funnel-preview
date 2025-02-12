import React from 'react';
import { useAppContext } from '../context/AppContext';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

const PageNavigator: React.FC = () => {

    const {
        loadedFunnel,
        activePage,
        setActivePage,
    } = useAppContext();

    return (
        <div className='mt-3'>
            <p className='font-semibold text-base mb-2'>{ loadedFunnel?.name }</p>

            { loadedFunnel?.pages?.map(
                (page, index) => {
                    const isActive = !!(index + 1 === activePage);

                    return (
                        <div onClick={ () => { setActivePage(index + 1); } } key={index} className={`flex max-w-xs p-2 rounded-md hover:bg-sky-100 cursor-pointer mb-2 shadow-sm ${ isActive ? 'bg-sky-100' : 'bg-gray-50' } transition-all duration-300 ease-in-out`}>
                            <DocumentTextIcon className="size-5 text-perspectiveblue-50 ml-2 mr-2" />
                            <span className={ `text-sm ${ isActive ? 'font-semibold' : 'font-normal' }`}>Page { index + 1}</span>
                        </div>
                    );
                },
            ) }

        </div>
    );
};

export default PageNavigator;
