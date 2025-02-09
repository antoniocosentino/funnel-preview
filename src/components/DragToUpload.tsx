import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { z } from 'zod';

// TODO: move all the schema definition in a dedicated file
// potentially also put the types in a specific place

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

const FunnelSchema = z.object({
    name: z.string(),
    bgColor: z.string(),
    pages: z.array(PageSchema),
});

export type Funnel = z.infer<typeof FunnelSchema>;

const DragToUpload: React.FC = () => {

    const [data, setData] = useState<Funnel | null>(null);
    const [error, setError] = useState<string | null>(null);

    const onDrop = (acceptedFiles: File[]) => {
        setError(null);
        const file = acceptedFiles[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const json = JSON.parse(event.target?.result as string);
                const parsedData = FunnelSchema.parse(json);
                console.log("🟡 KOSEDEBUG: reader.onload -> parsedData", parsedData)
                setData(parsedData);
            } catch (err) {
                setError('Invalid JSON file');
                console.error(err);
            }
        };
        reader.readAsText(file);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: { 'application/json': ['.json'] },
        multiple: false,
    });

    return (
        <div className="flex flex-col items-center space-y-4 p-4">
            <div
                {...getRootProps()}
                className={ 'border-2 border-dashed p-6 rounded-lg cursor-pointer text-center w-full max-w-md hover:bg-gray-100 transition'}
            >
                <input {...getInputProps()} />
                <p>Drag & drop a JSON file here, or click to select one</p>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {data && <p className="text-green-500">File uploaded successfully!</p>}
        </div>
    );

};

export default DragToUpload;
