import Image from 'next/image';

export default function Home() {
    return (
        <div className="relative min-h-screen bg-gray-100">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 h-18 grid grid-cols-3 items-center bg-white shadow-md p-4 z-10">
                <div className="text-xl font-bold flex justify-start">
                    <Image src={'/perspective_logo.png'} alt={'Perspective'} width="40" height="40" />
                </div>
                <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 text-center">
              Funnel Preview
                </h1>
                <div className="flex justify-end">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Load a new file</button>
                </div>
            </header>


            {/* Main Content */}
            <main className="flex justify-center items-center min-h-screen pt-16">
                <div className="relative flex items-center space-x-4">
                    {/* Left Arrow */}
                    <button className="text-gray-600 hover:text-gray-900 text-3xl">&#8592;</button>

                    {/* Mock Device */}
                    <div className="relative mx-auto border-gray-50 bg-white border-[14px] rounded-[2.5rem] h-[748px] w-[403px] shadow-lg">
                        <div className="rounded-[2rem] overflow-hidden w-[375px] h-[720px] bg-white dark:bg-gray-800">
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
