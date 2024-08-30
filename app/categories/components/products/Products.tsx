import React from 'react'
import image from '../../../../public/course.jpeg'
import Image from 'next/image'
import { Divide } from 'lucide-react'

const Products = ({result} : any) => {
    // console.log("this is the search state")
    // console.log(search)
    // const data : any = [
    //     {
    //       id : "1",
    //       img: image,
    //       title: "The arts of influential writing for public and media relations",
    //       duration : "1 week",
    //       subject: "Business",
    //       category: "Media",
    //       location: "Casablanca",
    //       price: 1999.99,
    //     },
    //     {
    //       id : "2",
    //       img: image,
    //       title: "Arts of influential writing for public and media relations",
    //       duration : "2 week",
    //       subject: "IT & Data",
    //       category: "Media",
    //       location: "London",
    //       price: 1999.9,
    //     },
    //     {
    //       id : "3",
    //       img: image,
    //       title: "Influential writing for public and media relations",
    //       duration : "1 week",
    //       subject: "Procurement & Sales",
    //       category: "UX Design",
    //       location: "Paris",
    //       price: 1999.99,
    //     },
    //     {
    //       id : "4",
    //       img: image,
    //       title: "Writing the arts of influential for public and media relations",
    //       duration : "1 week",
    //       subject: "Business",
    //       category: "Media",
    //       location: "Rome",
    //       price: 1999.99,
    //     },
    //     {
    //       id : "5",
    //       img: image,
    //       title: "Public and media relations",
    //       duration : "2 week",
    //       subject: "Risk & Audit",
    //       category: "UX Design",
    //       location: "Casablanca",
    //       price: 1999.99,
    //     },
    //     {
    //       id : "6",
    //       img: image,
    //       title: "The arts of influential writing for public and media relations",
    //       duration : "1 week",
    //       subject: "Business",
    //       category: "Front End",
    //       location: "Amesterdam",
    //       price: 1999.99,
    //     },
    //     {
    //       id : "7",
    //       img: image,
    //       title: "The arts of influential writing for public and media relations",
    //       duration : "1 week",
    //       subject: "Business",
    //       category: "Media",
    //       location: "Casablanca",
    //       price: 1999.99,
    //     },
    //     {
    //       id : "8",
    //       img: image,
    //       title: "Arts of influential writing for public and media relations",
    //       duration : "2 week",
    //       subject: "IT & Data",
    //       category: "Media",
    //       location: "London",
    //       price: 1999.9,
    //     },
    //     {
    //       id : "9",
    //       img: image,
    //       title: "Influential writing for public and media relations",
    //       duration : "1 week",
    //       subject: "Procurement & Sales",
    //       category: "UX Design",
    //       location: "Paris",
    //       price: 1999.99,
    //     },
    //     {
    //       id : "10",
    //       img: image,
    //       title: "Writing the arts of influential for public and media relations",
    //       duration : "1 week",
    //       subject: "Business",
    //       category: "Media",
    //       location: "Rome",
    //       price: 1999.99,
    //     },
    //     {
    //       id : "11",
    //       img: image,
    //       title: "Public and media relations",
    //       duration : "2 week",
    //       subject: "Risk & Audit",
    //       category: "UX Design",
    //       location: "Casablanca",
    //       price: 1999.99,
    //     },
    //     {
    //       id : "12",
    //       img: image,
    //       title: "The arts of influential writing for public and media relations",
    //       duration : "1 week",
    //       subject: "Business",
    //       category: "Front End",
    //       location: "Amesterdam",
    //       price: 1999.99,
    //     },
        
    //   ];
    //   const filteredData = data.filter((item:any) => 
    //     search.toLowerCase() === "" 
    //         ? item 
    //         : item.title.toLowerCase().includes(search)
    // );
  return (
    <div className=' md:ml-[233px] sm:ml-[215px] py-[25px] flex flex-col gap-[15px] justify-center items-center'>
        {
        result.length === 0 ? 
        <div className=' h-[170vh] flex justify-center pt-[140px] text-[22px] font-semibold'>Not Found</div> : 
        <>{result}</>
        }
    </div>
  )
}

export default Products