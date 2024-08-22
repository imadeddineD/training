"use client"
import React, { useState } from 'react'
import "../../../globals.css"
import { IoMdClose } from "react-icons/io";

const Recommended = () => {
    const [toggleMenu,setToggleMenu] = useState(false)

    const handleMenu = () => {
        setToggleMenu(prev => !prev)
    }
    const handleClose = () => {
        setToggleMenu(false)
    }
  return (
    <>
    <div className=' sm:flex hidden gap-2 justify-center items-center py-3'>
        <div className="section-box cursor-pointer">
            <input type="checkbox" name='casablanca' id='casablanca' className='hidden peer'/>
            <label htmlFor="casablanca" className=' px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[1px] peer-checked:border-solid peer-checked:border-[#C1C7CD]'>
                Casablanca
            </label>
        </div>
        <div className="section-box cursor-pointer">
            <input type="checkbox" name='Paris' id='Paris' className='hidden peer'/>
            <label htmlFor="Paris" className=' px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[1px] peer-checked:border-solid peer-checked:border-[#C1C7CD]'>
                Paris
            </label>
        </div>
        <div className="section-box cursor-pointer">
            <input type="checkbox" name='Rome' id='Rome' className='hidden peer'/>
            <label htmlFor="Rome" className=' px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[1px] peer-checked:border-solid peer-checked:border-[#C1C7CD]'>
                Rome
            </label>
        </div>
        <div className="section-box cursor-pointer">
            <input type="checkbox" name='Amesterdam' id='Amesterdam' className='hidden peer'/>
            <label htmlFor="Amesterdam" className=' px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[1px] peer-checked:border-solid peer-checked:border-[#C1C7CD]' >
                Amesterdam
            </label>
        </div>
        <div className="section-box cursor-pointer">
            <input type="checkbox" name='London' id='London' className='hidden peer'/>
            <label htmlFor="London" className=' px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[1px] peer-checked:border-solid peer-checked:border-[#C1C7CD]'>
                London
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
            <div className=' text-[#343A3F] text-[16px] font-[400]'>Subject</div>
            <div className=' flex flex-col gap-2 justify-center items-start pt-3'>
                <div className=' flex gap-2'>
                    <input type="checkbox" name="Business" id="Business" className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="Business" className=' font-[400] text-[14px] text-[#4D5358]'>Business (1,325)</label>
                </div>
                <div className=' flex gap-2'>
                    <input type="checkbox" name="IT & Data" id="IT & Data" className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="IT & Data" className=' font-[400] text-[14px] text-[#4D5358]'>IT & Data (1,658)</label>
                </div>
                <div className=' flex gap-2'>
                    <input type="checkbox" name="Procurement & Sales" id="Procurement & Sales" className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="Procurement & Sales" className=' font-[400] text-[14px] text-[#4D5358]'>Procurement & Sales (1,658)</label>
                </div>
                <div className=' flex gap-2'>
                    <input type="checkbox" name="Risk & Audit" id="Risk & Audit" className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="Risk & Audit" className=' font-[400] text-[14px] text-[#4D5358]'>Risk & Audit (1.321)</label>
                </div>
                <div className=' text-[12px] font-[400] text-[#21272A] underline cursor-pointer'>Show more</div>
                
            </div>
        </div>
        <div className=' pt-[24px]'>
            <div className=' text-[#343A3F] text-[16px] font-[400]'>Category</div>
            <div className=' flex flex-col gap-2 justify-center items-start pt-3'>
                <div className=' flex gap-2'>
                    <input type="checkbox" name="Media" id="Media" className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="Media" className=' font-[400] text-[14px] text-[#4D5358]'>Media (1,325)</label>
                </div>
                <div className=' flex gap-2'>
                    <input type="checkbox" name="Design" id="Design" className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="Design" className=' font-[400] text-[14px] text-[#4D5358]'>Design (1,658)</label>
                </div>
                <div className=' flex gap-2'>
                    <input type="checkbox" name="UX Design" id="UX Design" className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="UX Design" className=' font-[400] text-[14px] text-[#4D5358]'>UX Design (1,658)</label>
                </div>
                <div className=' flex gap-2'>
                    <input type="checkbox" name="Front End" id="Front End" className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="Front End" className=' font-[400] text-[14px] text-[#4D5358]'>Front End (1.321)</label>
                </div>
                <div className=' text-[12px] font-[400] text-[#21272A] underline cursor-pointer'>Show more</div>
                
            </div>
        </div>
        <div className=' pt-[24px]'>
            <div className=' text-[#343A3F] text-[16px] font-[400]'>Location</div>
            <div className=' flex flex-col gap-2 justify-center items-start pt-3'>
                <div className=' flex gap-2'>
                    <input type="checkbox" name="London" id="London" className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="London" className=' font-[400] text-[14px] text-[#4D5358]'>London (1,325)</label>
                </div>
                <div className=' flex gap-2'>
                    <input type="checkbox" name="Paris" id="Paris" className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="Paris" className=' font-[400] text-[14px] text-[#4D5358]'>Paris (1,658)</label>
                </div>
                <div className=' flex gap-2'>
                    <input type="checkbox" name="Casablanca" id="Casablanca" className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="Casablanca" className=' font-[400] text-[14px] text-[#4D5358]'>Casablanca (1,658)</label>
                </div>
                <div className=' flex gap-2'>
                    <input type="checkbox" name="Rome" id="Rome" className=' outline-none border-[1px] border-solid border-[#121619]' />
                    <label htmlFor="Rome" className=' font-[400] text-[14px] text-[#4D5358]'>Rome (1.321)</label>
                </div>
                <div className=' text-[12px] font-[400] text-[#21272A] underline cursor-pointer'>Show more</div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Recommended