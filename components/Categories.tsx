import React from 'react'
import Container from './Container'
import Image from 'next/image'

const Categories = () => {
    const categories = [
        {
            id : "1" , 
            title : "Leadership & Management" , 
            image : "/care.png" , 

        } , 
        {
            id : "2" ,
            title : "Real Estate & Investment" , 
            image : "/data.png" , 

        } , 
        {
            id : "3" ,
            title : "Media & Public Relations" , 
            image : "/data.png" , 

        } , 
        {
            id : "4" ,
            title : "Management & Leadership" , 
            image : "/data.png" , 

        } , 
        {
            id : "5" ,
            title : "Secretary & Administration" , 
            image : "/data.png" , 

        } , 
        {
            id : "6" ,
            title : "HR" , 
            image : "/data.png" , 

        } , 
        {
            id : "7" ,
            title : "Procurement & Sales" , 
            image : "/data.png" , 

        } , 
        {
            id : "8" ,
            title : "Procurement & Sales" , 
            image : "/data.png" , 

        } , 
        {
            id : "9" ,
            title : "Procurement & Sales" , 
            image : "/data.png" , 

        } , 
        {
            id : "10" ,
            title : "Procurement & Sales" , 
            image : "/data.png" , 

        } , 
    ]
  return (
    <section className=' bt-purpul py-10'>
        <Container>
            <div className=' sm:px-10 '>
                <div className=' lg:text-[42px] md:text-[38px] sm:text-[35px] text-[30px] sm:text-start text-center text-white sm:pb-0 pb-3'>
                Specializations at Your Fingertips
                </div>
                <div className=' md:text-[23px] sm:text-[20px] text-[18px] sm:text-start text-center text-white'>
                A wide range of specialties that meet your needs. Chose what suits you now
                </div>
            </div>
            <div>
                <ul className=' px-3 mt-[30px] unordered'>
                    {categories.map( cat => (
                        <li key={cat.id} className='  bg-white rounded-lg cursor-pointer'>
                            <div className='flex gap-2 justify-center items-center  bg-[#F3F3F3] rounded-tr-lg rounded-tl-lg p-3'>
                            <div className='bg-white w-[50px] h-[45px] rounded-[50%] flex justify-center items-center' style={{ boxShadow: '2.5383877754211426px 2.5383877754211426px 10.15355110168457px -1.6922584772109985px rgba(0, 0, 0, 0.25)' }}><Image src={cat.image} alt="image" width={36} height={28} /></div>
                                <div className=' w-[160px] text-center'>
                                    {cat.title}
                                </div>

                            </div>
                            <div className=' my-[15px]'>
                                <div className=' flex gap-4 justify-start items-center px-[20px]'>
                                    <div className=' w-[27px] h-[27px] rounded-[50%] bg-[#F9B223] flex justify-center items-center text-white text-[13.5px]' style={{ boxShadow: '2.5383877754211426px 3.384516954421997px 3.384516954421997px 0px rgba(0, 0, 0, 0.25)' }}>
                                        78
                                    </div>
                                    <div>
                                        Courses
                                    </div>
                                </div>
                                <div className=' flex gap-4 justify-start items-center px-[20px] mt-[10px]'>
                                    <div className=' w-[27px] h-[27px] rounded-[50%] bg-[#44C74A] flex justify-center items-center text-white text-[13.5px]' style={{ boxShadow: '2.5383877754211426px 3.384516954421997px 3.384516954421997px 0px rgba(0, 0, 0, 0.25)' }}>
                                        4
                                    </div>
                                    <div>
                                        Section
                                    </div>
                                </div>
                                <div className=' flex gap-4 justify-start items-center px-[20px] mt-[10px]'>
                                <div className='w-[27px] h-[27px] rounded-[50%] bg-[#F92397] flex justify-center items-center text-white text-[13.5px]' style={{ boxShadow: '2.5383877754211426px 3.384516954421997px 3.384516954421997px 0px rgba(0, 0, 0, 0.25)' }}>7</div>
                                    <div>
                                        Cities
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    </section>
  )
}

export default Categories