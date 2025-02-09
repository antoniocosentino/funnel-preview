import Header from '../components/Header';

export default function Home() {
    return (
        <div className="relative min-h-screen bg-gray-100">
            <Header />

            {/* Main Content */}
            <main className="flex justify-center items-center min-h-screen pt-16">
                <div className="relative flex items-center space-x-4">
                    {/* Left Arrow */}
                    <button className="text-gray-600 hover:text-gray-900 text-3xl">&#8592;</button>

                    {/* Mock Device */}
                    <div className="relative mx-auto border-gray-50 bg-white border-[14px] rounded-[2.5rem] h-[748px] w-[403px] shadow-lg">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 w-[140px] h-[30px] rounded-[15px] bg-gray-100"></div>
                        <div className="rounded-[2rem] overflow-hidden w-[375px] h-[690px] bg-white dark:bg-gray-50 mt-8">
                            <div className="mt-2 ml-2 text-lg font-semibold">Hello World</div>
                        </div>
                    </div>


                    {/* Right Arrow */}
                    <button className="text-gray-600 hover:text-gray-900 text-3xl">&#8594;</button>
                </div>
            </main>
        </div>
    );
}
