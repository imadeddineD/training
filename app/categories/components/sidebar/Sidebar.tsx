'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const Sidebar = () => {
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
    <div className=' absolute w-[209px] sm:w-[200px] lg:left-[60px] left-[25px] top-[73px] z-10 sm:block hidden'>
        <div className=' text-[18px] font-[700] text-[#21272A]'>Filter By</div>
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
                                {BUSINESS_FILTERS.options.map((option, optionIdx) => (
                                    <li key={option.value} className='flex items-center'>
                                        <input
                                            type='checkbox'
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
                                {IT_FILTERS.options.map((option, optionIdx) => (
                                    <li key={option.value} className='flex items-center'>
                                        <input
                                            type='checkbox'
                                            id={`it-${optionIdx}`}
                                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                        />
                                        <label
                                            htmlFor={`it-${optionIdx}`}
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
                                {SALES_FILTERS.options.map((option, optionIdx) => (
                                    <li key={option.value} className='flex items-center'>
                                        <input
                                            type='checkbox'
                                            id={`sales-${optionIdx}`}
                                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                        />
                                        <label
                                            htmlFor={`sales-${optionIdx}`}
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
                                {RISK_FILTERS.options.map((option, optionIdx) => (
                                    <li key={option.value} className='flex items-center'>
                                        <input
                                            type='checkbox'
                                            id={`risk-${optionIdx}`}
                                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                        />
                                        <label
                                            htmlFor={`risk-${optionIdx}`}
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
            <input type="radio" name="duration" id="all" className='outline-none border-[1px] border-solid border-[#121619]' checked/>
            <label htmlFor="all" className='font-[400] text-[14px] text-[#4D5358]'>All</label>
        </div>
        <div className='flex gap-2'>
            <input type="radio" name="duration" id="one-week" className='outline-none border-[1px] border-solid border-[#121619]' />
            <label htmlFor="one-week" className='font-[400] text-[14px] text-[#4D5358]'>One Week</label>
        </div>
        <div className='flex gap-2'>
            <input type="radio" name="duration" id="two-weeks" className='outline-none border-[1px] border-solid border-[#121619]' />
            <label htmlFor="two-weeks" className='font-[400] text-[14px] text-[#4D5358]'>Two Weeks</label>
        </div>
    </div>
</div>

    </div>
    </>
  )
}

export default Sidebar
