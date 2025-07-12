import Link from 'next/link'
import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { CgPlayList } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { TbMathGreater } from "react-icons/tb";
function Sidebar() {
    return (
        <div className="hidden md:flex flex-col w-1/6 h-[calc(100vh-64px)] sticky overflow-y-auto top-16 bg-white scrollbar-thin">
            <Link href="/" className="sidebar"><IoMdHome className="size-5" />Home</Link>
            <Link href="/shorts" className="sidebar"><SiYoutubeshorts className="size-5" />
                Shorts</Link>
            <Link href="/" className="sidebar"><MdOutlineSubscriptions className="size-5" />
                Subscription</Link><hr className=" border-gray-300 mt-3" />
            <Link href="/" className="sidebar">You<TbMathGreater
                className="size-3 text-black-900" />
            </Link>
            <Link href="/" className="sidebar"><GoHistory className="size-5" />
                History</Link>
            <Link href="/" className="sidebar"><CgPlayList className="size-5" />
                Playlists</Link>
            <Link href="/" className="sidebar"><MdOutlineWatchLater className="size-5" />
                Watch later</Link>
            <Link href="/" className="sidebar"><BiLike className="size-5" />
                Liked videos</Link><hr className=" border-gray-300 mt-3" />
            <Link href="/" className="sidebar">Subscriptions</Link>
        </div>
    )
}

export default Sidebar