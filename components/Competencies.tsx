'use client'
import Container from './Container'
import Image from 'next/image'
import { Amaranth } from 'next/font/google'
import { useEffect } from 'react';



const inter = Amaranth({ subsets: ["latin"]  , weight: "400" });  

const Competencies = () => {

    useEffect(() => {
        let section : any;
        let spans : any;

        if (typeof document !== 'undefined') {
            section = document.querySelector(".hereis");
            spans = document.querySelectorAll(".hereis span");

            window.onscroll = () => {
                if (window.scrollY >= section.offsetTop - 160) {
                    spans.forEach((span : any) => {
                        span.style.width = span.dataset.width
                    })
                }
            };
        }
    }, []);


  return (
    <section className=' my-10 hereis'>
    <Container>
        <div className=' flex lg:flex-row flex-col-reverse lg:gap-4 gap-5'>
        <div className='relative lg:w-[543px] lg:m-0 m-auto lg:h-[505px] md:w-[700px] md:h-[651px] sm:w-[600px] sm:h-[560px] w-[330px] h-[308px] bg-[#DAD6D6]' >
            <Image priority fill quality={95} src="/com.jpg" alt='comp' style={{objectFit: "cover"}}/>
            <Image quality={95} src="/rotate.png" alt='rotate' width={86} height={80} className="absolute sm:w-[186px] sm:h-[181px] z-3 top-[7px] lg:left-[65%] rotate-animation md:left-[514px] sm:left-[414px] left-[244px]" />
        </div>
        <div className=' lg:w-[618px] ml-[10px] lg:ml-5 mx-5'>
            <div className={inter.className}>
            <h3 className='text-[#FAB122] text-[22px] [text-shadow:_0_3.384516954421997px_3.384516954421997px_rgb(0_0_0_/_25%)] ' >Courses Based on Competencies</h3>
            <h4 className=' relative md:text-[37.23px] sm:text-[32px] text-[25px] enhancing'>Enhancing employees skills through <span className=' text-[#B81436]'>300 Competencies</span> that we develop</h4>
            <Image src="/arrow.png" alt="arrow" width={260} height={82} style={{marginLeft : "53px" , marginTop : "-30px"  , transform: "rotate(7.56deg)" }}/>
            </div>
            <div className='mt-[100px] flex flex-col gap-5 experienceitems'>
                <div className=' relative w-[100%] experienceitem'>
                    <div className="sm:text-[20px] experienceinfo">
                        Organization & Planning
                    </div>
                    <div className='absolute top-0 right-[14%] percentage'>86%</div>
                    <div className=" relative mt-[7px] h-[7px] w-[100%] bg-[#eee] ">
                        <span style={{width : "0" , transition : "width 2s ease-out"}}  className=' absolute left-0 top-0 h-[100%] bg-[#F92397]' data-width='86%'></span>
                    </div>
                </div>
                <div className=' relative w-[100%] experienceitem'>
                    <div className="sm:text-[20px] experienceinfo">
                        Corporate Project Management
                    </div>
                    <div className='absolute top-0 right-[5%] percentage'>95%</div>
                    <div className=" relative mt-[7px] h-[7px] w-[100%] bg-[#eee] ">
                        <span style={{width : "0" , transition : "width 2s ease-out"}} className='absolute left-0 top-0 h-[100%] bg-[#FCBB19]' data-width='95%'></span>
                    </div>
                </div>
                <div className='relative w-[100%] experienceitem'>
                    <div className="sm:text-[20px] experienceinfo">
                        Performance Management
                    </div>
                    <div className='absolute top-0 right-[10%] percentage'>90%</div>
                    <div className=" relative mt-[7px] h-[7px] w-[100%] bg-[#eee] ">
                        <span style={{width : "0" , transition : "width 2s ease-out"}} className='absolute left-0 top-0 h-[100%] bg-[#44C74A]' data-width='90%'></span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </Container>
    </section>
  )
}

export default Competencies