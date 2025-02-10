import React from 'react';
import { FunnelPage } from '../types/types';

type PageRendererProps = {
    page: FunnelPage;
    funnelBgColor: string;
}

const PageRenderer: React.FC<PageRendererProps> = ({ page, funnelBgColor }) => {
    
    console.log("🟡 KOSEDEBUG: page", page)

    return (
        <div className={`bg-[${funnelBgColor.toLowerCase()}] p-4`}>
            hello Im the page renderer
        </div>
    );
};

export default PageRenderer;
