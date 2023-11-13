import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import twitter from '../../../../public/assets/images/twitter-marketing-featured.jpg'

export default function LatestBlogCard({blogData}) {
  return (
    <div>
        <div>
            <Link href={`/blogs/${blogData._id}`}>
            <Image src={`/uploads/${blogData.blog_image}`} width={100} height={100} className='rounded-lg shadow-xl w-[100%] h-[300px] object-cover object-top' alt='blogImg'/>
            </Link>
        </div>
        <div className='md:text-[25px] text-[30px] font-extrabold hover:underline mt-[16px] text-center'>
            <Link href={`/blogs/${blogData._id}`}>
                {blogData.blog_title}
            </Link>
        </div>
    </div>
  )
}
