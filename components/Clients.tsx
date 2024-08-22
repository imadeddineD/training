'use client'
import React, { useEffect } from 'react'
import Container from './Container'
import Image from 'next/image'

const Clients = () => {
  useEffect(() => {
    const scrollers : any = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller : any) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item : any) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
  } , [])
  return (
    <div className=' my-5'>
        <Container>
            <div className=' text-center text-[44px] text-[#9A103C]'>Our Client</div>
            <div className="scroller" data-direction="right" data-speed="slow">
              <div className="scroller__inner">
                <Image src='/infad.png' alt='infad' width={143} height={105} style={{marginLeft : "12px"}} />
                <Image src='/media.png' alt='media' width={138} height={138} />
                <Image src='/soldiers.jpg' alt='soldiers' width={138} height={138} />
                <Image src='/iskan.jpg' alt='iskan' width={158} height={158}/>
                <Image src='/istidamatwo.png' alt='istidama' width={157} height={157}   />
                <Image src='/omanpolice.png' alt='omanpolice' width={219} height={107} style={{marginRight : "12px"}}/>
              </div>     
            </div>
        </Container>
    </div>
  )
}

export default Clients