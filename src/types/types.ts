type BlockShared = {
    id: string;
    type: BlockType;
}

type TextBlock = BlockShared & {
    type: 'text';
    text: string;
    color: string;
    align: 'left' | 'center' | 'right';
}

type ImageBlock = BlockShared & {
    type: 'image';
    alt: string;
    src: string;
}

type ListBlock = BlockShared & {
    type: 'list ';
    items: ListItems;
}

type ButtonBlock = BlockShared & {
    type: 'button';
    text: string;
    color: string;
    bgColor: string;
}

type Block = TextBlock | ImageBlock | ListBlock | ButtonBlock;

type ListItem = {
    id: string;
    title: string;
    description: string;
    src: string;
}

type ListItems = ReadonlyArray<ListItem>;

type BlockType = 'text' | 'list' | 'button' | 'image';

type Page = {
    id: string;
    blocks: ReadonlyArray<Block>;
}

type Pages = ReadonlyArray<Page>;

export type Funnel = {
    name: string;
    bgColor: string;
    pages: Pages;
}
