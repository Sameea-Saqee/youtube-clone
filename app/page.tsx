import Image from "next/image";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { CgPlayList } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { TbMathGreater } from "react-icons/tb";
import VideoCard from "./components/VideoCard";


export default function Home() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-1/6 h-auto">
        <Link href="/" className="sidebar"><IoMdHome className="size-5" />Home</Link>
        <Link href="/" className="sidebar"><SiYoutubeshorts className="size-5" />
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
      <div className="w-5/6 h-auto pt-3">
        <div className="flex justify-between mx-4">
          <Link href="/" className="navbar">All</Link>
          <Link href="/" className="navbar">News</Link>
          <Link href="/" className="navbar">JavaScript</Link>
          <Link href="/" className="navbar">Music</Link>
          <Link href="/" className="navbar">Television series</Link>
          <Link href="/" className="navbar">Live</Link>
          <Link href="/" className="navbar">Visual arts</Link>
          <Link href="/" className="navbar">Cartoons</Link>
          <Link href="/" className="navbar">Cars</Link>
          <Link href="/" className="navbar">Watched</Link>
        </div>
        <div className="grid grid-cols-3">
           <VideoCard />
           <VideoCard />
           <VideoCard />
           <VideoCard />
           <VideoCard />
           <VideoCard />
           <VideoCard />
        </div>
      </div>
    </div>
  );
}
