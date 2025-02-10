import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FunnelSchema } from '../schemas/schema';
import { useAppContext } from '../context/AppContext';
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';

const DragToUpload: React.FC = () => {

    const [error, setError] = useState<string | null>(null);
    const [isDragActive, setIsDragActive] = useState(false);

    const {
        setIsFileLoaded,
        setLoadedFunnel,
    } = useAppContext();

    const onDrop = (acceptedFiles: File[]) => {
        setIsDragActive(false);
        setError(null);
        const file = acceptedFiles[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const json = JSON.parse(event.target?.result as string);
                const parsedData = FunnelSchema.parse(json);
                setLoadedFunnel(parsedData);
                setIsFileLoaded(true);
            } catch (err) {
                setError('The uploaded JSON doesn\'t match the required structure. Please try again with a different file.');
                console.error(err);
            }
        };
        reader.readAsText(file);
    };

    const { getRootProps, getInputProps } = useDropzone({
        accept: { 'application/json': ['.json'] },
        multiple: false,
        onDragEnter: () => setIsDragActive(true),
        onDragLeave: () => setIsDragActive(false),
        onDrop,
    });

    return (
        <div className="flex flex-col items-center space-y-4 p-4">
            <div
                {...getRootProps()}
                className={`border-4 border-dashed p-12 rounded-lg cursor-pointer text-center w-full max-w-md transition
                ${isDragActive ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
            >
                <input {...getInputProps()} />
                <div className='flex justify-center mb-4'>
                    <ArrowUpTrayIcon className="size-8 text-gray-400" />
                </div>
                <p className='text-base'>Drag & drop your JSON file here, or click to select it</p>
            </div>
            {error
             && <div className="w-full max-w-md p-4 mb-4 text-base text-yellow-800 rounded-lg bg-yellow-50" role="alert">{error}</div>}
        </div>
    );

};

export default DragToUpload;
