import React from 'react';
import { TImageBlock } from '../../types/types';
import Image from 'next/image';
import { isAllowedDomain } from '../../utilities/utils';

type ImageBlockProps = {
    block: TImageBlock;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ block }) => {

    const imageRenderer = isAllowedDomain(block.src)
        ? <Image
            src={ block.src }
            alt={ block.alt || 'An image element' }
            width={375}
            height={375}
        />
        // eslint-disable-next-line @next/next/no-img-element
        : <img src={ block.src } alt={ block.alt || 'An image element' } />;

    return (
        <div className='m-2'>
            { imageRenderer }
        </div>
    );
};

export default ImageBlock;
