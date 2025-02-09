import DeviceFrame from '../components/DeviceFrame';
import Header from '../components/Header';

export default function Home() {
    return (
        <div className="relative min-h-screen bg-gray-100">
            <Header />

            <main className="flex justify-center items-center min-h-screen pt-16">
                <div className="relative flex items-center space-x-4">
                    {/* TODO: use a different graphical element for the arrow */}
                    <button className="text-gray-600 hover:text-gray-900 text-3xl">&#8592;</button>

                    <DeviceFrame>
                        <div>
                            hello world
                        </div>
                    </DeviceFrame>

                    {/* TODO: use a different graphical element for the arrow */}
                    <button className="text-gray-600 hover:text-gray-900 text-3xl">&#8594;</button>
                </div>
            </main>
        </div>
    );
}
