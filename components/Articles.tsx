import React from 'react'
import Container from './Container'
import Image from 'next/image'

const Articles = () => {
  return (
    <section className=' py-[60px]'>
        <Container>
            <div className=' lg:text-[42px] md:text-[38px] sm:text-[34px] text-[30px] text-center text-[#9A103C]'>Specialized Articles</div>
            <div className=' md:h-[511.91px] articles mt-[30px]'>
                <div className=' relative this1 h-[360px] sm:h-[450px] md:h-[100%]'>
                <Image priority fill quality={95} src="/article1.png" alt='article1' style={{objectFit: "cover" , borderRadius:" 8px"}}/>
                <div className=' absolute w-[100%] h-[100%] top-0 left-0 grad z-20'></div>
                <div className=' absolute w-[100%] h-[100%] top-0 left-0 z-10 py-4 px-2'>
                    <div className=' text-[16px] text-[#FCBB19]  mb-3'>Leadership & Management</div>
                    <div className=' text-white lg:text-[20px] md:text-[18px] sm:text-[20px] text-[18px] pl-1 mb-3'>12 Leadership Articles Every New Manager Needs to Read</div>
                    <div className=' h-[2px] w-[172px] bg-[#D33E52]'></div>
                </div>
                </div>
                <div className=' relative  this2  h-[240px] sm:h-[300px] md:h-[100%]'>
                <Image priority fill quality={95} src="/article2.jpg" alt='article2' style={{objectFit: "cover" , borderRadius:" 8px"}}/>
                <div className=' absolute w-[100%] h-[100%] top-0 left-0 grad z-20'></div>  
                <div className=' absolute w-[100%] h-[100%] top-0 left-0 z-10 py-2 px-2'>
                    <div className=' text-[16px] text-[#FCBB19] mb-3'>Leadership & Management</div>
                    <div className=' text-white lg:text-[18px] md:text-[16px] sm:text-[18px] text-[15px] pl-1 mb-3'>12 Leadership Articles Every New Manager Needs to Read</div>
                    <div className=' h-[2px] w-[172px] bg-[#D33E52]'></div>
                </div> 
                </div>
                <div className=' relative this4  h-[240px] sm:h-[300px] md:h-[100%]'>
                <Image priority fill quality={95} src="/article3.jpg" alt='article3' style={{objectFit: "cover" , borderRadius:" 8px"}}/>
                <div className=' absolute w-[100%] h-[100%] top-0 left-0 z-10 py-2 px-2'>
                    <div className=' text-[16px] text-[#FCBB19] mb-3'>Leadership & Management</div>
                    <div className=' text-white lg:text-[18px] md:text-[16px] sm:text-[18px] text-[15px] pl-1 mb-3'>12 Leadership Articles Every New Manager Needs to Read</div>
                    <div className=' h-[2px] w-[172px] bg-[#D33E52]'></div>
                </div>
                <div className=' absolute w-[100%] h-[100%] top-0 left-0 grad z-20'></div>
                </div>
                <div className=' relative this3 h-[240px] sm:h-[300px] md:h-[100%]'>
                <Image priority fill quality={95} src="/article4.png" alt='article4' style={{objectFit: "cover" , borderRadius:" 8px"}}/>
                <div className=' absolute w-[100%] h-[100%] top-0 left-0 z-10 py-2 px-2'>
                    <div className=' text-[16px] text-[#FCBB19] mb-3'>Leadership & Management</div>
                    <div className=' text-white lg:text-[18px] md:text-[16px] sm:text-[18px] text-[15px] pl-1 mb-3'>12 Leadership Articles Every New Manager Needs to Read</div>
                    <div className=' h-[2px] w-[172px] bg-[#D33E52]'></div>
                </div>
                <div className=' absolute w-[100%] h-[100%] top-0 left-0 grad z-20'></div>
                </div>
                <div className=' relative this5 h-[240px] sm:h-[300px] md:h-[100%]'>
                <Image priority fill quality={95} src="/article5.png" alt='article5' style={{objectFit: "cover" , borderRadius:" 8px"}}/>
                <div className=' absolute w-[100%] h-[100%] top-0 left-0 z-10 py-2 px-2'>
                    <div className=' text-[16px] text-[#FCBB19] mb-3'>Leadership & Management</div>
                    <div className=' text-white lg:text-[18px] md:text-[16px] sm:text-[18px] text-[15px] pl-1 mb-3'>12 Leadership Articles Every New Manager Needs to Read</div>
                    <div className=' h-[2px] w-[172px] bg-[#D33E52]'></div>
                </div>
                <div className=' absolute w-[100%] h-[100%] top-0 left-0 grad z-20'></div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Articles