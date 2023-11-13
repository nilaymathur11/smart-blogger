import Image from 'next/image'
import React from 'react'
import img from '../../../../public/assets/images/twitter-marketing-featured.jpg'

export default async function BlogPage({ params }) {
    let blogData = null
    let blog_id = { blog_id: params.id }
    const uploadOptions = {
        method: "POST",
        body: JSON.stringify(blog_id),
        cache: 'no-store',
        revalidate: 0
    }
    try {
        const result = await fetch(process.env.SERVER_URL + '/api/view-blog', uploadOptions)
        blogData = await result.json()
        blogData = blogData.blogs;
    } catch (error) {
        console.log(error);
    }
    return (
        <div className='md:px-[250px] px-[25px] md:mb-[100px] mb-[50px] md:mt-[30px] mt-[50px]'>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[25px]'>
                <div>
                    <Image src={`/uploads/${blogData.blog_image}`} width={100} height={100} className='w-[100%] md:h-[400px] h-[250px] rounded-md shadow-lg object-cover object-top' alt='blogImg' />
                </div>
                <div>
                    <div className='md:text-[50px] text-[32px] font-bold md:leading-[60px] leading-[40px]'>{blogData.blog_title}</div>
                    <div className='font-light mt-[25px]'>
                        by {blogData.author_name}
                    </div>
                </div>
            </div>
            <div className='w-[100%] md:h-[400px] h-[250px] rounded-md my-[50px]'>
                <video controls autoplay loop muted className='w-[60%] md:h-[400px] h-[250px] rounded-md shadow-lg' src={`/uploads/${blogData.blog_video}`} />
            </div>
            <div className='text-[18px] leading-[40px]'>
                {blogData.blog_content}
            </div>
        </div>
    )
}
