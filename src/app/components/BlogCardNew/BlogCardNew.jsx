import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import power_words from '../../../../public/assets/images/power-words.jpg'
import Link from 'next/link'

export default function BlogCardNew({ blogData }) {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-center md:gap-[50px] gap-[25px] md:my-[100px] my-[50px]'>
            <div className='text-start'>
                <Link href={`/blogs/${blogData._id}`}>
                    <Image src={`/uploads/${blogData.blog_image}`} width={100} height={100} className='rounded-lg shadow-xl w-[100%] h-[450px] object-cover object-top' alt='blogImg'/>
                </Link>
            </div>
            <div>
                <div className='font-bold md:text-[25px] text-[20px] mb-[25px]'>
                    <Link href={`/blogs/${blogData._id}`}>
                        {blogData.blog_title}
                    </Link>
                </div>
                <div className='text-[20px] mb-[25px] font-light'>
                    {blogData.blog_description}
                </div>
                <Link href={`/blogs/${blogData._id}`}>
                    <PrimaryButton innerText={'Read More'} />
                </Link>
            </div>
        </div>
    )
}
