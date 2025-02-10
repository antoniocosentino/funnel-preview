import React from 'react';
import { TButtonBlock } from '../../types/types';

type ButtonBlockProps = {
    block: TButtonBlock;
}

const ButtonBlock: React.FC<ButtonBlockProps> = ({ block }) => {

    console.log("🟡 KOSEDEBUG: block", block)

    return (
        <div>
            this is the button block renderer
        </div>
    );
};

export default ButtonBlock;
