import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 grid grid-cols-12 items-center bg-white shadow-md p-4 z-10">
          <div className="text-xl font-bold flex justify-start col-span-2">
              <Image src={`/perspective_logo.png`} alt={'Perspective'} width="40" height="40" />
          </div>
          <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 text-center col-span-8">
              Funnel Preview
          </h1>
          <div className="col-span-2 flex justify-end">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Load a new file</button>
          </div>
      </header>

      
      {/* Main Content */}
      <main className="flex justify-center items-center min-h-screen pt-16">
        <div className="relative flex items-center space-x-4">
          {/* Left Arrow */}
          <button className="text-gray-600 hover:text-gray-900 text-3xl">&#8592;</button>
          
          {/* Mock Device */}
          <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
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
