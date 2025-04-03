'use client'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Hackathons(){

useGSAP(() => {
    gsap.set("li > span", {transformOrigin:"0 50%"})
    gsap.set("li:not(:first-of-type) span", {opacity:0.2, scale:0.8})

    const tl = gsap.timeline()
    .to("li:not(:first-of-type) span", 
        {opacity:1, scale:1, stagger:0.5}
        )
    .to("li:not(:last-of-type) span", 
        {opacity:0.2, scale:0.8, stagger:0.5}, 0)


    ScrollTrigger.create({
    trigger:".hackathonleft", 
    start:"center center",
    endTrigger:"li:last-of-type",
    end:"center center",
    pin:true,
    markers:true,
    animation:tl,
    scrub:true
    }) 
})


  return (
    <div className="hackathoncontainer font-display relative">
      <div className="flex pl-5 text-[#d30154] font-extrabold ">
        <div className="hackathonleft uppercase font-extrabold tracking-[0.06em] leading-none text-[clamp(30px,8vw,60px)] self-start">
          I have participated in
        </div>
        <ul className="list-none pl-0 ml-5">
          {[
            'Akapowl', 'Jack', 'Cassie', 'Rodrigo', 'Shaun', 'Mitchel',
            'Craig', 'SHRUG', 'Carl', 'Jonathan', 'Sahil', 'Zach',
            'Blake', 'Diaco', 'DIPSCOM'
          ].map((name, index) => (
            <li
              key={index}
              className="snap-center pl-[0.2em] uppercase font-extrabold tracking-[0.06em] leading-none text-[clamp(30px,8vw,60px)]"
            >
              <span className="inline-block">{name}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

