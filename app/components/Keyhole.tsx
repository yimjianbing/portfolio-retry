'use client'

import { useGSAP } from '@gsap/react';
import { gsap }from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Keyhole() {


        useGSAP(() => {
            gsap.from(".keyhole", {
                "clip-path": "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)",
                scrollTrigger: {
                    trigger: ".HelloThereContainer",
                    start: "top top", // when the top of the trigger hits the top of the viewport
                      end: "bottom bottom", // bottom of the trigger hits the bottom of the vp
                    scrub: true,
                    markers: false
                }
            });
        }, []);

    return (<span className="Keyhole fixed inset-0 pointer-events-none bg-[#d0ffff] z-1"
        >

    </span>)
}