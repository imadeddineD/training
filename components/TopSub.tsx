import React from 'react'
import Container from './Container'

interface top {
    label : string,
}

const TopSub = ({label} : top) => {
  return (
    <div className=' w-[100%] lg:h-[103px] md:h-[80px] sm:h-[60px] h-[40px]  text-[12px] gt-background px-1  flex justify-center items-center text-white  sm:text-[18px] md:text-[20px]  lg:text-[24px]  '>
        <Container> 
            <div className=' w-fit lg:pl-[80px] '>{label}</div>
        </Container>
    </div>
  )
}

export default TopSub