import React from 'react';
import { FunnelPage } from '../types/types';
import ImageBlock from './blockRenderers/ImageBlock';
import TextBlock from './blockRenderers/TextBlock';
import ButtonBlock from './blockRenderers/ButtonBlock';
import ListBlock from './blockRenderers/ListBlock';

type PageRendererProps = {
    page: FunnelPage;
    funnelBgColor: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentMap: Record<string, React.FC<any>> = {
    image: ImageBlock,
    text: TextBlock,
    button: ButtonBlock,
    list: ListBlock,
};

const PageRenderer: React.FC<PageRendererProps> = ({ page, funnelBgColor }) => (
    <div className='p-4 min-h-full' style={ { backgroundColor: funnelBgColor } }>
        { page.blocks.map((block, index) => {
            const Component = componentMap[block.type];

            return (
                <Component key={ index } block={ block } />
            );
        })}
    </div>
);


export default PageRenderer;
