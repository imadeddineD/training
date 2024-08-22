import Top from '@/components/Top'
import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Navigation from './components/navigation/Navigation'
import Recommended from './components/recommended/Recommended'
import Products from './components/products/Products'
import { Roboto } from 'next/font/google'

const inter = Roboto({ subsets: ["latin"] ,weight:["100","300" ,"400","500","700","900"]});

const page = () => {
  return (
    <div>
    <Top label="Supporting You in Reaching Your Next Summit"/>

    <div className={inter.className}>
    <Navigation/>
    
    <div className=' lg:px-[60px] md:px-8 sm:px-[25px] px-2 mx-auto bg-[#DDE1E6] relative pt-6'>
    <Recommended/>
    <Products/>
    <Sidebar/>
    </div>
    </div>

    </div>
  )
}

export default page