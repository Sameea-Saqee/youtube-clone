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
    <div className="flex flex-row md:flex-row">
      {/* sidebar */}
      <div className="hidden md:flex flex-col w-1/6 h-[calc(100vh-64px)] sticky overflow-y-auto top-16 bg-white scrollbar-thin">
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
      {/* mini navbar div */}
      <div className="w-full md:w-5/6 h-auto">
        <div className="hidden md:flex justify-between mx-4 sticky top-12 z-40 bg-white py-4 flexex-wrap gap-2 px-4">
          <Link href="/" className="miniNavbar">All</Link>
          <Link href="/" className="miniNavbar">News</Link>
          <Link href="/" className="miniNavbar">JavaScript</Link>
          <Link href="/" className="miniNavbar">Music</Link>
          <Link href="/" className="miniNavbar">Television series</Link>
          <Link href="/" className="miniNavbar">Live</Link>
          <Link href="/" className="miniNavbar">Visual arts</Link>
          <Link href="/" className="miniNavbar">Cartoons</Link>
          <Link href="/" className="miniNavbar">Cars</Link>
          <Link href="/" className="miniNavbar">Watched</Link>
        </div>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 px-4 max-sm:max-w-sm max-sm:mx-auto">
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
