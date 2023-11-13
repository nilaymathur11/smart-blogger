"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import BasicInput from '../components/Inputs/BasicInput/BasicInput'
import PrimaryButton from '../components/PrimaryButton/PrimaryButton'

export default function Login() {
    let [success, setSuccess] = useState(null)
    let router = useRouter();
    const apiUrl = process.env.SERVER_URL;
    let loginHandle = async (e) => {
        e.preventDefault();
        let data = {
            user_email: e.target.user_email.value,
            user_pass: e.target.user_pass.value
        }

        const uploadOptions = {
            method: "POST",
            body: JSON.stringify(data),
            cache: 'no-store',
            revalidate: 0
        }
        try {
            const result = await fetch(`${apiUrl}/api/get-user`, uploadOptions)
            let data = await result.json()
            localStorage.setItem('token',JSON.stringify(data.token));
            localStorage.setItem('userData',JSON.stringify(data));
            if (data.status) {
                router.push('/')
                setTimeout(() => {
                    window.location.reload();
                }, 50)
            } else {
                setSuccess(false)
            }
        } catch (error) {
            console.log(error);
            setSuccess(false)
        }
    }
    return (
        <>
            <div className='my-[25px] md:text-[50px] text-[32px] font-bold text-center'>Login Now</div>
            <div className='grid md:grid-cols-2 grid-cols-1 md:px-[350px] items-center mb-[100px] px-[25px] md:gap-[50px]'>
                <div className='hidden md:block'>
                    <Image src={"https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"} width={100} height={100} className='w-[100%] h-[500px]' alt='loginImage'/>
                </div>
                <div>
                    <form className='pb-[20px] mb-[10px] border-b-[1px] border-[#abaaaa]' onSubmit={loginHandle}>
                        <div className='mb-[25px]'>
                            <BasicInput labelName={'Email Address'} id={'user_email'} name={'user_email'} placeholder={'Enter your email address'} />
                        </div>
                        <div className='mb-[25px]'>
                            <BasicInput type={'password'} labelName={'Password'} id={'user_pass'} name={'user_pass'} placeholder={'Enter your password'} />
                        </div>
                        <div>
                            <PrimaryButton innerText={'Login'} />
                        </div>
                        {
                            success === false ?
                                <div className='my-[20px] text-center text-red-800'>Incorret Email Or Password</div>
                                :
                                null
                        }
                    </form>
                    <div className='text-end'>
                        <span>Not an user?</span>
                        <Link href={'/signup'}>
                            <span className='ms-[4px] underline text-[#45a5d5]'>Register Now</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
