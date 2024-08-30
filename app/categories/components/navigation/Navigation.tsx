"use client"
import Container from '@/components/Container'
import React from 'react'
import "./Nav.css"

const Navigation = ({query , handleInputChange} : any) => {
  return (
    <div className=' h-[96px] bg-white px-[80px] py-[24px] flex justify-center items-center gap-6'>
            <div className=' font-[700] sm:text-[24px] text-[20px] text-[#697077] w-[231px]' >Get Your Course Now</div>
            <div className=' w-[calc(100%-255px)] sm:block hidden'>
                <input type="text" className=' w-[100%] px-[16px] py-3 outline-none bg-[#F2F4F8] border-b-solid border-b-[1px] border-b-[#C1C7CD] ' placeholder='Search For...'  onChange={handleInputChange}
          value={query} />
            </div>
    </div>
  )
}

export default Navigation