import React from 'react'
import Container from './Container'

interface TopProps {
    mainlabel: string;
    sublabel: string;
}

const TopPlus = ({ mainlabel, sublabel }: TopProps) => {
    return (
        <div className=' gt-back'> 
        <Container>
        <div className='flex flex-col justify-center items-start w-full lg:h-[187px] md:h-[140px] sm:h-[110px] h-[100px] text-white pl-6'>
                <div className='text-[20px] sm:text-[26px] md:text-[32px] lg:text-[42.31px] sm:pl-[10px] sm:text-start text-center'>{mainlabel}</div>
                <div className='lg:text-[23.69px] sm:text-[18px] md:text-[20px] sm:pl-[10px] sm:text-start text-center'>{sublabel}</div>
        </div>
        </Container>
        </div>
    );
}

export default TopPlus;
