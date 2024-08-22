'use client'
import React, { useEffect } from 'react'
import Container from './Container'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Courses = () => {
    const courses = [
        {
            id : "1" , 
            title : "Safety Process in Oil Companies" , 
            image : "/oil.jpeg" 

        } , 
        {
            id : "2" ,
            title : "HR Leadership in Formal Companies" , 
            image : "/hr.jpeg" 

        } , 
        {
            id : "3" ,
            title : "Management of Risk for Managers" , 
            image : "/manage.jpeg" 

        } , 
        {
            id : "4" ,
            title : "Media Management for Artificial" , 
            image : "/mediam.jpeg" 

        } , 
        {
            id : "5" ,
            title : "Crises Management for Oil Companies Crises Management" , 
            image : "/risk.jpeg" 

        } , 
    ]
    useEffect(() => {
        const wrapper : any = document.querySelector(".wrapper");
const carousel : any = document.querySelector(".carousel");
const firstCardWidth : any = carousel.querySelector(".card").offsetWidth;
const arrowBtns : any = document.querySelectorAll(".wrapper i");
const carouselChildrens : any = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX : any, startScrollLeft : any, timeoutId : any;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach((card : any) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card : any) => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn : any) => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e : any) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e : any) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
    } , [])
  return (
    <section className=' px-3 py-[60px]'>
        <Container>
        <div className=' lg:text-[42px] md:text-[38px] sm:text-[34px] text-[30px] text-[#9A103C] lg:pl-[15px]'> Pick up One of The Most Popular Courses</div>
        <div className='wrapper'>
        <i id="left" className="fa-solid fa-angle-left flex justify-center items-center"><AiOutlineArrowLeft/></i>
        <ul className=' carousel mt-6'>
        {courses.map( cat => (
            <li key={cat.id} className=' relative h-[367px]  rounded-[8px] cursor-pointer card'>
                <Image priority fill quality={95} src={cat.image} alt='comp' style={{objectFit: "cover" , overflow : 'hidden' , borderRadius : "8px"}} />
                <div className={cn(' absolute w-[90%] lg:w-[200px] h-[60px] bottom-[30px] lg:left-[10px] left-[5%] p-[10px] text-[16px] rounded-tl-[8px] rounded-tr-[8px] text-white')}>
                    {cat.title}
                </div>
            </li>
        ))}
        </ul>
        <i id="right" className="fa-solid fa-angle-right flex justify-center items-center"><AiOutlineArrowRight/></i>
        </div>
        </Container>
    </section>

  )
}

export default Courses