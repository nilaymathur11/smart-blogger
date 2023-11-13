import Image from 'next/image'
import BlogCard from './components/BlogCard/BlogCard'
import BlogCardNew from './components/BlogCardNew/BlogCardNew'
import LatestBlogs from './components/LatestBlogs/LatestBlogs'

export default async function Home() {
  let blogData = null
  const uploadOptions = {
    method: "POST",
    cache: 'no-store',
    revalidate: 0
  }
  try {
    const result = await fetch(process.env.SERVER_URL + '/api/view-blogs', uploadOptions)
    blogData = await result.json()
  } catch (error) {
    console.log(error);
  }
  return (
    <main>
      <div className='font-bold md:text-[50px] text-[32px] text-center md:mt-[50px] mt-[25px] md:px-[300px] px-[25px]'>
        Some of the BEST From Our Blog
      </div>
      <div className='md:px-[300px] px-[25px]'>
        {
          blogData?.blogs?.length?
          blogData.blogs.map((v,i)=>{
            if(i%2===0){
              return(
                <BlogCard blogData={v} key={i}/>
              )
            }else{
              return(
                <BlogCardNew blogData={v} key={i}/>
              )
            }
          })
          :
          <div className='font-bold md:text-[50px] text-[32px] text-center md:mt-[50px] my-[100px] md:px-[300px] px-[25px]'>
              No Blogs Found...
          </div>

        }
      </div>
      <LatestBlogs blogData = {blogData?blogData.blogs:''}/>
    </main>
  )
}
