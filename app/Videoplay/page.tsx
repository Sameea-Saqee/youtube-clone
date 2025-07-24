import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Videoplay() {
    return (
        <div className='flex flex-row'>
            <div>
                <Image src="/images.jpeg" alt='Video thumbnail' width='450' height='120' className='rounded-xl w-190 h-110' />
                <div className='flex flex-col gap-2'>
                    <Image src="/landscap1.png" alt='Video thumbnail' width={100} height={100} className='w-10 h-10 rounded-full' />
                    <Link href="/">@abcdd 9 weeks ago</Link>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, dolorem. Ex, eaque, perspiciatis placeat voluptatibus, ut provident iste molestiae!</p>
                </div>
            </div>
            <div> 
                <Image src="/landscap1.png" alt='Video thumbnail' width='450' height='120' className='rounded-xl w-full h-50' />
                <Image src="/landscap1.png" alt='Video thumbnail' width='450' height='120' className='rounded-xl w-full h-50' />  
                <Image src="/landscap1.png" alt='Video thumbnail' width='450' height='120' className='rounded-xl w-full h-50' />
            </div>
        </div>
    )
}

export default Videoplay