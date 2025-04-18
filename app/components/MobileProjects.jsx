'use client'
import { useGSAP } from '@gsap/react';
import { gsap }from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CanvasItem from "./CanvasItem";
import { useRef } from 'react';
import { useDevice } from '../DeviceProvider';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Projects() {


    return (
        <div id="projects" className="projectscontainer h-screen text-align-right ">
            <div className="abc font-display top-0 left-0 text-8xl md:text-[10vw] z-10 pt-16 bg-inherit"> 
                Projects
            </div>
            <div className="canvascontainer flex flex-col items-center h-auto  w-[100vw] justify-items-center gap-20 pt-8 ">
                <CanvasItem navLink="https://gigspace.sg" imageUrl="/gigspace.png" heading="GigSpace" title1="GigSpace" title2="" details="C2C marketplace for Gig workers" id={1} />
                <CanvasItem navlink="https://gamebling-orbital-24.vercel.app/" imageUrl="/gamebling.png" heading="GameBling" title1="GameBling" title2="" details="Self initiated project for poker beginners" id={2}/>
                <CanvasItem navLink="https://snaptogether-three.vercel.app/" imageUrl="/snaptogether.png" heading="SnapTogether" title1="SnapTogether" title2="" details="PhotoBooth webapp service with customised frames" id={3}/>
                <CanvasItem navLink="https://www.linkedin.com/posts/shaun-lee231_i-am-thrilled-to-announce-that-my-team-consisting-activity-7217549823938375680-xQtB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFLsrwBVynTQtx_tQGTAf4QKnc27Bi3PaU" imageUrl="/turtogatchi.svg" heading="TurtoGotchi" title1="Turtogotchi" title2="" details="Hackathon winning idea turned startup" id={4}/>
                <CanvasItem imageUrl="/vvrs.png" heading="Voiced Video" title1="Voice Video" title2="Recording System" details="Streamline and automate work processes in CPF" id={5}/>

            </div>

        </div>
    )
}