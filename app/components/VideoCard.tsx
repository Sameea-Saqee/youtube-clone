import React from 'react'
import Image from 'next/image'

function VideoCard() {
    return (
        <div className='mx-4'>
            <Image src="/landscap1.png" alt='cgfggfg' width='450' height='250' className='rounded-xl mt-8' ></Image>
            <div className='flex gap-2 my-3'>
                <Image src="/landscap1.png" alt='cgfggfg' width={100} height={100} className='w-11 h-11 rounded-full'></Image>
                <div>
                    <h3 className='font-semibold text-lg'>This is a video on youtube.</h3>
                    <div className='text-gray-600'>
                        <p>Coding href</p>
                        <p>56k views . 6 weeks ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard    