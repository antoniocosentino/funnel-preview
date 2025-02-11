import Header from '../components/Header';
import { AppContextProvider } from '../context/AppContext';
import MainView from '../components/MainView';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import MobileWarning from '../components/MobileWarning';

export default function Home() {

    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const checkDevice = () => {
            if (window.innerWidth < 1024) {
                setIsDesktop(false);
            } else {
                setIsDesktop(true);
            }
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => {
            window.removeEventListener('resize', checkDevice);
        };
    }, []);

    const appContent =
        isDesktop
            ? <MainView />
            : <MobileWarning />;

    return (
        <AppContextProvider>
            <div className="relative min-h-screen flex flex-col bg-gray-100">
                <Header />
                <main className="flex-grow flex justify-center items-center pt-16 pb-4">
                    { appContent }
                </main>
                <Footer />
            </div>
        </AppContextProvider>
    );
}
