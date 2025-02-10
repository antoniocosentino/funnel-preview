import React from 'react';
import { TListBlock } from '../../types/types';
import Image from 'next/image';

type ListBlockProps = {
    block: TListBlock;
}

const isIcons8Image = (url: string): boolean => {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.hostname === 'img.icons8.com';
    } catch {
        return false;
    }
};

const ListBlock: React.FC<ListBlockProps> = ({ block }) => (
    <div className='m-2'>
        { block.items.map((item, index) => {

            // Bailing out if the image is not from icons8.com,
            // which is one of the whitelisted domains in the Next config.
            // I'm assuming that all images for this module will come from there.
            // (if that's not the case, probably a regular <img> tag should be used instead)
            if (!isIcons8Image(item.src)){
                return null;
            }

            return (
                <div key={index} className='flex gap-6 mt-4 mb-4 items-center'>
                    <div className='w-10 h-10 relative'>
                        <Image
                            src={ item.src }
                            alt={ item.title }
                            fill={true}
                        />
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
