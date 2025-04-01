'use client'

import { useGSAP } from '@gsap/react';
import { gsap }from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HelloThere() {


    useGSAP(() => {
        // Create timeline inside useGSAP to ensure DOM elements exist
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".HelloThereContainer",
                start: "top top",
                end: "bottom top",
                scrub: true,
                // markers: true,
                pin: true,
            }
        });

        t1.to("#TopHalf", {y: "-100%", duration: 1});
        t1.to("#BottomHalf", {y: "100%", duration: 1}, "<");
        // t1.to("#colorScreen", { scale: 0, transformOrigin: "center", duration: 1 });
    }, []);


    return (
        <div className="relative w-full h-screen rgba(0,0,0,0.5) z-10">
            {/* Split scroll container */}
            <div  className="HelloThereContainer relative inset-0 w-full h-screen overflow-hidden rgba(0,0,0,0.5)">
                {/* Top half */}
                <div id="TopHalf" className="h-1/2 flex items-center justify-center rgba(0,0,0,0.5) bottom-0 left-0 w-full overflow-hidden ">
                    <div className="TopHalf text-[#ffffff] text-8xl md:text-[25vh] font-extrabold tracking-tight relative pt-[50vh]">
                    HELLO THERE
                    </div>
                </div>


                {/* Bottom text (for the split effect) */}
                <div id="BottomHalf" className="h-1/2 flex items-center justify-center rgba(0,0,0,0.5) bottom-0 left-0 w-full  overflow-hidden ">
                    <div className="BottomHalf text-[#ffffff] text-8xl md:text-[25vh] font-extrabold tracking-tight relative pb-[50vh]">
                    HELLO THERE
                    </div>
                </div>
                {/* <div id="colorScreen" className="fixed top-1/2 left-1/2 w-[150vw] h-[150vh] bg-[#d30154] -z-1 rounded-full -translate-x-1/2 -translate-y-1/2 scale-100"></div> */}
            </div>
        </div>
    );
}