import Image from "next/image";
import { BsFillMicFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { CiBellOn } from "react-icons/ci";
import { HiOutlinePlus } from "react-icons/hi";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center mx-4">
            <div className="flex items-center gap-2">
                <FiMenu />
                <Image src="/youtube-logo.png" alt="youtube logo" width={100} height={100} />
            </div>
            <div className="flex items-center gap-5 w-full max-w-2xl mx-auto">
                <button className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                    <input type="text" placeholder="Search" className="font-semibold px-4 py-2 focus:outline-none h-10 w-200 border border-gray-300" />
                    <FiSearch className="text-3xl cursor-pointer" />
                </button>
                <button className="flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 w-15 h-10 cursor-pointer">
                    <BsFillMicFill className="text-xl" />
                </button>
            </div>
            <div className="flex items-center gap-6">
                <button className="flex items-center border border-gray-200 bg-gray-200 font-semibold text-sm rounded-full hover:bg-gray-200 h-8 w-20 px-6 cursor-pointer">
                    <HiOutlinePlus />
                    Create
                </button>
                <CiBellOn className="cursor-pointer rounded-full hover:bg-gray-200 h-6 w-6" />
                <span className="flex items-center justify-center text-white border border-gray-200 bg-pink-500 w-9 h-9 rounded-full cursor-pointer">S</span>
            </div>
        </nav>
    )
}
