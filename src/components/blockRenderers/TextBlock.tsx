import React from 'react';
import { TTextBlock } from '../../types/types';

type TextBlockProps = {
    block: TTextBlock;
}

const TextBlock: React.FC<TextBlockProps> = ({ block }) => {

    console.log("🟡 KOSEDEBUG: block", block)

    return (
        <div>
            this is the text block renderer
        </div>
    );
};

export default TextBlock;
