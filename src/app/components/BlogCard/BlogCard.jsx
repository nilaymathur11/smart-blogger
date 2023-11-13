import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import power_words from '../../../../public/assets/images/power-words.jpg'
import Link from 'next/link'

export default function BlogCard({ blogData }) {
    return (
        <>
            <div className='md:grid hidden grid-cols-2 justify-between items-center gap-[50px] md:my-[100px] my-[50px]'>
                <div>
                    <div className='font-bold text-[30px] mb-[25px]'>
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
                <div className='text-end'>
                    <Link href={`/blogs/${blogData._id}`}>
                        <Image src={`/uploads/${blogData.blog_image}`} width={100} height={100} className='rounded-lg shadow-xl w-[100%] h-[450px] object-cover object-top' alt='blogImg'/>
                    </Link>

                </div>
            </div>
            <div className='grid md:hidden md:grid-cols-2 grid-cols-1 justify-between items-center gap-[25px] md:my-[100px] my-[50px]'>
                <div className='text-start'>
                    <Link href={`/blogs/${blogData._id}`}>
                    <Image src={`/uploads/${blogData.blog_image}`} width={100} height={100} className='rounded-lg shadow-xl w-[100%] h-[450px] object-cover object-top' alt='blogImg'/>
                    </Link>
                </div>
                <div>
                    <div className='font-bold text-[25px] mb-[25px]'>
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
        </>
    )
}
