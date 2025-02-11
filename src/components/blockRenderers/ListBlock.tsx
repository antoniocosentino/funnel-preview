import React from 'react';
import { TListBlock } from '../../types/types';
import Image from 'next/image';
import { isAllowedDomain } from '../../utilities/utils';

type ListBlockProps = {
    block: TListBlock;
}

const ListBlock: React.FC<ListBlockProps> = ({ block }) => (
    <div className='m-2'>
        { block.items.map((item, index) => {

            const imageRenderer = isAllowedDomain(item.src)
                ? <Image
                    src={ item.src }
                    alt={ item.title || 'An image element' }
                    fill={true}
                    sizes="40px"
                />
                // eslint-disable-next-line @next/next/no-img-element
                : <img src={ item.src } alt={ item.title || 'An image element' } />;

            return (
                <div key={index} className='flex gap-6 mt-4 mb-4 items-center'>
                    <div className='w-10 h-10 relative'>
                        { imageRenderer }
                    </div>
                    <div>
                        <p className='font-bold'>{ item.title}</p>
                        <p className='font-normal text-sm'>{ item.description}</p>
                    </div>
                </div>
            );
        }) }
    </div>
);

export default ListBlock;
