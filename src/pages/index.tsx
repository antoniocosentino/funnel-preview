import Header from '../components/Header';
import { AppContextProvider } from '../context/AppContext';
import MainView from '../components/MainView';

export default function Home() {

    return (
        <AppContextProvider>
            <div className="relative min-h-screen bg-gray-100">
                <Header />

                <main className="flex justify-center items-center min-h-screen pt-16">
                    <MainView />
                </main>
            </div>
        </AppContextProvider>

    );
}
