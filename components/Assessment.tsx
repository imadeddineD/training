import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'

const Assessment = () => {
  return (
    <section className=' py-10 bg-[#F6F6F6] px-4'>
    <Container>
    <div className=' flex lg:flex-row flex-col lg:gap-0 gap-5'>
        <div className=' lg:w-[618px] mr-[10px] lg:mr-5 '>
            <div className='md:text-[44px] sm:text-[37px] text-[33px] text-[#9A103C]  mb-[50px]'>
            Employees Assesment
            </div>
            <div className=' lg:text-[39px] md:text-[36px] sm:text-[32px] text-[25px] '>
            Assestment Program Based on Competencies
            </div>
            <div className=' sm:text-[20px] text-[18px'>
            A Specialized Assessment Program for Trainees
            </div>
            <div className=' md:w-[180px] md:h-[60px] sm:w-[150px] sm:h-[50px] w-[130px] h-[40px]  rounded-[8px] bg-[#FCBB19] flex justify-center items-center mt-[30px]'>
                <Link className=' text-white md:text-[23px] text-[20px]' href='/'>See More</Link>
            </div>
        </div>
    <div className='relative lg:w-[600px] lg:m-0 m-auto lg:h-[400px] md:w-[700px] md:h-[466px] sm:w-[600px] sm:h-[400px] w-[330px] h-[220px] ' >
    <Image priority fill quality={95} src="/statistics.png" alt='statistics' style={{objectFit: "cover"}}/>
    </div>
    </div>
    </Container>
     </section>
  )
}

export default Assessment