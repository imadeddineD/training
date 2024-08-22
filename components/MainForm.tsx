'use client'
import React, { useState } from 'react'

const MainForm = () => {
    const [selectedWeek, setSelectedWeek] = useState('one');
    function handleSubmit(event : any) {
        event.preventDefault(); // Prevent default form submission
      
        const formData = new FormData(event.target); // Get form data
      
        // Convert FormData to object
        const formObject : any = {};
        formData.forEach((value, key) => {
          formObject[key] = value;
        });
      
        console.log(formObject); 
      }

      const handleWeekChange = (event : any) => {
        setSelectedWeek(event.target.value);
    };
  return (
    <form onSubmit={handleSubmit} className=' '>
        <div className='flex gap-9 mainradio mb-6 px-3' >
        <input
                    type="radio"
                    name="week"
                    id="one week"
                    value="one"
                    checked={selectedWeek === 'one'}
                    onChange={handleWeekChange}
                />
        <label htmlFor="one week" className=' md:text-[20px]'>One Week</label>

        <input
                    type="radio"
                    name="week"
                    id="two week"
                    value="two"
                    checked={selectedWeek === 'two'}
                    onChange={handleWeekChange}
                />
            <label htmlFor="two week" className=' md:text-[20px]'>Two Weeks</label>

        </div>
        <div className='mainselect gap-x-11 gap-y-6 p-3 text-[#8E8988] relative '>
            <select className='main border-b-[1px] border-[#000000]' name="mainCat" id="" >
                <option value="cat">Main Categories</option>
                <option value="cat1">Categories 1</option>
                <option value="cat2">Categories 2</option>
                <option value="cat3">Categories 3</option>
                <option value="cat4">Categories 4</option>
            </select>
            <select className='sub border-b-[1px] border-[#000000]' name="subCat" id="">
                <option value="sub">Sub Category</option>
                <option value="sub 1">Sub 1</option>
                <option value="sub 2">Sub 2</option>
                <option value="sub 3">Sub 3</option>
                <option value="sub 4">Sub 4</option>
            </select>
            <select className='comone border-b-[1px] border-[#000000]' name="mainCom" id="">
                <option value="Com 1">Competency 1</option>
                <option value="com11">Com11</option>
                <option value="com12">Com12</option>
                <option value="com13">Com13</option>
                <option value="com14">Com14</option>
            </select>
            <select className='comtwo border-b-[1px] border-[#000000]' name="subCom" id="">
                <option value="Com 2">Competency 2</option>
                <option value="com21">Com21</option>
                <option value="com22">Com22</option>
                <option value="com23">Com23</option>
                <option value="com24">Com24</option>
            </select>
            <select className='city border-b-[1px] border-[#000000]' name="city" id="">
                <option value="City">City</option>
                <option value="city1">City1</option>
                <option value="city2">City2</option>
                <option value="city3">City3</option>
                <option value="city4">City4</option>
            </select>
            <input className='date border-b-[1px] border-[#000000]' type='date' placeholder='date' name='date'/>
            <button className='go lg:w-[80px] lg:h-[107px] md:h-[80px] lg:text-[36px] md:text-[30px] md:w-[60px]  lg:mr-[-44px] lg:rounded-lg md:rounded-md h-[30px] sm:text-[22px] text-[20px] ' type='submit'>Go</button>
            
        </div>
    </form>
  )
}

export default MainForm 