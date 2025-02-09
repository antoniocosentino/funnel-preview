import { useState } from 'react';
import Header from '../components/Header';
import DragToUpload from '../components/DragToUpload';
import PreviewMode from '../components/PreviewMode';

export default function Home() {

    const [isFileLoaded, setIsFileLoaded] = useState(false);

    const MainView = isFileLoaded ? PreviewMode : DragToUpload;

    return (
        <div className="relative min-h-screen bg-gray-100">
            <Header />

            <main className="flex justify-center items-center min-h-screen pt-16">
                <MainView />
            </main>
        </div>
    );
}
