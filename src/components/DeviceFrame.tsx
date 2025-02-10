import React, { ReactNode } from 'react';

type DeviceFrameProps = {
  children: ReactNode;
}

const DeviceFrame: React.FC<DeviceFrameProps> = ({ children }) => (
    <div className="relative mx-auto border-gray-200 bg-white border-[14px] rounded-[2.5rem] h-[748px] w-[403px] shadow-sm">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 w-[120px] h-[30px] rounded-[15px] bg-gray-200 z-10">
            <div className="absolute top-2.5 right-2 transform -translate-x-1/2 w-[10px] h-[10px] rounded-[10px] bg-white z-10"></div>
        </div>
        <div className="rounded-br-[2rem] rounded-bl-[2rem] w-[375px] h-[688px] bg-white mt-8 relative">
            <div className="text-lg font-semibold absolute bg-red-300 top-6 overflow-x-scroll scrollbar-hidden rounded-br-[2rem] rounded-bl-[2rem]" style={ { height: 'calc(100% - 21px)' } }>
                {children}
            </div>
        </div>
    </div>
);

export default DeviceFrame;
