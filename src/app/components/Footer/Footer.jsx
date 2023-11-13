import Image from 'next/image'
import React from 'react'
import footerLogo from '../../../../public/assets/images/footerLogo.png'
import { FaXTwitter, FaFacebook, FaPinterestP } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className='md:px-[300px] px-[25px] bg-[#212121] pt-[50px] pb-[16px]'>
      <div className='grid md:grid-cols-3 grid-cols-1 md:gap-[50px] gap-[25px] justify-between border-b-[1px] border-[#45a5d5] pb-[25px] mb-[25px]'>
        <div>
          <div>
            <Image src={footerLogo} width={'300'} height={'100'} alt='logo'/>
          </div>
          <div className='text-white my-[50px] leading-[30px] md:text-[20px] font-light'>
            With over 300k subscribers and 4 million readers, Smart Blogger is one of the world's largest websites dedicated to writing and blogging.
          </div>
          <div className='flex gap-[35px] justify-start text-start'>
            <FaXTwitter className='text-[#45a5d5] text-[22px] cursor-pointer hover:text-red-400' />
            <FaFacebook className='text-[#45a5d5] text-[22px] cursor-pointer hover:text-red-400' />
            <FaPinterestP className='text-[#45a5d5] text-[22px] cursor-pointer hover:text-red-400' />
          </div>
        </div>
        <div>
          <div className='text-[#45a5d5] text-[32px] font-bold mb-[16px]'>Company</div>
          <div>
            <ul className='md:text-[20px] text-white font-light'>
              <li className='hover:text-[#45a5d5] hover:underline transition-all cursor-pointer'>About Smart Blogger</li>
              <li className='hover:text-[#45a5d5] hover:underline transition-all cursor-pointer'>Blog</li>
              <li className='hover:text-[#45a5d5] hover:underline transition-all cursor-pointer'>Our Products</li>
              <li className='hover:text-[#45a5d5] hover:underline transition-all cursor-pointer'>Contact Us</li>
            </ul>
          </div>
        </div>
        <div>
          <div className='text-[#45a5d5] text-[32px] font-bold mb-[16px]'>Best of the Blog</div>
          <div>
            <ul className='md:text-[20px] text-white font-light'>
              <li className='hover:text-[#45a5d5] hover:underline transition-all cursor-pointer'>Freelance Writing Jobs</li>
              <li className='hover:text-[#45a5d5] hover:underline transition-all cursor-pointer'>Affiliate Marketing Guide</li>
              <li className='hover:text-[#45a5d5] hover:underline transition-all cursor-pointer'>Make Money Blogging</li>
              <li className='hover:text-[#45a5d5] hover:underline transition-all cursor-pointer'>801+ Power Words</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 justify-between text-white font-light text-[14px]'>
        <div>© 2012-2023 Smart Blogger — Boost Blog Traffic, Inc.</div>
        <div className='text-end'>
          Terms | Privacy Policy | Refund Policy | Affiliate Disclosure
        </div>
      </div>
    </footer>
  )
}
