import React from 'react'

export default function PrimaryButton({innerText,onClick}) {
  return (
    <button className='md:text-[18px] text-[18px] text-white uppercase p-[12px_26px] bg-[#ff6900] rounded-lg hover:bg-[#45a5d5] transition-all' onClick={onClick?onClick:null}>{innerText?innerText:''}</button>
  )
}
