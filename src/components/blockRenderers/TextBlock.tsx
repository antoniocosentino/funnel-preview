import React from 'react';
import { TTextBlock } from '../../types/types';

type TextBlockProps = {
    block: TTextBlock;
}

const alignmentMap: Record<string, string> = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right',
};

const TextBlock: React.FC<TextBlockProps> = ({ block }) => (
    <div className={`p-2 ${ alignmentMap[block.align] } text-2xl`}>
        <span style={ { color: block.color } }>{ block.text }</span>
    </div>
);

export default TextBlock;
