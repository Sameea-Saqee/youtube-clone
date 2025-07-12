import React from 'react'
import VideoCard from '../components/VideoCard'
import { VscMicFilled } from 'react-icons/vsc'
import Image from 'next/image'
import { PiDotsThreeVerticalBold } from 'react-icons/pi'
import { AiFillLike } from 'react-icons/ai'
import { BiSolidCommentDetail, BiSolidDislike } from 'react-icons/bi'
import { IoMdShareAlt } from 'react-icons/io'
import { RiRepeat2Fill } from 'react-icons/ri'

function Shorts() {
  return (
    <div className="flex justify-center w-full px-4">
      <div className="flex gap-4 max-w-sm w-full">
        <div className="w-full">
          <Image src="/landscap1.png" alt='Video thumbnail' width='450' height='250' className='rounded-xl mt-8 w-70 h-120' />
          <div className='flex gap-2 my-3'>
            <Image src="/landscap1.png" alt='Video thumbnail' width={100} height={100} className='w-11 h-11 rounded-full' />
            <div>
              <h3 className='font-semibold text-base md:text-lg'>This is a video on youtube.</h3>
              <div className='text-gray-600 text-sm'>
                <p>Coding href</p>
                <p>56k views . 6 weeks ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 my-8">
          <button className="rounded-full bg-gray-100 hover:bg-gray-200 w-10 h-10 flex items-center justify-center">
            <PiDotsThreeVerticalBold className="text-xl" />
          </button>
          <div className="flex flex-col items-center">
            <button className="rounded-full bg-gray-100 hover:bg-gray-200 w-10 h-10 flex items-center justify-center">
              <AiFillLike className="text-xl" />
            </button>
            <span>7.1k</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="rounded-full bg-gray-100 hover:bg-gray-200 w-10 h-10 flex items-center justify-center">
              <BiSolidDislike className="text-xl" />
            </button>
            <span>Dislike</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="rounded-full bg-gray-100 hover:bg-gray-200 w-10 h-10 flex items-center justify-center">
              <BiSolidCommentDetail className="text-xl" />
            </button>
            <span>85</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="rounded-full bg-gray-100 hover:bg-gray-200 w-10 h-10 flex items-center justify-center">
              <IoMdShareAlt className="text-xl" />
            </button>
            <span>Share</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="rounded-full bg-gray-100 hover:bg-gray-200 w-10 h-10 flex items-center justify-center">
              <RiRepeat2Fill className="text-xl" />
            </button>
            <span>Remix</span>
          </div>
          <Image
            src="/landscap1.png"
            alt="Video thumbnail"
            width={100}
            height={100}
            className="w-10 h-10 rounded"
          />
        </div>
      </div>
    </div>
  )
}

export default Shorts
