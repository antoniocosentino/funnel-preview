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

    // I only whitelisted the Unsplash domain in the Next config,
    // therefore bailing out if the image is not hosted there.
    // If we want to support ANY domain, then I should probably use a basic <img> tag here.
    // But if it's safe to assume that all images will be on unsplash,
    // then this should work just fine
    if (!isUnsplashImage(block.src)){
        return null;
    }

    return (
        <div>
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
