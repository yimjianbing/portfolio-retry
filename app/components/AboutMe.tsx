'use client'

import Card from "./Card";
import { useGSAP } from '@gsap/react';
import { gsap }from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {

    useGSAP(() => {
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".AboutMeContainer",
                start: "top top",
                end: "bottom top",
                scrub: true,
                // markers: true,
                pin: true,
            }
        });

        t1.to(".ProfileCard", {scale: 1, rotateZ: 720, duration: 1});
    })

    return (
        <div className="AboutMeContainer pt-[30vh] flex flex-row justify-between items-start gap-8">
            <div className="AboutMeContent flex-1">
                <div className="AboutMeTitle font-extrabold relative top-0 left-0 text-8xl md:text-[10vw]"> 
                    About Me
                </div>
                <div className="AboutMeText relative font-extrabold">
                    <div className="text-2xl md:text-3xl text-align-right max-w-[40vw] ">
                        <p>
                            I'm <span className="text-[#d30154]">Jian Bing</span> I'm a full-stack software engineer. I'm currently a student at the the National University of Singapore where I study Computer Science. 
                        </p>
                        <p>I'm passionate about creating interactive experiences and solving problems through code. </p>
                        <p>I have experience with full-stack web development and machine learning. </p>
                        <p>I'm always looking for new opportunities to learn and grow as a developer.</p>
                    </div>
                </div>
            </div>
            
            <div className="ProfileCard scale-0 flex-1">
                <Card number="01" author="Jian Bing" />
            </div>
        </div>
    );
}