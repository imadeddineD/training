import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { Almarai } from 'next/font/google';

const inter = Almarai({ subsets: ["arabic"] , weight:['700']});

const GroupeTrainer = () => {
  return (
<section className='bg-[#F6F6F6]'>
  <div className={inter.className}>
    <Container>
    <div className='flex flex-col md:flex-row justify-center gap-8 mt-8 py-8'>
  {/* Left Section */}
  <div className='flex flex-col justify-center gap-9 pl-5 md:w-full'>
    <div className='lg:text-[36px] md:text-[32px] sm:text-[28px] text-[24px]  text-[#2C3C58] font-[700]'>Have a look to <p className='lg:text-[64px] md:text-[45px] sm:text-[40px] text-[35px] text-[#9A103C] font-[700]'>Our Trainers</p></div>
    <div className='text-[#6F6F6F] font-[700] lg:text-[25px] md:text-[22px] sm:text-[20px] text-[18px] '>Professional trainers are the key to effective professional development. Be with the best, always</div>
    <button className=' rounded-md text-white lg:text-[22px] sm:text[20px] text[16px] font-[700] bg-[#FCBB19] lg:w-[180px] lg:h-[50px] sm:w-[140px] sm:h-[35px] w-[100px] h-[30px] text-center'>Look</button>
  </div>
  
  {/* Right Section */}
  <div className='flex justify-center items-center mx-6 md:w-full'>
    <div className='relative lg:w-[512px] lg:h-[284px] md:w-[384px] md:h-[214px] sm:w-[600px] sm:h-[334px] w-[330px] h-[189px] bg-[#DAD6D6]'>
      <Image priority fill quality={95} src='/trainer.jfif' alt='trainer' style={{ zIndex: "2", top: "20px", left: "-20px" , borderRadius : "8px" , overflow : "hidden" , objectFit: "cover"}} />
    </div>
  </div>
</div>


    </Container>
    </div>
    </section>
  )
}

export default GroupeTrainer