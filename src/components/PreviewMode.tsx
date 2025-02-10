import React from 'react';
import DeviceFrame from './DeviceFrame';
import { useAppContext } from '../context/AppContext';

const PreviewMode: React.FC = () => {

    const {
        loadedFunnel,
    } = useAppContext();

    console.log("🟡 KOSEDEBUG: PreviewMode:React.FC -> loadedFunnel", loadedFunnel)

    return (
        <div className="relative flex items-center space-x-4">
            {/* TODO: use a different graphical element for the arrow */}
            <button className="text-gray-600 hover:text-gray-900 text-3xl">&#8592;</button>

            <DeviceFrame>
                <div>
                    hello world
                </div>
            </DeviceFrame>

            {/* TODO: use a different graphical element for the arrow */}
            <button className="text-gray-600 hover:text-gray-900 text-3xl">&#8594;</button>
        </div>
    );
};

export default PreviewMode;
