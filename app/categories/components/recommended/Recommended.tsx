'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React, { useState } from 'react'
import "../../../globals.css"
import { IoMdClose } from "react-icons/io";

const Recommended = ({handleClick , handleChange} : any) => {
    const [toggleMenu,setToggleMenu] = useState(false)

    const handleMenu = () => {
        setToggleMenu(prev => !prev)
    }
    const handleClose = () => {
        setToggleMenu(false)
    }

    const BUSINESS_FILTERS = {
        id: 'Business', 
        name: 'Business',
        options: [
          { value: 'subBusiness1', label: 'subBusiness1' },
          { value: 'subBusiness2', label: 'subBusiness2' },
          { value: 'subBusiness3', label: 'subBusiness3' },
          { value: 'subBusiness4', label: 'subBusiness4' },
          { value: 'subBusiness5', label: 'subBusiness5' },
        ] as const,
      }
    const IT_FILTERS = {
        id: 'IT',
        name: 'IT & Data',
        options: [
          { value: 'subIT1', label: 'subIT1' },
          { value: 'subIT2', label: 'subIT2' },
          { value: 'subIT3', label: 'subIT3' },
          { value: 'subIT4', label: 'subIT4' },
          { value: 'subIT5', label: 'subIT5' },
        ] as const,
      }

    const SALES_FILTERS = { 
        id: 'Sales',
        name: 'Procurement & Sales',
        options: [
          { value: 'subSales1', label: 'subSales1' },
          { value: 'subSales2', label: 'subSales2' },
          { value: 'subSales3', label: 'subSales3' },
          { value: 'subSales4', label: 'subSales4' },
          { value: 'subSales5', label: 'subSales5' },
        ] as const,
      }

    const RISK_FILTERS = {
        id: 'Risk',
        name: 'Risk & Audit',
        options: [
          { value: 'subRisk1', label: 'subRisk1' },
          { value: 'subRisk2', label: 'subRisk2' },
          { value: 'subRisk3', label: 'subRisk3' },
          { value: 'subRisk4', label: 'subRisk4' },
          { value: 'subRisk5', label: 'subRisk5' },
        ] as const,
      }
      
  return (
    <>
    <div className=' sm:flex hidden gap-2 justify-center items-center py-3'>
    <div className="section-box cursor-pointer">
    <input type="radio" name='location' value="" onChange={handleClick} id='All' className='hidden peer' defaultChecked/>
    <label htmlFor="All" className='px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[1px] peer-checked:border-solid peer-checked:border-[#C1C7CD]'>
        All
    </label>
</div>
    <div className="section-box cursor-pointer">
    <input type="radio" name='location' value="London" onChange={handleClick} id='London' className='hidden peer'/>
    <label htmlFor="London" className='px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[1px] peer-checked:border-solid peer-checked:border-[#C1C7CD]'>
        London
    </label>
</div>
    <div className="section-box cursor-pointer">
    <input type="radio" name='location' value="Casablanca" onChange={handleClick} id='casablanca' className='hidden peer'/>
    <label htmlFor="casablanca" className='px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[1px] peer-checked:border-solid peer-checked:border-[#C1C7CD]'>
        Casablanca
    </label>
</div>
<div className="section-box cursor-pointer">
    <input type="radio" name='location' value="Paris" onChange={handleClick}  id='Paris' className='hidden peer'/>
    <label htmlFor="Paris" className='px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[1px] peer-checked:border-solid peer-checked:border-[#C1C7CD]'>
        Paris
    </label>
</div>
<div className="section-box cursor-pointer">
    <input type="radio" name='location' value="Rome" onChange={handleClick} id='Rome' className='hidden peer'/>
    <label htmlFor="Rome" className='px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[1px] peer-checked:border-solid peer-checked:border-[#C1C7CD]'>
        Rome
    </label> 
</div>
<div className="section-box cursor-pointer">
    <input type="radio" name='location' value="Amesterdam" onChange={handleClick} id='Amesterdam' className='hidden peer'/>
    <label htmlFor="Amesterdam" className='px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[1px] peer-checked:border-solid peer-checked:border-[#C1C7CD]'>
        Amesterdam
    </label>
</div>


    </div> 

    <div onClick={handleMenu} className=' sm:hidden ml-2 w-[88px] h-[72px] my-[0px] border-[1px] border-solid border-black flex justify-center items-center gap-2 cursor-pointer'>
        <div>
            <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.625 2.875H1.375C1.07663 2.875 0.790483 2.75647 0.579505 2.5455C0.368526 2.33452 0.25 2.04837 0.25 1.75C0.25 1.45163 0.368526 1.16548 0.579505 0.954505C0.790483 0.743526 1.07663 0.625 1.375 0.625H21.625C21.9234 0.625 22.2095 0.743526 22.4205 0.954505C22.6315 1.16548 22.75 1.45163 22.75 1.75C22.75 2.04837 22.6315 2.33452 22.4205 2.5455C22.2095 2.75647 21.9234 2.875 21.625 2.875ZM17.875 8.125H5.125C4.82663 8.125 4.54048 8.00647 4.3295 7.79549C4.11853 7.58452 4 7.29837 4 7C4 6.70163 4.11853 6.41548 4.3295 6.2045C4.54048 5.99353 4.82663 5.875 5.125 5.875H17.875C18.1734 5.875 18.4595 5.99353 18.6705 6.2045C18.8815 6.41548 19 6.70163 19 7C19 7.29837 18.8815 7.58452 18.6705 7.79549C18.4595 8.00647 18.1734 8.125 17.875 8.125ZM13.375 13.375H9.625C9.32663 13.375 9.04048 13.2565 8.8295 13.0455C8.61853 12.8345 8.5 12.5484 8.5 12.25C8.5 11.9516 8.61853 11.6655 8.8295 11.4545C9.04048 11.2435 9.32663 11.125 9.625 11.125H13.375C13.6734 11.125 13.9595 11.2435 14.1705 11.4545C14.3815 11.6655 14.5 11.9516 14.5 12.25C14.5 12.5484 14.3815 12.8345 14.1705 13.0455C13.9595 13.2565 13.6734 13.375 13.375 13.375Z" fill="black"/>
            </svg>
        </div>
        <div>Filter</div>
    </div>

    <div className={toggleMenu ? ' absolute w-full h-full top-0 left-0 z-10 back' : ""}></div>

    <div className={toggleMenu ? "fixed right-0 bottom-0 h-[88vh] sm:hidden bg-white w-[65%] p-8 ease-in duration-300 z-50 overflow-y-scroll" : "fixed right-[-100%] h-[88vh] bottom-0 p-8 ease-in duration-300"}>
    <div className=' flex justify-between'>
    <div className=' text-[18px] font-[700] text-[#21272A]'>Filter By</div>
    <IoMdClose onClick={handleClose} size={25}/>
    </div>
    <div>
    <div className=' w-full mt-5'>
                <input type="text" className=' w-[100%] px-[16px] py-3 outline-none bg-[#F2F4F8] border-b-solid border-b-[1px] border-b-[#C1C7CD] ' placeholder='Search For...' />
    </div>
    </div>
    <div className=' pt-[24px]'>
            <div className=' text-[#343A3F] text-[16px] font-[400]'>Location</div>
            <div className=' flex flex-col gap-2 justify-center items-start pt-3'>
                <div className=' flex gap-2'>
                    <input type="radio" name="location" id="All" value="" onChange={handleChange} className=' outline-none border-[1px] border-solid border-[#121619]'  />
                    <label htmlFor="All" className=' font-[400] text-[14px] text-[#4D5358]'>All</label>
                </div>
                <div className=' flex gap-2'>
                    <input type="radio" name="location" id="London" value="London" onChange={handleChange} className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="London" className=' font-[400] text-[14px] text-[#4D5358]'>London</label>
                </div>
                <div className=' flex gap-2'>
                    <input type="radio" name="location" id="Paris" value="Paris" onChange={handleChange} className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="Paris" className=' font-[400] text-[14px] text-[#4D5358]'>Paris </label>
                </div>
                <div className=' flex gap-2'>
                    <input type="radio" name="location" id="Casablanca" value="Casablanca" onChange={handleChange} className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="Casablanca" className=' font-[400] text-[14px] text-[#4D5358]'>Casablanca </label>
                </div>
                <div className=' flex gap-2'>
                    <input type="radio" name="location" id="Rome" value="Rome" onChange={handleChange} className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="Rome" className=' font-[400] text-[14px] text-[#4D5358]'>Rome </label>
                </div>
                <div className=' flex gap-2'>
                    <input type="radio" name="location" id="Amesterdam" value="Amesterdam" onChange={handleChange} className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="Amesterdam" className=' font-[400] text-[14px] text-[#4D5358]'>Amesterdam </label>
                </div>
                
            </div>
        </div>
        <div className=' pt-[24px]'>
            <div className=' text-[#343A3F] text-[16px] font-[400]'>Subject</div>
            <div className=' flex flex-col gap-2 justify-center items-start pt-3'>
            <Accordion type="multiple" className='w-full'>
                    <AccordionItem value='business'>
                        <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
                            <span className='font-medium text-gray-900'>{BUSINESS_FILTERS.name}</span>
                        </AccordionTrigger>
                        <AccordionContent className='pt-6 animate-none'>
                            <ul className='space-y-4'>
                            <label className="sidebar-label-container">
                            <li  className='flex items-center'>
                                <input
                                    name='category'
                                    type='radio'
                                    value=""
                                    onChange={handleChange}
                                    id={`business`}
                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                 />
                                <label
                                    htmlFor={`business`}
                                    className='ml-3 text-sm text-gray-600'>
                                    All
                            </label>
                            </li>
                            </label>
                                {BUSINESS_FILTERS.options.map((option, optionIdx) => (
                                    <li key={option.value} className='flex items-center'>
                                        <input
                                            name='category'
                                            type='radio'
                                            value={option.value}
                                            onChange={handleChange}
                                            id={`business-${optionIdx}`}
                                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                        />
                                        <label
                                            htmlFor={`business-${optionIdx}`}
                                            className='ml-3 text-sm text-gray-600'>
                                            {option.label}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* IT Filters */}
                    <AccordionItem value='it'>
                        <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
                            <span className='font-medium text-gray-900'>{IT_FILTERS.name}</span>
                        </AccordionTrigger>
                        <AccordionContent className='pt-6 animate-none'>
                            <ul className='space-y-4'>
                            <label className="sidebar-label-container">
                            <li  className='flex items-center'>
                                <input
                                    name='category'
                                    type='radio'
                                    value=""
                                    onChange={handleChange}
                                    id={`business`}
                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                 />
                                <label
                                    htmlFor={`business`}
                                    className='ml-3 text-sm text-gray-600'>
                                    All
                            </label>
                            </li>
                            </label>
                                {IT_FILTERS.options.map((option, optionIdx) => (
                                    <li key={option.value} className='flex items-center'>
                                        <input
                                            name='category'
                                            type='radio'
                                            value={option.value}
                                            onChange={handleChange}
                                            id={`business-${optionIdx}`}
                                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                        />
                                        <label
                                            htmlFor={`business-${optionIdx}`}
                                            className='ml-3 text-sm text-gray-600'>
                                            {option.label}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Sales Filters */}
                    <AccordionItem value='sales'>
                        <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
                            <span className='font-medium text-gray-900'>{SALES_FILTERS.name}</span>
                        </AccordionTrigger>
                        <AccordionContent className='pt-6 animate-none'>
                            <ul className='space-y-4'>
                            <label className="sidebar-label-container">
                            <li  className='flex items-center'>
                                <input
                                    name='category'
                                    type='radio'
                                    value=""
                                    onChange={handleChange}
                                    id={`business`}
                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                 />
                                <label
                                    htmlFor={`business`}
                                    className='ml-3 text-sm text-gray-600'>
                                    All
                            </label>
                            </li>
                            </label>
                                {SALES_FILTERS.options.map((option, optionIdx) => (
                                    <li key={option.value} className='flex items-center'>
                                         <input
                                            name='category'
                                            type='radio'
                                            value={option.value}
                                            onChange={handleChange}
                                            id={`business-${optionIdx}`}
                                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                        />
                                        <label
                                            htmlFor={`business-${optionIdx}`}
                                            className='ml-3 text-sm text-gray-600'>
                                            {option.label}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Risk Filters */}
                    <AccordionItem value='risk'>
                        <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
                            <span className='font-medium text-gray-900'>{RISK_FILTERS.name}</span>
                        </AccordionTrigger>
                        <AccordionContent className='pt-6 animate-none'>
                            <ul className='space-y-4'>
                            <label className="sidebar-label-container">
                            <li  className='flex items-center'>
                                <input
                                    name='category'
                                    type='radio'
                                    value=""
                                    onChange={handleChange}
                                    id={`business`}
                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                 />
                                <label
                                    htmlFor={`business`}
                                    className='ml-3 text-sm text-gray-600'>
                                    All
                            </label>
                            </li>
                            </label>
                                {RISK_FILTERS.options.map((option, optionIdx) => (
                                    <li key={option.value} className='flex items-center'>
                                         <input
                                            name='category'
                                            type='radio'
                                            value={option.value}
                                            onChange={handleChange}
                                            id={`business-${optionIdx}`}
                                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                        />
                                        <label
                                            htmlFor={`business-${optionIdx}`}
                                            className='ml-3 text-sm text-gray-600'>
                                            {option.label}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    
                </Accordion>
            </div>
        </div>
       
        
        <div className='pt-[24px]'>
  <div className='text-[#343A3F] text-[16px] font-[400]'>Duration</div>
  <div className='flex flex-col gap-2 justify-center items-start pt-3'>
    <div className='flex gap-2'>
      <input
        type="radio"
        name="duration"
        value=""
        onChange={handleChange}
        id="duration-all"
        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
      />
      <label htmlFor="duration-all" className='font-[400] text-[14px] text-[#4D5358]'>All</label>
    </div>
    <div className='flex gap-2'>
      <input
        type="radio"
        name="duration"
        value="1 week"
        onChange={handleChange}
        id="duration-one-week"
        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
      />
      <label htmlFor="duration-one-week" className='font-[400] text-[14px] text-[#4D5358]'>One Week</label>
    </div>
    <div className='flex gap-2'>
      <input
        type="radio"
        name="duration"
        value="2 week"
        onChange={handleChange}
        id="duration-two-weeks"
        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
      />
      <label htmlFor="duration-two-weeks" className='font-[400] text-[14px] text-[#4D5358]'>Two Weeks</label>
    </div>
  </div>
</div>


    </div>
    </>
  )
}

export default Recommended