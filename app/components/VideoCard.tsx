import React from 'react'
import Image from 'next/image'

function VideoCard() {
    return (
        <div className="w-full">
            <Image src="/landscap1.png" alt='Video thumbnail' width='450' height='120' className='rounded-xl w-full h-50' />
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
    )
}

export default VideoCard