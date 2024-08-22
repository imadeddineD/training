"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import Container from './Container';
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from 'react-icons/ai';
import { cn } from '@/lib/utils';
import { Russo_One } from 'next/font/google';

const inter = Russo_One({ subsets: ["latin"] , weight:['400']});  

const Navbar = () => {

  
    const [active , setActive] = useState(false)
    const activate = () => {
      setActive(true)
    }
    const desactivate = () => {
      setActive(false)
    }
  // Define an array of route objects containing href and label
  const routes = [
    {
      href: `/`,
      label: 'HOME',
    },
    {
      href: `/categories`,
      label: 'Categories',
    },
    {
      href: `/locations`,
      label: 'Locations',
    },
    {
      href: `/competencies`,
      label: 'Competencies',
    },
    {
      href: `/employees`,
      label: 'Employees Assessment',
    }
  ];

  return (
    <div className={inter.className}>
    <div className='w-full h-[62px] md:p-0 md:pl-6 bg-[#2C3C58]'>
      {/* Frame 104 */}
      <Container>
        {/* Navigation Links */}
        <ul className={cn('flex flex-col md:flex-row md:h-[62px] justify-center items-center md:gap-4 lg:gap-[40px] md:my-auto z-[1] md:z-auto absolute md:static md:bg-transparent bg-[#2C3C58] w-full pb-7 md:pb-0 opacity-0 md:opacity-100 top-[-400px] transition-all ease-in duration-500', { 'opacity-100 top-[62px]': active })}>
          {routes.map((route) => (
            <li key={route.href} className='my-5 md:my-0 '>
              <Link href={route.href} className='text-white text-[16px] hover:text-primary '>
                  {route.label}
              </Link>
            </li>
          ))}
        </ul>
        <span className='block md:hidden absolute  z-10 right-[70px] text-white text-[26px] top-[18px]  ' >
            {active ? <AiFillCloseCircle onClick={desactivate}/> : <FaBars onClick={activate}/>}
        </span>
      </Container>
    </div>
    </div>
  );
};

export default Navbar;
