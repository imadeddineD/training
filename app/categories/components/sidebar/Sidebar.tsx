import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div className=' absolute w-[209px] sm:w-[200px] lg:left-[60px] left-[25px] top-[73px] z-10 sm:block hidden'>
        <div className=' text-[18px] font-[700] text-[#21272A]'>Filter By</div>
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

export default Sidebar