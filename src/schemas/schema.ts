import { z } from 'zod';

const BlockSharedSchema = z.object({
    id: z.string(),
    type: z.enum(['text', 'list', 'button', 'image']),
});

const TextBlockSchema = BlockSharedSchema.extend({
    type: z.literal('text'),
    text: z.string(),
    color: z.string(),
    align: z.enum(['left', 'center', 'right']),
});

const ImageBlockSchema = BlockSharedSchema.extend({
    type: z.literal('image'),
    alt: z.string().optional(),
    src: z.string(),
});

const ListItemSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    src: z.string(),
});

const ListBlockSchema = BlockSharedSchema.extend({
    type: z.literal('list'),
    items: z.array(ListItemSchema),
});

const ButtonBlockSchema = BlockSharedSchema.extend({
    type: z.literal('button'),
    text: z.string(),
    color: z.string(),
    bgColor: z.string(),
});

const BlockSchema = z.union([TextBlockSchema, ImageBlockSchema, ListBlockSchema, ButtonBlockSchema]);

const PageSchema = z.object({
    id: z.string(),
    blocks: z.array(BlockSchema),
});

export const FunnelSchema = z.object({
    name: z.string(),
    bgColor: z.string(),
    pages: z.array(PageSchema),
});
