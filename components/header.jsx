export default function Header() {
    return (
        <div className="flex justify-between w-full mx-auto bg-gray-100 px-16 h-[72px] rounded-lg">
      <p className="text-2xl font-bold flex items-center">
        Bialovetskyi
      </p>
      <div className="flex  gap-2 items-center">
        <p className="font-normal text-base">Home</p>
        <p className="font-normal text-base">About</p>
        <p className="font-normal text-base">Project</p>
        <p className="font-normal text-base">Experience</p>
        <p className="font-normal text-base">Contact</p>
      </div>
      <div className="flex items-center">
      <button className="bg-blue-600 rounded-sm flex py-2 px-6 justify-center items-center text-white h-[40px]">
          button
      </button>
      </div>
    </div>
    )
}