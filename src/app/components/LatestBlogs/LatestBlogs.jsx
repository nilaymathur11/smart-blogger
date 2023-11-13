import React from 'react'
import LatestBlogCard from '../LatestBlogCard/LatestBlogCard'

export default function LatestBlogs({ blogData }) {
  return (
    <div className='py-[50px] bg-[#45a5d5] md:px-[300px] px-[25px]'>
      <div className='mb-[50px] font-bold text-[40px] capitalize text-center'>
        Latest from the <span className='text-white'>blog</span>
      </div>
      <div className='grid grid-cols-3 gap-[50px]'>
        {
          blogData.length ?
            blogData.map((v, i) => {
              if(i<=2){
                return (
                  <LatestBlogCard blogData={v} key={i} />
                )
              }
            })
            :
            <div className='mb-[50px] font-bold text-[40px] capitalize text-center'>
              No Blogs Found...
            </div>
        }
      </div>
    </div>
  )
}
