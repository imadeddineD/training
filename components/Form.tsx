import React from 'react'
import Container from './Container'
import MainForm from './MainForm'

const Form = () => {
  return (
    <div>
        <Container>
            <div className=' mt-5 sm:text-[30px] text-[20px] sm:text-center md:text-[38px]  lg:text-[46px] md:text-start text-center px-3'>Search Based On <span className='text-[#FCBB19]'>C</span><span className='text-[#9A103C]'>o</span><span className='text-[#2C3C58]'>m</span><span className='text-[#FCBB19]'>p</span><span className='text-[#9A103C]'>e</span><span className='text-[#2C3C58]'>t</span><span className='text-[#FCBB19]'>e</span><span className='text-[#9A103C]'>n</span><span className='text-[#2C3C58]'>c</span><span className='text-[#FCBB19]'>i</span><span className='text-[#9A103C]'>e</span><span className='text-[#2C3C58]'>s</span></div>
            <div className=' mt-7'>
                <MainForm/>
            </div>
        </Container>
    </div>
  )
}

export default Form