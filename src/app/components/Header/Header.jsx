'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '../../../../public/assets/images/logo.svg'
import mobile from '../../../../public/assets/images/mobile.png'
import { FaBars, FaX } from "react-icons/fa6";
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { useRouter } from 'next/navigation';

export default function Header() {
    let [mobMenu, setMobMenu] = useState(false);
    let [checkJwt,setJwt] = useState(null)
    let router = useRouter();
    let [userData,setUserData] = useState()
    
    function hasJWT() {
        let flag = false;

        //check user has JWT token
        localStorage.getItem("token") ? flag = true : flag = false

        return flag
    }
    let handleLogout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('userData')
        setJwt(false)
        setUserData(null);
        router.push('/')
        setMobMenu(false)
    }
    useEffect(()=>{
        if(hasJWT()){
            setJwt(true)
            setUserData(JSON.parse(localStorage.getItem("userData")));
        }
    },[])
    return (
        <header className='md:px-[300px] px-[25px] bg-[#212121]'>
            <div className='py-[20px] grid grid-cols-2 items-center'>
                <div>
                    <Link href={'/'} onClick={() => setMobMenu(false)}>
                        <Image src={logo} width={'300'} height={'100'} alt='logo'/>
                    </Link>
                </div>
                <div className='md:hidden flex justify-end'>
                    <FaBars color='white' fontSize={'22px'} className={mobMenu ? 'hidden' : 'md:hidden block cursor-pointer'} onClick={() => setMobMenu(true)} />
                    <FaX color='white' fontSize={'22px'} className={mobMenu ? 'md:hidden block cursor-pointer' : 'hidden'} onClick={() => setMobMenu(false)} />
                </div>
                <div className='md:block hidden'>
                    <ul className='grid grid-flow-col auto-cols-max gap-[30px] justify-end text-[18px] text-white'>
                    {
                        checkJwt ?
                            <>
                                <li className='hover:text-[#45a5d5] transition-all cursor-pointer'>Welcome {userData?userData.data?userData.data.user_fname:userData.user_fname:null}</li>
                                <li className='hover:text-[#45a5d5] transition-all cursor-pointer'><Link href={'/create-blog'} onClick={() => setMobMenu(false)}>Create Blog</Link></li>
                                <li className='hover:text-[#45a5d5] transition-all cursor-pointer'><Link href={'/'} onClick={handleLogout}>Log Out</Link></li>
                            </>
                            :
                            <>
                                <li className='hover:text-[#45a5d5] transition-all cursor-pointer'><Link href={'/create-blog'} onClick={() => setMobMenu(false)}>Create Blog</Link></li>
                                <li className='hover:text-[#45a5d5] transition-all cursor-pointer'><Link href={'/login'} onClick={() => setMobMenu(false)}>Log In</Link></li>
                                <li className='hover:text-[#45a5d5] transition-all cursor-pointer'><Link href={'/signup'} onClick={() => setMobMenu(false)}>Sign Up</Link></li>
                            </>
                    }
                    </ul>
                </div>
            </div>
            <div className={mobMenu ? 'md:hidden block py-[25px] mt-[25px] border-b-[1px] border-t-[1px] border-white' : 'hidden'}>
                <ul className='text-[18px] text-white text-center flex justify-center items-center gap-[25px] flex-col'>
                    {
                        checkJwt ?
                            <>
                                <li className='hover:text-[#45a5d5] transition-all cursor-pointer'>Welcome {userData?userData.data?userData.data.user_fname:userData.user_fname:null}</li>
                                <li className='hover:text-[#45a5d5] transition-all cursor-pointer'><Link href={'/create-blog'} onClick={() => setMobMenu(false)}>Create Blog</Link></li>
                                <li className='hover:text-[#45a5d5] transition-all cursor-pointer'><Link href={'/'} onClick={handleLogout}>Log Out</Link></li>
                            </>
                            :
                            <>
                                <li className='hover:text-[#45a5d5] transition-all cursor-pointer'><Link href={'/create-blog'} onClick={() => setMobMenu(false)}>Create Blog</Link></li>
                                <li className='hover:text-[#45a5d5] transition-all cursor-pointer'><Link href={'/login'} onClick={() => setMobMenu(false)}>Log In</Link></li>
                                <li className='hover:text-[#45a5d5] transition-all cursor-pointer'><Link href={'/signup'} onClick={() => setMobMenu(false)}>Sign Up</Link></li>
                            </>
                    }
                </ul>
            </div>
            <div className='grid grid-flow-col justify-center md:py-[50px] py-[25px] md:px-[30px]'>
                <div className='font-bold text-white col-span-9 text-center md:text-left'>
                    <div className='text-[#45a5d5] md:text-[50px] text-[32px] font-extrabold uppercase'>Get paid to write</div>
                    <div className='md:text-[32px] text-[20px] capitalize md:mt-[0px] mt-[10px]'>Work from anywhere.</div>
                    <div className='md:text-[32px] text-[20px] capitalize md:mt-[0px] mt-[10px] md:mb-[25px] mb-[10px]'>We're seeking writers of any skill level.</div>
                    <Link href={'/signup'}>
                        <PrimaryButton innerText={'START NOW'} />
                    </Link>
                </div>
                <div className='justify-end col-span-3 md:flex hidden'>
                    <Image src={mobile} width={'340'} height={'380'} alt='mobileImage'/>
                </div>
            </div>
        </header>
    )
}
