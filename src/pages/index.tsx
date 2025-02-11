import Header from '../components/Header';
import { AppContextProvider } from '../context/AppContext';
import MainView from '../components/MainView';
import Footer from '../components/Footer';

export default function Home() {

    return (
        <AppContextProvider>
            <div className="relative min-h-screen flex flex-col bg-gray-100">
                <Header />

                <main className="flex-grow flex justify-center items-center pt-16 pb-4">
                    <MainView />
                </main>

                <Footer />
            </div>
        </AppContextProvider>
    );
}
