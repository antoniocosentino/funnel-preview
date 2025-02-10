import React from 'react';
import { TButtonBlock } from '../../types/types';

type ButtonBlockProps = {
    block: TButtonBlock;
}

const ButtonBlock: React.FC<ButtonBlockProps> = ({ block }) => (
    <div className='m-2 flex justify-center p-6'>
        <button
            style={{ backgroundColor: block.bgColor, color: block.color }}
            className='pl-4 pr-4 pt-2 pb-2 rounded-lg'
        >
            { block.text}
        </button>
    </div>
);

export default ButtonBlock;
