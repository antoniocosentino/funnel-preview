import React from 'react';
import DeviceFrame from './DeviceFrame';
import PageNavigator from './PageNavigator';

const PreviewMode: React.FC = () => (
    <div className="grid grid-cols-3">
        <PageNavigator />
        <DeviceFrame>
            <div>
                hello world
            </div>
        </DeviceFrame>
    </div>
);

export default PreviewMode;
