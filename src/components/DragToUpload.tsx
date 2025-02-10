import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FunnelSchema } from '../schemas/schema';
import { useAppContext } from '../context/AppContext';

const DragToUpload: React.FC = () => {

    const [error, setError] = useState<string | null>(null);

    const {
        setIsFileLoaded,
        setLoadedFunnel,
    } = useAppContext();

    const onDrop = (acceptedFiles: File[]) => {
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
        </div>
    );

};

export default DragToUpload;
