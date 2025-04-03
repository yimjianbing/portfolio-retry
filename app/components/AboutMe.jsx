'use client'

import Card from "./Card";
import { useGSAP } from '@gsap/react';
import { gsap }from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

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
        

        gsap.set("[data-text-split]", { opacity: 1})

        document.querySelectorAll("[data-text-split]").forEach((el) => {
            new SplitType(el, {
                types: "words, chars",
                tagName: "span",
            });
        });

        // document.querySelectorAll("[data-word-slide-from-right]").forEach((el) => {
        //     const tl = gsap.timeline({ paused: true });
        //     tl.from(el.querySelectorAll(".word"), {
        //         opacity: 0,
        //         x: '1em',
        //         duration: 0.6,
        //         ease: "power2.out",
        //         stagger: {amount: 0.3},
        //         scrub: true,
        //     });
        //     ScrollTrigger.create(el, tl)

        document.querySelectorAll("[data-word-slide-up]").forEach((el) => {
            const tl = gsap.timeline({ paused: true });
            tl.from(el.querySelectorAll(".word"), {
            opacity: 0,
            yPercent: 100,
            duration: 0.5,
            ease: "back.out(2)",
            stagger: {amount: 1},
            scrub: true,
            });
            ScrollTrigger.create(el, tl)
        })
   

        t1.to(".ProfileCard", {scale: 1});
    })

    return (
        <div id="aboutme" className="AboutMeContainer pt-[30vh] flex flex-row justify-between items-start gap-8 w-[100vw]">
            <div className="AboutMeContent flex-1 ">
                <div data-text-split="true" data-word-slide-from-right="true" className="AboutMeTitle font-display relative top-0 left-0 text-8xl md:text-[10vw]"> 
                    About Me
                </div>
                <div className="AboutMeText relative font-extrabold w-auto">
                    <div className="text-[1vh] md:text-[4vh] text-align-right max-w-[40vw] font-display cursive">
                        <p data-text-split="true" data-word-slide-up="true">
                            I&apos;m <span className="text-[#d30154]">Jian Bing</span>, a full-stack software engineer currently studying Computer Science at the National University of Singapore. 
                        </p>
                        <br />
                        <p data-text-split="true" data-word-slide-up="true">I&apos;m passionate about creating interactive experiences and solving problems through my knowledge of full-stack web-development. </p>
                    </div>
                </div>
            </div>
            
            <div className="ProfileCard  flex-1 justify-items-end items-end">
                <Card number="01" author="Jian Bing" />
            </div>
        </div>
    );
}