'use client'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Experience(){

useGSAP(() => {
    gsap.set("li > span", {transformOrigin:"0 50%"})
    gsap.set("li:not(:first-of-type) span", {opacity:0.2, scale:0.8})

    const tl = gsap.timeline()
    .to("li:not(:first-of-type) span", 
        {opacity:1, scale:1, stagger:0.5}
        )
    .to("li:not(:last-of-type) span", 
        {opacity:0.2, scale:0.8 ,stagger:0.5}, 0)


    ScrollTrigger.create({
    trigger:".experiencesleft", 
    start:"center center",
    endTrigger:"li:last-of-type",
    end:"center center",
    pin:true,
    // markers:true, 
    animation:tl,
    scrub:true
    }) 
})


  return (
    <div id="experience" className="experiencecontainer font-display relative pb-[300vh] -pt-[10vh]">
      <div className="experiencetitle font-display relative top-0 left-0 text-8xl md:text-[10vw]"> 
          Experience
      </div>
      <div className="flex pl-5 text-[#d30154] font-extrabold ">
        <div className="experiencesleft uppercase font-extrabold tracking-[0.06em] leading-none text-[clamp(35px,10vw,70px)] self-start">
          I enjoyed competing in hackathons like
        </div>
        <ul className="list-none pl-0 ml-5 text-[#ffffff]">
          {[
            // 'React', 'Next.js', 'GSAP', 'React 3 Fiber', 'Three.js', 'Figma',
            // 'FastAPI', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Firebase',
            // 'Canva', 'Java', 'JavaScript', 'TypeScript', 'Python', 'HTML',
            // 'CSS', 'Tailwind CSS', 'Git', 'GitHub'
            'SDG OpenHacks 2024', 'DSTA Code_EXP 2024 ', 'HackNRoll 2025', 'NTU IdeasJam 2024', 'Hack4Good 2024', 'NES  CatalystX 2024'
          ].map((name, index) => (
            <li
              key={index}
              className="snap-center pl-[0.2em] uppercase font-extrabold tracking-[0.06em] leading-none text-[clamp(35px,10vw,70px)]"
            >
              <span className="inline-block">{name}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

