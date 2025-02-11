import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const MobileWarning: React.FC = () => (
    <div className="bg-amber-100 border-t-4 border-amber-500 rounded-b text-amber-900 px-4 py-3 shadow-md" role="alert">
        <div className="flex">
            <div className="py-1 mr-4"><InformationCircleIcon className="size-6 text-amber-900" /></div>
            <div>
                <p className="font-bold">This web app is not optimized for mobile</p>
                <p className="text-sm">Please switch to a Desktop device in order to use it</p>
            </div>
        </div>
    </div>
);

export default MobileWarning;
