"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import BasicInput from '../components/Inputs/BasicInput/BasicInput'
import TextArea from '../components/Inputs/TextArea/TextArea'
import PrimaryButton from '../components/PrimaryButton/PrimaryButton'

export default function CreateBlog() {
    let [blogImg, setBlogImg] = useState('')
    let router = useRouter();
    let [blogVideo, setBlogVideo] = useState('')
    let [success, setSuccess] = useState(null)
    let [checkJwt,setJwt] = useState(null)
    const apiUrl = process.env.SERVER_URL;
    function hasJWT() {
        let flag = false;

        //check user has JWT token
        localStorage.getItem("token") ? flag = true : flag = false

        return flag
    }
    useEffect(()=>{
        if(hasJWT()){
            setJwt(true)
        }
    },[])
    let createBlog = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.set('blog_title', e.target.blog_title.value)
        data.set('blog_description', e.target.blog_description.value)
        data.set('blog_content', e.target.blog_content.value)
        data.set('author_name', e.target.author_name.value)
        data.set('blog_image', blogImg);
        data.set('blog_video', blogVideo);

        const uploadOptions = {
            method: "POST",
            body: data
        }
        try {
            const result = await fetch(`${apiUrl}/api/create-blog`, uploadOptions)
            if (result.status === 200) {
                setSuccess(true);
                router.push('/')
            } else {
                setSuccess(false)
            }
        } catch (error) {
            console.log(error);
            setSuccess(false)
        }
    }
    return (
        <div className='md:px-[300px] px-[25px] md:mb-[200px] mb-[25px] md:mt-[50px] mt-[25px]'>
            {
                checkJwt ?
                    <>
                        <div className='mb-[25px] md:text-[50px] text-[32px] font-bold'>Create And Publish Blog</div>
                        <form onSubmit={createBlog}>
                            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[80px]'>
                                <div>
                                    <div className='mb-[25px]'>
                                        <BasicInput labelName={'Blog Title'} id={'blog_title'} name={'blog_title'} placeholder={'Enter title of blog'} />
                                    </div>
                                    <div className='mb-[25px]'>
                                        <TextArea labelName={'Blog Description'} id={'blog_description'} name={'blog_description'} placeholder={'Enter description of blog'} />
                                    </div>
                                    <div className='mb-[25px]'>
                                        <TextArea labelName={'Blog Content'} id={'blog_content'} name={'blog_content'} placeholder={'Enter content of blog'} />
                                    </div>
                                    <div className='mb-[25px]'>
                                        <BasicInput labelName={'Author Name'} id={'author_name'} name={'author_name'} placeholder={'Enter name of author'} />
                                    </div>
                                </div>
                                <div>
                                    <div className='mb-[25px]'>
                                        <BasicInput labelName={'Upload An Image of Blog'} id={'blog_img'} name={'blog_img'} type={'file'} onChange={(e) => setBlogImg(e.target.files?.[0])} />
                                    </div>
                                    <div className='mb-[25px]'>
                                        <BasicInput labelName={'Upload An Video of Blog'} id={'blog_video'} name={'blog_video'} type={'file'} onChange={(e) => setBlogVideo(e.target.files?.[0])} />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-[40px]'>
                                <PrimaryButton innerText={'Submit'} />
                            </div>
                        </form>
                        {
                            success === true ?
                                <div className='mt-[50px] text-center text-green-800'>Created Blog Successfully!!</div>
                                :
                                success === false ?
                                    <div className='mt-[50px] text-center text-red-800'>Something Went Wrong!!</div>
                                    :
                                    null
                        }
                    </>
                    :
                    <>
                        <div className='mb-[25px] md:text-[50px] text-[25px] font-bold'>Looks like you are not logged in...</div>
                        <div className='my-[25px]'>
                            <PrimaryButton innerText={'Login'} onClick = {() => router.push('/login')}/>
                        </div>
                        <div>
                            <span>Not an user?</span>
                            <Link href={'/signup'}>
                                <span className='ms-[4px] underline text-[#45a5d5]'>Register Now</span>
                            </Link>
                        </div>
                    </>
            }
        </div>
    )
}
