import React from 'react';
import { TImageBlock } from '../../types/types';

type ImageBlockProps = {
    block: TImageBlock;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ block }) => {

    console.log("🟡 KOSEDEBUG: block", block)

    return (
        <div>
            this is the image block renderer
        </div>
    );
};

export default ImageBlock;
