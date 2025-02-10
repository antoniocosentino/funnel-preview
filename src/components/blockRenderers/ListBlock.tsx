import React from 'react';
import { TListBlock } from '../../types/types';

type ListBlockProps = {
    block: TListBlock;
}

const ListBlock: React.FC<ListBlockProps> = ({ block }) => {

    return (
        <div>
            this is the list block renderer
        </div>
    );
};

export default ListBlock;
