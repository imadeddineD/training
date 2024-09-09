"use client"
import TopSub from '@/components/TopSub'
import React, { useEffect, useState } from 'react'
import { Tinos } from 'next/font/google'
import Image from 'next/image';
import london from "@/public/london.png"
import riyadh from "@/public/riyadh.png"
import amestrdam from "@/public/amestrdam.png"
import madrid from "@/public/madrid.png"
import barclone from "@/public/barcelone.png"
import dubai from "@/public/dubai.png"
import paris from "@/public/paris.png"
import rome from "@/public/rome.png"
const inter = Tinos({ subsets: ["latin"] , weight:['400','700']});

const page = ({params} : any) => {
    const [progress, setProgress] = useState({
        orgPlanning: 0,
        businessExcellence: 0,
        auditPlanning: 0,
        timeliness: 0,
        auditExecution: 0,
      });
    
      useEffect(() => {
        // Simulate loading progress from 0% to target values
        const timeout = setTimeout(() => {
          setProgress({
            orgPlanning: 90,
            businessExcellence: 85,
            auditPlanning: 80,
            timeliness: 90,
            auditExecution: 80,
          });
        }, 300); // small delay before starting the animation
    
        return () => clearTimeout(timeout);
      }, []);
  return (
    <>
    <TopSub label={`Home > Courses > CategoryName > The Title of this category`}/>
    <div className="flex lg:flex-row flex-col justify-center items-center lg:h-[175px] myShad">
        <div className='lg:w-[calc(100%-200px)] p-[30px] cont1 w-[100%]'>
            <div className="one1">
                <div className="text-[17px] font-[400] text-[#9A103C] sm:w-[200px] w-[150px]">Course Title:</div>
                <div className={inter.className}>
                    <span className="text-[18px] font-[700] sm:w-[clac(100%-200px)] w-[calc(100%-150px)]">Effective Time Management for Internal Audit Directors training course</span>
                </div>
            </div>
            <div className="two2">
                <div className="text-[17px] font-[400] text-[#9A103C] sm:w-[200px] w-[150px]">Course Category:</div>
                <div className={inter.className}>
                    <span className="text-[18px] font-[700] sm:w-[clac(100%-200px)] w-[calc(100%-150px)]">Audit & Risk</span> 
                </div>
            </div>
            <div className="three3">
                <div className="text-[17px] font-[400] text-[#9A103C] sm:w-[200px] w-[150px]">Subcategory:</div>
                <div className={inter.className}>
                    <span className="text-[18px] font-[700] sm:w-[clac(100%-200px)] w-[calc(100%-150px)]">Audit & Risk Management</span> 
                </div>
                </div>
            <div className="four4">
                <div className="text-[17px] font-[400] text-[#9A103C] sm:w-[200px] w-[150px]">Course Venue:</div>
                <div className={inter.className}>
                    <span className="text-[18px] font-[700] sm:w-[clac(100%-200px)] w-[calc(100%-150px)]">Amsterdam</span> 
                </div>
                </div>
            <div className="five5">
                <div className="text-[17px] font-[400] text-[#9A103C] sm:w-[200px] w-[150px]">Course Date:</div>
                <div className={inter.className}>
                    <span className="text-[18px] font-[700] sm:w-[clac(100%-200px)] w-[calc(100%-150px)]">09 Sep 2024</span> 
                </div>
                </div>
        </div>
        <div className="lg:w-[200px] lg:h-[100%] h-[86px] w-[100%] ">
            <div className='w-[100%] lg:h-[132px] h-[43px] bg-[#2C3C58] flex lg:flex-col lg:justify-center justify-between lg:px-0 px-2 items-center gap-2'>
                <div className={inter.className}><span className=" font-[400] text-[18px] text-[white]">One Week {" "} € 4299</span></div>
                <div className={inter.className}><span className=" font-[400] text-[18px] text-[white]">Two-Week {" "}  € 6990</span></div>
            </div>
            <div className=' h-[43px] w-[100%] bg-[#FAD421] flex gap-3 justify-center items-center'>
                <div><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_12_135)">
                    <path d="M11.3751 1.79463V0.875C11.3751 0.642936 11.2829 0.420376 11.1188 0.256282C10.9547 0.0921873 10.7322 0 10.5001 0C10.268 0 10.0455 0.0921873 9.88139 0.256282C9.71729 0.420376 9.62511 0.642936 9.62511 0.875V1.79463C7.86353 1.95255 6.17973 2.59368 4.75922 3.64737C3.33871 4.70106 2.23663 6.12641 1.57439 7.76639C0.912158 9.40638 0.715471 11.1973 1.006 12.942C1.29654 14.6866 2.06301 16.3171 3.22098 17.654C2.76368 17.8802 2.38153 18.2338 2.12057 18.6722C1.85961 19.1107 1.73095 19.6152 1.75011 20.125C1.75011 20.3571 1.8423 20.5796 2.00639 20.7437C2.17048 20.9078 2.39304 21 2.62511 21C2.85717 21 3.07973 20.9078 3.24383 20.7437C3.40792 20.5796 3.50011 20.3571 3.50011 20.125C3.49284 19.8553 3.58966 19.5931 3.7705 19.3929C3.95134 19.1927 4.20231 19.0698 4.47136 19.0496C4.53154 19.0382 4.59025 19.02 4.64636 18.9954C6.32245 20.2954 8.38334 21.0009 10.5045 21.0009C12.6256 21.0009 14.6865 20.2954 16.3626 18.9954C16.4138 19.019 16.4671 19.0377 16.5219 19.0514C16.7918 19.0698 17.0443 19.1917 17.2266 19.3918C17.4088 19.5918 17.5068 19.8545 17.5001 20.125C17.5001 20.3571 17.5923 20.5796 17.7564 20.7437C17.9205 20.9078 18.143 21 18.3751 21C18.6072 21 18.8297 20.9078 18.9938 20.7437C19.1579 20.5796 19.2501 20.3571 19.2501 20.125C19.2693 19.6152 19.1406 19.1107 18.8796 18.6722C18.6187 18.2338 18.2365 17.8802 17.7792 17.654C18.9372 16.3171 19.7037 14.6866 19.9942 12.942C20.2847 11.1973 20.0881 9.40638 19.4258 7.76639C18.7636 6.12641 17.6615 4.70106 16.241 3.64737C14.8205 2.59368 13.1367 1.95255 11.3751 1.79463ZM2.62511 11.375C2.62511 9.81747 3.08697 8.29492 3.95229 6.99989C4.8176 5.70485 6.04751 4.69549 7.48648 4.09945C8.92544 3.50341 10.5088 3.34746 12.0364 3.65132C13.564 3.95517 14.9672 4.7052 16.0686 5.80653C17.1699 6.90787 17.9199 8.31106 18.2238 9.83867C18.5277 11.3663 18.3717 12.9497 17.7757 14.3886C17.1796 15.8276 16.1703 17.0575 14.8752 17.9228C13.5802 18.7881 12.0576 19.25 10.5001 19.25C8.41231 19.2475 6.41075 18.417 4.93446 16.9407C3.45816 15.4644 2.62766 13.4628 2.62511 11.375Z" fill="#374957"/>
                    <path d="M16.8129 -0.000125837C16.5808 -0.000125837 16.3582 0.0920614 16.1941 0.256156C16.0301 0.42025 15.9379 0.64281 15.9379 0.874874C15.9379 1.10694 16.0301 1.3295 16.1941 1.49359C16.3582 1.65769 16.5808 1.74987 16.8129 1.74987C17.118 1.72668 17.4246 1.76552 17.7143 1.86405C18.004 1.96257 18.2708 2.11875 18.4985 2.32316C18.7262 2.52757 18.9102 2.77597 19.0393 3.0534C19.1684 3.33083 19.24 3.63153 19.2497 3.93737C19.2497 4.16944 19.3419 4.392 19.506 4.55609C19.6701 4.72019 19.8927 4.81237 20.1247 4.81237C20.3568 4.81237 20.5794 4.72019 20.7435 4.55609C20.9076 4.392 20.9997 4.16944 20.9997 3.93737C20.9885 3.40231 20.8708 2.87485 20.6533 2.38585C20.4358 1.89685 20.1229 1.45614 19.7331 1.0895C19.3432 0.722854 18.8841 0.437642 18.3827 0.250548C17.8813 0.0634531 17.3476 -0.0217667 16.8129 -0.000125837Z" fill="#374957"/>
                    <path d="M1.75 3.93737C1.75975 3.63153 1.83134 3.33083 1.96045 3.0534C2.08956 2.77597 2.27352 2.52757 2.50123 2.32316C2.72894 2.11875 2.99569 1.96257 3.2854 1.86405C3.5751 1.76552 3.88176 1.72668 4.18687 1.74987C4.41894 1.74987 4.6415 1.65769 4.80559 1.49359C4.96969 1.3295 5.06187 1.10694 5.06187 0.874874C5.06187 0.64281 4.96969 0.42025 4.80559 0.256156C4.6415 0.0920614 4.41894 -0.000125837 4.18687 -0.000125837C3.65213 -0.0217667 3.11844 0.0634531 2.61702 0.250548C2.11561 0.437642 1.65654 0.722854 1.26667 1.0895C0.876809 1.45614 0.563978 1.89685 0.346483 2.38585C0.128988 2.87485 0.0111967 3.40231 0 3.93737C0 4.16944 0.0921872 4.392 0.256282 4.55609C0.420376 4.72019 0.642936 4.81237 0.875 4.81237C1.10706 4.81237 1.32962 4.72019 1.49372 4.55609C1.65781 4.392 1.75 4.16944 1.75 3.93737Z" fill="#374957"/>
                    <path d="M11.3751 10.1378V6.125C11.3751 5.89294 11.2829 5.67038 11.1188 5.50628C10.9547 5.34219 10.7322 5.25 10.5001 5.25C10.2681 5.25 10.0455 5.34219 9.8814 5.50628C9.71731 5.67038 9.62512 5.89294 9.62512 6.125V10.5C9.62517 10.732 9.71739 10.9546 9.8815 11.1186L12.5065 13.7436C12.6715 13.903 12.8926 13.9912 13.122 13.9892C13.3514 13.9872 13.5709 13.8952 13.7331 13.733C13.8953 13.5707 13.9873 13.3513 13.9893 13.1219C13.9913 12.8924 13.9031 12.6714 13.7437 12.5064L11.3751 10.1378Z" fill="#374957"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_12_135">
                    <rect width="21" height="21" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
                <div className=' font-[400] text-[17px]'>Apply Now</div>
            </div>
        </div>
    </div>


    <div className=" bg-[#F1F1F1] pt-8 ">
        <div className=" bg-white sm:w-[92%] mx-auto sm:p-8 p-4">
            <div className={inter.className}><span className=' text-[20px] font-[400]'>This course based on supporting the employee in the following competencies, at advanced rates, which are:</span></div>


            <div className=" mt-6 sm:w-[95%] w-[100%] mx-auto p-4">
            {/* Progress Bar 1 */}
            <ProgressBar label="Organization & Planning" progress={progress.orgPlanning} color="bg-[#2663A6]" />

            {/* Progress Bar 2 */}
            <ProgressBar label="Business Process" progress={progress.businessExcellence} color="bg-[#279EBC]" />

            {/* Progress Bar 3 */}
            <ProgressBar label="Audit Planning" progress={progress.auditPlanning} color="bg-[#8E8B56]" />

            {/* Progress Bar 4 */}
            <ProgressBar label="Timeliness" progress={progress.timeliness} color="bg-[#A36357]" />

            {/* Progress Bar 5 */}
            <ProgressBar label="Audit Execution" progress={progress.auditExecution} color="bg-[#F8843B]" />
        </div>
        </div>

        <div className='sm:w-[92%] mx-auto mt-4 flex md:flex-row flex-col w-[100%] justify-between items-start'>
          <div className="md:w-[73%] w-[100%]">
            <div className="w-[100%] bg-white p-4 py-7 flex flex-col gap-5">
              <div className={inter.className}><span className='text-[20px] font-[400]'>This one week training course is designed for Internal Audit Directors and focuses on effective time management techniques to help them effectively balance their workload and prioritize tasks. The course will cover best practices and real-life examples of how to optimize time management and increase productivity.</span></div>
              <div className={inter.className}>
                <span className="text-[#9A103C] text-[20px] font-[700]">Objectives:</span>
                <span className="text-[20px] font-[400]">
                  <p>- Develop an understanding of the principles of effective time management</p>
                  <p>- Learn how to prioritize tasks and delegate effectively</p>
                  <p>- Explore techniques to manage workload and minimize distractions</p>
                  <p>- Identify and overcome personal time management challenges</p>
                  <p>- Develop a personalized time management plan to improve productivity</p>
                </span>
              </div>
              <div className={inter.className}>
                <span className="text-[#9A103C] text-[20px] font-[700]">Outputs:</span>
                <span className="text-[20px] font-[400]">
                  <p>- Improved ability to prioritize tasks and manage workload</p>
                  <p>- Increased productivity and efficiency</p>
                  <p>- A personalized time management plan to implement in their day-to-day work</p>
                  <p>- Better work-life balance</p>
                </span>
              </div>
              <div className={inter.className}>
                <span className="text-[#9A103C] text-[20px] font-[700]">Who Should Attend:</span>
                <span className="text-[20px] font-[400]">
                  <p>This course is designed for Internal Audit Directors who want to improve their time management skills and increase their productivity.</p>
                </span>
              </div>
              <div className={inter.className}>
                <span className="text-[#9A103C] text-[20px] font-[700]">Course Outline:</span>
                <div className=" flex flex-col gap-3">
                <div>
                <span className="text-[20px] font-[700]">Day 1:</span>
                <span className="text-[20px] font-[400]">
                  <p>- Introduction to Effective Time Management</p>
                  <p>- Overview of time management principles and techniques</p>
                  <p>- Understanding the impact of poor time management on work and life</p>
                </span>
                </div>
                <div>
                <span className="text-[20px] font-[700]">Day 2:</span>
                <span className="text-[20px] font-[400]">
                  <p>- Prioritization and Delegation</p>
                  <p>- How to prioritize tasks effectively</p>
                  <p>- Best practices for delegation</p>
                </span>
                </div>
                <div>
                <span className="text-[20px] font-[700]">Day 3:</span>
                <span className="text-[20px] font-[400]">
                  <p>- Managing Workload and Minimizing Distractions</p>
                  <p>- Techniques to manage workload and minimize distractions</p>
                  <p>- Best practices for staying focused and avoiding burnout</p>
                </span>
                </div>
                <div>
                <span className="text-[20px] font-[700]">Day 4:</span>
                <span className="text-[20px] font-[400]">
                  <p>- Overcoming Personal Time Management Challenges</p>
                  <p>- Identifying and overcoming personal time management challenges</p>
                  <p>- Understanding the importance of self-awareness in time management</p>
                </span>
                </div>
                <div>
                <span className="text-[20px] font-[700]">Day 5:</span>
                <span className="text-[20px] font-[400]">
                  <p>- Developing a Personalized Time Management Plan</p>
                  <p>- Developing a personalized time management plan</p>
                  <p>- Implementing the plan and tracking progress</p>
                  <p>- Reviewing and adjusting the plan as needed</p>
                </span>
                </div>
                </div>
              </div>
              <div className={inter.className}><span className='text-[20px] font-[400]'>Throughout the course, participants will have the opportunity to work on practical exercises and case studies to apply the concepts and skills they have learned. The course will also include interactive discussions and opportunities for participants to share their experiences and insights.</span></div>
            </div>


            <div className="w-[100%] mt-4 bg-white flex h-[80px] mb-14">
              <div className="w-[calc(100%-163px)]">
                <div className="w-[100%] h-[40px] bg-[#9A103C] text-white flex justify-start items-center pl-2">Course Options</div>
                <div className={inter.className}>
                <div className="w-[100%] h-[40px] flex justify-start items-center px-2">
                  
                  <div className="w-[50%]">One Week  |  € 4299</div>
                  <div className="w-[50%]">Two-Week  |  € 6990</div>
                  </div>
                </div>
              </div>
              <div className=" w-[163px] h-[100%] bg-[#FAD421] flex gap-3 justify-center items-center">
              <div><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_12_135)">
                    <path d="M11.3751 1.79463V0.875C11.3751 0.642936 11.2829 0.420376 11.1188 0.256282C10.9547 0.0921873 10.7322 0 10.5001 0C10.268 0 10.0455 0.0921873 9.88139 0.256282C9.71729 0.420376 9.62511 0.642936 9.62511 0.875V1.79463C7.86353 1.95255 6.17973 2.59368 4.75922 3.64737C3.33871 4.70106 2.23663 6.12641 1.57439 7.76639C0.912158 9.40638 0.715471 11.1973 1.006 12.942C1.29654 14.6866 2.06301 16.3171 3.22098 17.654C2.76368 17.8802 2.38153 18.2338 2.12057 18.6722C1.85961 19.1107 1.73095 19.6152 1.75011 20.125C1.75011 20.3571 1.8423 20.5796 2.00639 20.7437C2.17048 20.9078 2.39304 21 2.62511 21C2.85717 21 3.07973 20.9078 3.24383 20.7437C3.40792 20.5796 3.50011 20.3571 3.50011 20.125C3.49284 19.8553 3.58966 19.5931 3.7705 19.3929C3.95134 19.1927 4.20231 19.0698 4.47136 19.0496C4.53154 19.0382 4.59025 19.02 4.64636 18.9954C6.32245 20.2954 8.38334 21.0009 10.5045 21.0009C12.6256 21.0009 14.6865 20.2954 16.3626 18.9954C16.4138 19.019 16.4671 19.0377 16.5219 19.0514C16.7918 19.0698 17.0443 19.1917 17.2266 19.3918C17.4088 19.5918 17.5068 19.8545 17.5001 20.125C17.5001 20.3571 17.5923 20.5796 17.7564 20.7437C17.9205 20.9078 18.143 21 18.3751 21C18.6072 21 18.8297 20.9078 18.9938 20.7437C19.1579 20.5796 19.2501 20.3571 19.2501 20.125C19.2693 19.6152 19.1406 19.1107 18.8796 18.6722C18.6187 18.2338 18.2365 17.8802 17.7792 17.654C18.9372 16.3171 19.7037 14.6866 19.9942 12.942C20.2847 11.1973 20.0881 9.40638 19.4258 7.76639C18.7636 6.12641 17.6615 4.70106 16.241 3.64737C14.8205 2.59368 13.1367 1.95255 11.3751 1.79463ZM2.62511 11.375C2.62511 9.81747 3.08697 8.29492 3.95229 6.99989C4.8176 5.70485 6.04751 4.69549 7.48648 4.09945C8.92544 3.50341 10.5088 3.34746 12.0364 3.65132C13.564 3.95517 14.9672 4.7052 16.0686 5.80653C17.1699 6.90787 17.9199 8.31106 18.2238 9.83867C18.5277 11.3663 18.3717 12.9497 17.7757 14.3886C17.1796 15.8276 16.1703 17.0575 14.8752 17.9228C13.5802 18.7881 12.0576 19.25 10.5001 19.25C8.41231 19.2475 6.41075 18.417 4.93446 16.9407C3.45816 15.4644 2.62766 13.4628 2.62511 11.375Z" fill="#374957"/>
                    <path d="M16.8129 -0.000125837C16.5808 -0.000125837 16.3582 0.0920614 16.1941 0.256156C16.0301 0.42025 15.9379 0.64281 15.9379 0.874874C15.9379 1.10694 16.0301 1.3295 16.1941 1.49359C16.3582 1.65769 16.5808 1.74987 16.8129 1.74987C17.118 1.72668 17.4246 1.76552 17.7143 1.86405C18.004 1.96257 18.2708 2.11875 18.4985 2.32316C18.7262 2.52757 18.9102 2.77597 19.0393 3.0534C19.1684 3.33083 19.24 3.63153 19.2497 3.93737C19.2497 4.16944 19.3419 4.392 19.506 4.55609C19.6701 4.72019 19.8927 4.81237 20.1247 4.81237C20.3568 4.81237 20.5794 4.72019 20.7435 4.55609C20.9076 4.392 20.9997 4.16944 20.9997 3.93737C20.9885 3.40231 20.8708 2.87485 20.6533 2.38585C20.4358 1.89685 20.1229 1.45614 19.7331 1.0895C19.3432 0.722854 18.8841 0.437642 18.3827 0.250548C17.8813 0.0634531 17.3476 -0.0217667 16.8129 -0.000125837Z" fill="#374957"/>
                    <path d="M1.75 3.93737C1.75975 3.63153 1.83134 3.33083 1.96045 3.0534C2.08956 2.77597 2.27352 2.52757 2.50123 2.32316C2.72894 2.11875 2.99569 1.96257 3.2854 1.86405C3.5751 1.76552 3.88176 1.72668 4.18687 1.74987C4.41894 1.74987 4.6415 1.65769 4.80559 1.49359C4.96969 1.3295 5.06187 1.10694 5.06187 0.874874C5.06187 0.64281 4.96969 0.42025 4.80559 0.256156C4.6415 0.0920614 4.41894 -0.000125837 4.18687 -0.000125837C3.65213 -0.0217667 3.11844 0.0634531 2.61702 0.250548C2.11561 0.437642 1.65654 0.722854 1.26667 1.0895C0.876809 1.45614 0.563978 1.89685 0.346483 2.38585C0.128988 2.87485 0.0111967 3.40231 0 3.93737C0 4.16944 0.0921872 4.392 0.256282 4.55609C0.420376 4.72019 0.642936 4.81237 0.875 4.81237C1.10706 4.81237 1.32962 4.72019 1.49372 4.55609C1.65781 4.392 1.75 4.16944 1.75 3.93737Z" fill="#374957"/>
                    <path d="M11.3751 10.1378V6.125C11.3751 5.89294 11.2829 5.67038 11.1188 5.50628C10.9547 5.34219 10.7322 5.25 10.5001 5.25C10.2681 5.25 10.0455 5.34219 9.8814 5.50628C9.71731 5.67038 9.62512 5.89294 9.62512 6.125V10.5C9.62517 10.732 9.71739 10.9546 9.8815 11.1186L12.5065 13.7436C12.6715 13.903 12.8926 13.9912 13.122 13.9892C13.3514 13.9872 13.5709 13.8952 13.7331 13.733C13.8953 13.5707 13.9873 13.3513 13.9893 13.1219C13.9913 12.8924 13.9031 12.6714 13.7437 12.5064L11.3751 10.1378Z" fill="#374957"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_12_135">
                    <rect width="21" height="21" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
                <div className=' font-[400] text-[17px]'>Apply Now</div>
              </div>
            </div>

          </div>
          <div className="md:w-[25%] w-[100%] bg-white mb-10">
            <div className="bg-[#9A103C] text-white h-[38px] flex justify-start items-center pl-2 mb-4">Our Locations</div>
            <div className="flex md:flex-col flex-row gap-4 overflow-x-auto md:overflow-hidden">
  <div className="w-[340px] h-[130px]">
    <Image src={london} width={340} height={130} alt="" className="w-[340px] h-[130px] object-cover"/>
  </div>
  <div className="w-[340px] h-[130px]">
    <Image src={riyadh} width={340} height={130} alt="" className="w-[340px] h-[130px] object-cover"/>
  </div>
  <div className="w-[340px] h-[130px]">
    <Image src={paris} width={340} height={130} alt="" className="w-[340px] h-[130px] object-cover"/>
  </div>
  <div className="w-[340px] h-[130px]">
    <Image src={dubai} width={340} height={130} alt="" className="w-[340px] h-[130px] object-cover"/>
  </div>
  <div className="w-[340px] h-[130px]">
    <Image src={amestrdam} width={340} height={130} alt="" className="w-[340px] h-[130px] object-cover"/>
  </div>
  <div className="w-[340px] h-[130px]">
    <Image src={rome} width={340} height={130} alt="" className="w-[340px] h-[130px] object-cover"/>
  </div>
  <div className="w-[340px] h-[130px]">
    <Image src={madrid} width={340} height={130} alt="" className="w-[340px] h-[130px] object-cover"/>
  </div>
  <div className="w-[340px] h-[130px]">
    <Image src={barclone} width={340} height={130} alt="" className="w-[340px] h-[130px] object-cover"/>
  </div>
</div>

          </div>
        </div>
        
    </div>
    </>
  )
}

export default page


function ProgressBar({ label, progress, color }: any) {
    return (
      <div className="w-[100%] mb-4">
        <div className="relative w-full bg-gray-300 rounded-[3px] h-[30px] overflow-hidden">
          {/* Progress bar */}
          <div
            className={`${color} h-full rounded-[3px] transition-all duration-1000 ease-out`}
            style={{ width: `${progress}%` }}
          ></div>
  
          {/* Text inside the bar */}
          <div className="absolute inset-0 flex items-center px-2 text-white font-[400] sm:text-[17px] sm:left-4 text-[13px]">
            <span>{label}</span>
  
            {/* Dynamically position the progress percentage */}
            <span
              className="absolute font-[400] sm:text-[17px] tex-[13px]"
              style={{
                left: `${progress > 95 ? 95 : progress}%`, // Prevent overflow for values near 100%
                transform: 'translateX(-180%)', // Center the percentage label horizontally
              }}
            >
              {progress}%
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  