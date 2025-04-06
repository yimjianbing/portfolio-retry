'use client'

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
export default function Contact() {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contactcontainer",
                start: "top top",
                end: "bottom top",
                scrub: true,
                // markers: true,
                pin: true,
            }
        })
        tl.to(".contactcontainer", {
            translateX: "0%",
            translateY: "0%",
            opacity: 1,
        })
    })

    return (
        <div id="contact" className="contactcontainer h-screen w-screen text-[#000000] font-display flex flex-col justify-center items-center relative">
            <h1 className="text-6xl text-center">Want to know more about me?</h1>
            {/* <p className="text-2xl mt-4">Download my resume here</p> */}
            <a 
                href="/Jian_Bing_Resume_Apr_2025.pdf" 
                download="Jian_Bing_Resume_Apr_2025.pdf"
                className="mt-4 px-6 py-3 bg-[#d30154] text-white rounded-md hover:bg-opacity-80 transition-all duration-300 flex items-center font-semibold"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <h1 className="text-6xl text-center">
                    Download my CV</h1>
            </a>
            <div className="mt-8 flex flex-col items-center">
                <p className="text-6xl mb-4 text-center">Want to get in touch? Send me an email!</p>
                
                <a 
                    href="mailto:yeahitsyjb@gmail.com"
                    className="px-6 py-3 bg-[#d30154] text-white rounded-md hover:bg-opacity-80 transition-all duration-300 flex items-center font-semibold"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h1 className="text-6xl text-center">Email Me</h1>
                </a>
                
            </div>
        </div>
    )
}
//         )}