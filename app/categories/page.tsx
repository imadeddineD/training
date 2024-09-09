'use client'
import Top from '@/components/Top'
import React, { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Navigation from './components/navigation/Navigation'
import Recommended from './components/recommended/Recommended'
import Products from './components/products/Products'
import { Roboto } from 'next/font/google'
import image from '../../public/course.jpeg'
import Image from 'next/image'
import Link from 'next/link'


const inter = Roboto({ subsets: ["latin"] ,weight:["100","300" ,"400","500","700","900"]});

const Page = () => {

  const data : any = [
    {
      id : "1",
      img: image,
      title: "The arts of influential writing for public and media relations",
      duration : "1 week",
      subject: "Business",
      category: "Media",
      location: "Casablanca",
      price: 1999.99,
    },
    {
      id : "2",
      img: image,
      title: "Arts of influential writing for public and media relations",
      duration : "2 week",
      subject: "IT & Data",
      category: "Media",
      location: "London",
      price: 1999.9,
    },
    {
      id : "3",
      img: image,
      title: "Influential writing for public and media relations",
      duration : "1 week",
      subject: "Procurement & Sales",
      category: "UX Design",
      location: "Paris",
      price: 1999.99,
    },
    {
      id : "4",
      img: image,
      title: "Writing the arts of influential for public and media relations",
      duration : "1 week",
      subject: "Business",
      category: "Media",
      location: "Rome",
      price: 1999.99,
    },
    {
      id : "5",
      img: image,
      title: "Public and media relations",
      duration : "2 week",
      subject: "Risk & Audit",
      category: "UX Design",
      location: "Casablanca",
      price: 1999.99,
    },
    {
      id : "6",
      img: image,
      title: "The arts of influential writing for public and media relations",
      duration : "1 week",
      subject: "Business",
      category: "Front End",
      location: "Amesterdam",
      price: 1999.99,
    },
    {
      id : "7",
      img: image,
      title: "The arts of influential writing for public and media relations",
      duration : "1 week",
      subject: "Business",
      category: "Media",
      location: "Casablanca",
      price: 1999.99,
    },
    {
      id : "8",
      img: image,
      title: "Arts of influential writing for public and media relations",
      duration : "2 week",
      subject: "IT & Data",
      category: "Media",
      location: "London",
      price: 1999.9,
    },
    {
      id : "9",
      img: image,
      title: "Influential writing for public and media relations",
      duration : "1 week",
      subject: "Procurement & Sales",
      category: "UX Design",
      location: "Paris",
      price: 1999.99,
    },
    {
      id : "10",
      img: image,
      title: "Writing the arts of influential for public and media relations",
      duration : "1 week",
      subject: "Business",
      category: "Media",
      location: "Rome",
      price: 1999.99,
    },
    {
      id : "11",
      img: image,
      title: "Public and media relations",
      duration : "2 week",
      subject: "Risk & Audit",
      category: "UX Design",
      location: "Casablanca",
      price: 1999.99,
    },
    {
      id : "12",
      img: image,
      title: "The arts of influential writing for public and media relations",
      duration : "1 week",
      subject: "Business",
      category: "Front End",
      location: "Amesterdam",
      price: 1999.99,
    },
    
  ];


  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event:any) => {
    setQuery(event.target.value);
  };

  const filteredItems = data.filter(
    (product : any) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event : any) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event : any) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products : any, selected : any , query : any) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category ,  location, duration, title } : any) =>
          category === selected ||
          location === selected ||
          duration === selected ||
          title === selected
      );
    }

    return filteredProducts.map((item: any) => (
      <Link key={item.id} href={`/categories/${item.id}`} className="w-[100%] inline-block">
        <div key={item.id} className='w-full rounded-[16px] bg-[white] flex justify-center items-center gap-4 p-3 md:h-[185px] h-[185px] sm:h-[210px]'>
              <Image
                src={item.img}
                alt='img'
                width={100}
                height={100}
                className='w-[157px] h-[100%] md:w-[211px] lg:w-[281px] object-cover rounded-[8px]'
              />
              <div className='w-[calc(100% - 173px)] md:w-[calc(100%-227px)] lg:w-[calc(100%-297px)] flex flex-col justify-between items-start lg:gap-5 md:gap-2 gap-1'>
                <div>
                  <div className='text-[#343A3F] sm:text-[12px] text-[11px] font-[400]'><span className='font-bold'>{item.subject}</span> {" | "} {item.category}</div>
                  <div 
                    className='text-[#21272A] md:text-[18px] text-[16px] font-[600] line-clamp-2 overflow-hidden'
                    title='The arts of influential writing for public and media relations'
                  >
                    {item.title}
                  </div>
                </div>
                <div>
                  <div className='sm:text-[14px] text-[13px] font-[500]'>Location: <span className='text-[#697077]'>{item.location}</span></div>
                  <div className='sm:text-[12px] text-[11px] font-[500] text-[#697077]'>{item.duration}</div>
                </div>
                <div className='text-[16px] font-[500]'>${item.price}</div>
              </div>
            </div>
            </Link>
      )
    );
  }

  const result = filteredData(data, selectedCategory, query);

  console.log('this is the result')
  console.log(result)
   
  const [search,setSearch] = useState("")
  return (
    <div>
    <Top label="Supporting You in Reaching Your Next Summit"/>

    <div className={inter.className}>
    <Navigation query={query} handleInputChange={handleInputChange}/>
    
    <div className=' lg:px-[60px] md:px-8 sm:px-[25px] px-2 mx-auto bg-[#DDE1E6] relative pt-6'>
    <Recommended handleClick={handleClick} handleChange={handleChange}/>
    <Products result={result}/>
    <Sidebar handleChange={handleChange}/>
    </div>
    </div>

    </div>
  )
}

export default Page