import React from 'react';
import DeviceFrame from './DeviceFrame';
import PageNavigator from './PageNavigator';
import { useAppContext } from '../context/AppContext';
import PageRenderer from './PageRenderer';

const PreviewMode: React.FC = () => {

    const {
        loadedFunnel,
        activePage,
    } = useAppContext();

    const pageData = loadedFunnel?.pages[activePage - 1];

    if (!pageData) {
        return null;
    };

    return (
        <div className="grid grid-cols-3">
            <PageNavigator />
            <DeviceFrame>
                <PageRenderer page={pageData} funnelBgColor={ loadedFunnel.bgColor } />
            </DeviceFrame>
        </div>
    );
};

export default PreviewMode;
