import Image from "next/image";

export function Card(){
    return (
      
        <div className="flex justify-between gap-8">
        <div className="">
          <Image src="/cal.jpeg" alt="calculator image" width={560} height={370}/>

          <div className="p-6">
            <p className="text-black text-2xl font-bold">calculator </p>
            <p className="text-gray-300 text-base font-normal">too bodoh </p>
            <button className="flex justify-center items-center bg-blue-500 rounded-md px-6 py-1 self-stretch w-full text-white text-base font-normal mt-4">View project</button>
          </div>
        </div>
        <div>
        <div className="">
          <Image src="/th.jpeg" alt="animax zurag" width={560} height={370}/>
          <div className="p-6">
            <p className="text-black text-2xl font-bold">animax</p>
            <p className="text-gray-300 text-base font-normal">kino anime uzdg</p>
            <button className="flex justify-center items-center bg-blue-500 rounded-md px-6 py-1 self-stretch w-full text-white text-base font-normal mt-4">View project</button>
          </div>
        </div>
        </div>
        <div>
        <div className="">
          <Image src="/game.png" alt="togloomni logo" width={560} height={370}/>
          <div className="p-6">
            <p className="text-black text-2xl font-bold">game </p>
            <p className="text-gray-300 text-base font-normal">ymr neg togloom toglno</p>
            <button className="flex justify-center items-center bg-blue-500 rounded-md px-6 py-1 self-stretch w-full text-white text-base font-normal mt-4">View project</button>
          </div>
        </div>
        </div>
      </div>
    )
}