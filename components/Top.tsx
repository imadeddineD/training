import React from 'react'
import Container from './Container'

interface top {
    label : string
}

const Top = ({label} : top) => {
  return (
    <div className=' w-[100%] lg:h-[103px] md:h-[80px] sm:h-[60px] h-[40px]  text-[14px] gt-background  flex justify-center items-center text-white  sm:text-[24px] md:text-[28px]  lg:text-[34px]  '>
        <Container> 
            <div className=' w-fit lg:pl-[70px] '>{label}</div>
        </Container>
    </div>
  )
}

export default Top