import React from 'react';
import { TImageBlock } from '../../types/types';
import Image from 'next/image';

type ImageBlockProps = {
    block: TImageBlock;
}

const isUnsplashImage = (url: string): boolean => {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.hostname === 'images.unsplash.com';
    } catch {
        return false;
    }
};

const ImageBlock: React.FC<ImageBlockProps> = ({ block }) => {

    // Bailing out if the image is not from unsplash.com,
    // which is one of the whitelisted domains in the Next config.
    // I'm assuming that all images for this module will come from there.
    // (if that's not the case, probably a regular <img> tag should be used instead)
    if (!isUnsplashImage(block.src)){
        return null;
    }

    return (
        <div className='m-2'>
            <Image
                src={ block.src }
                alt={ block.alt || 'Image from unsplash.com' }
                width={375}
                height={375}
            />
        </div>
    );
};

export default ImageBlock;
