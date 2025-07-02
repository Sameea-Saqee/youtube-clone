import Image from "next/image";
import { BsFillMicFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";


import { FiMenu } from "react-icons/fi";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-10">
            <div className="flex items-center gap-2">
                <FiMenu />
                <Image src="/youtube-logo.png" alt="youtube logo" width={100} height={100} />
            </div>
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                <input type="text" placeholder="search" className="flex-grow px-4 py-2 text-sm focus:outline-none" />
                <FiSearch className="" />
            </div>
            <BsFillMicFill className="text-lg" />

            <div>edx</div>
        </nav>
    )
}