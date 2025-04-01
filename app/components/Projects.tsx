'use client'
import { useGSAP } from '@gsap/react';
import { gsap }from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CanvasItem from "./CanvasItem";
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    
    useGSAP(() => {
        if (containerRef.current) {
            const sections = gsap.utils.toArray(".canvasitem");
            
            const tl = gsap.timeline();

            tl.set(".canvastext", {zIndex: 101})
            tl.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: {
                        snapTo: 1 / (sections.length - 1),
                        inertia: false,
                        duration: {min: 0.1, max: 0.1}
                    },
                    end: "+=3000",
                    
                },
                duration: 5
            });
        }
    }, { scope: containerRef });


    return (
        <div className="h-screen text-align-right relative">
            <div className="ProjectsTitle font-extrabold relative top-0 left-0 text-8xl md:text-[10vw]"> 
                Projects
            </div>
            <div ref={containerRef} className=" canvascontainer flex flex-nowrap items-center h-full [&>.canvas+.canvas]:ml-10 w-fit justify-items-start pl-8 gap-8">
                <CanvasItem imageUrl="/gigspace.png" heading="GigSpace" title1="Frontend" title2="Engineer" details="C2C marketplace for Gig workers" id={1}/>
                <CanvasItem imageUrl="/gamebling.png" heading="GameBling" title1="Orbital" title2="Project" details="Self initiated project for poker beginners" id={2}/>
                <CanvasItem imageUrl="/snaptogether.png" heading="SnapTogether" title1="Start" title2="Up" details="PhotoBooth webapp service with customised frames" id={3}/>
                <CanvasItem imageUrl="/Yim Jian Bing.png" heading="TurtoGatchi" title1="Start" title2="Up" details="Hackathon winning idea turned startup" id={4}/>
                <CanvasItem imageUrl="/gigspace.png" heading="GigSpace" title1="Frontend" title2="Engineer" details="C2C marketplace for Gig workers" id={5}/>

            </div>
         

        </div>
    )
}