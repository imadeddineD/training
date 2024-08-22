import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { BiMap } from "react-icons/bi";

const Footer = () => {
  return (
    <section className=' relative mt-5 bg-[#F9B223] md:h-[304.61px]'>
        <div className='absolute footter md:h-[100%] top-[-22px] left-[11px] rounded-tl-[7px] rounded-tr-[7px] bg-[#9A103C] py-[22px] lg:px-[60px] md:px-7 flex md:flex-row flex-col md:justify-between md:items-start items-center '>
        <div className="md:w-[222px] md:h-[143px] w-[180px] h-[122] md:mb-0 mb-5   ">
            <Image  src="/footerlogo.png" alt="logo"  width={180} height={122} />
          </div>
          <div className=' w-[150px] text-white md:pb-0 pb-6'>
            <div className=' text-[18px] pb-[20px] boored md:text-start text-center' >Links</div>
            <ul className=' mt-5 text-[16px]'>
            <li>About us</li>
            <li>Contact us</li>
            <li>Our Team</li> 
            <li>Articles</li>
            <li>Our Goals</li>
            <li className=' mt-5'>Join Our Team</li>
            </ul>
          </div>
          <div className=' sm:w-[330px] w-[280px] text-white mt-8 sm:mt-0'>
            <div className=' text-[18px] md:w-[130px] pb-[20px] boored mb-5 md:text-start text-center '>Find us</div>
            <div className='flex'>
                <div className=' text-[#F9B223] w-[20px] h-[40px] flex justify-center items-center text-[25px] '><BiMap/></div>
                <div className=' pl-2 text-[16px]'>London Academy - Landmark Office
                Oxford Street 2 Portman St, WIH 6DU</div>
                </div>
            <div className='flex sm:w-[206px] sm:justify-start justify-center h-7 items-center gap-2 mt-[27px]'>
                <div className=' w-7'><Image src="/whatsapp.png" alt='whatsapp' width={28} height={28}/></div>
                <div className='text-[16px]'>00447737137773</div>
                </div>
            <div className=' flex w-[108px] justify-between mt-[27px]'>
            <Image src="/likedin.png" alt='whatsapp' width={28} height={28}/>
            <Image src="/twitter.png" alt='whatsapp' width={28} height={28}/>
            <Image src="/facebook.png" alt='whatsapp' width={28} height={28}/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Footer