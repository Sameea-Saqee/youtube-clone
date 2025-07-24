import React from 'react'
import VideoCard from '../components/VideoCard'
import { BsGrid3X2GapFill } from 'react-icons/bs'
import { IoIosList } from 'react-icons/io'

function Subscriptions() {
  return (
    <div>
      <div className='flex justify-between px-6 pt-8'>
        <span className='font-semibold text-xl'>Latest</span>
        <div className='flex gap-2'>
          <button className="rounded-full text-blue-700 text-xs font-semibold hover:bg-blue-200 w-20 h-8 flex items-center justify-center cursor-pointer">
            Manage
          </button>
          <button className="rounded-full hover:bg-gray-200 w-10 h-10 flex items-center justify-center cursor-pointer">
            <BsGrid3X2GapFill className="text-lg" />
          </button>
          <button className="rounded-full hover:bg-gray-200 w-10 h-10 flex items-center justify-center cursor-pointer">
            <IoIosList className="text-lg" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 px-4 max-sm:max-w-sm max-sm:mx-auto pt-2">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>

  )
}

export default Subscriptions