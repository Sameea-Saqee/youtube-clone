import Link from "next/link";
import VideoCard from "./components/VideoCard";


export default function Home() {
  return (
    <div className="flex flex-row md:flex-row ">
      {/* mini navbar div */}
      <div className="w-full h-auto">
        <div className="hidden md:flex justify-between mx-4 sticky top-12 z-40 bg-white py-4 flex-wrap gap-2 px-4">
          <Link href="/" className="miniNavbar">All</Link>
          <Link href="/" className="miniNavbar">News</Link>
          <Link href="/" className="miniNavbar">JavaScript</Link>
          <Link href="/" className="miniNavbar">Music</Link>
          <Link href="/" className="miniNavbar">Television series</Link>
          <Link href="/" className="miniNavbar">Live</Link>
          <Link href="/" className="miniNavbar">Visual arts</Link>
          <Link href="/" className="miniNavbar">Cartoons</Link>
          <Link href="/" className="miniNavbar">Cars</Link>
          <Link href="/" className="miniNavbar">Html</Link>
          <Link href="/" className="miniNavbar">Css</Link>
          <Link href="/" className="miniNavbar">Typscript</Link>
          <Link href="/" className="miniNavbar">Tailwind</Link>
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
