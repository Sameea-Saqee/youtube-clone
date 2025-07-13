import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { CiBellOn } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import { VscMicFilled } from "react-icons/vsc";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center h-14 mx-4 sticky top-0 z-50 left-0 right-0 bg-white">
            <div className="flex items-center gap-2">
                <FiMenu />
                <Image src="/youtube-logo.png" alt="youtube logo" width={100} height={100} />
            </div>
            <div className="flex items-center gap-5 mx-auto">
                <div className="flex items-center gap-2">
                    {/* Full search bar (visible on md and up) */}
                    <div className="hidden md:flex items-center border border-gray-300 rounded-full overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-4 w-120 focus:outline-none"
                        />
                        <div className="bg-gray-200 h-10 flex items-center px-4">
                            <FiSearch className="text-xl text-gray-700 cursor-pointer" />
                        </div>
                    </div>

                    {/* Only search icon on small screens */}
                    <button className="md:hidden bg-gray-100 hover:bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full">
                        <FiSearch className="text-xl text-gray-700" />
                    </button>
                </div>


                <button className="rounded-full bg-gray-100 hover:bg-gray-200 w-10 h-10 flex items-center justify-center">
                    <VscMicFilled className="text-xl" />
                </button>
            </div>

            <div className="flex items-center gap-6">
                <button className="flex items-center border border-gray-200 bg-gray-200 font-semibold text-sm rounded-full hover:bg-gray-200 h-8 w-auto px-4 gap-2 cursor-pointer">
                    <BsPlusLg className="" />
                    Create
                </button>
                <CiBellOn className="cursor-pointer rounded-full hover:bg-gray-200 h-6 w-6" />
                <span className="flex items-center justify-center text-white border border-gray-200 bg-pink-500 w-9 h-9 rounded-full cursor-pointer">S</span>
            </div>
        </nav>
    )
}
