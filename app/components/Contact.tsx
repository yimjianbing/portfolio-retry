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
        tl.from(".contactcontainer", {
            opacity: 0,
            scale: 0.8,
            y: 50,
            rotation: -15,
            duration: 0.5,
            ease: "back.out(1.7)"
        })
        .to(".contactcontainer", {
            scale: 1.05,
            duration: 0.2,
            ease: "sine.inOut"
        })
        .to(".contactcontainer", {
            scale: 1,
            duration: 0.2,
            ease: "sine.inOut"
        });
    })

    return (
        <div
          id="contact"
          className="contactcontainer rgba(0,0,0,0.5) h-screen w-screen flex justify-center items-center"
        >
          {/* The “window” container */}
          <div className="
            w-[90%] max-w-[600px]
            border-4 border-black
            bg-white
            shadow-[8px_8px_0_0_rgba(0,0,0,1)]
            text-black
            font-display
            flex flex-col
            relative
          ">
            {/* Title bar */}
            <div className="
              flex items-center
              bg-gray-300
              border-b-4 border-black
              px-3 py-2
            ">
              <span className="text-black font-bold">
                Contact
              </span>
              <div className="ml-auto flex space-x-1">
                <button className="w-4 h-4 bg-red-500 hover:bg-red-400 border border-black"></button>
                <button className="w-4 h-4 bg-yellow-400 hover:bg-yellow-300 border border-black"></button>
                <button className="w-4 h-4 bg-green-500 hover:bg-green-400 border border-black"></button>
              </div>
            </div>
    
            {/* Window content */}
            <div className="p-4 flex flex-col items-center">
              <a
                href="/Jian_Bing_Resume_Apr_2025.pdf"
                download="Jian_Bing_Resume_Apr_2025.pdf"
                className="
                  mt-4
                  px-6 py-3
                  bg-[#d30154]
                  text-white
                  rounded-md
                  hover:bg-opacity-80
                  transition-all
                  duration-300
                  flex items-center
                  font-semibold
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <h1 className="text-2xl sm:text-3xl md:text-4xl">
                  Download my CV
                </h1>
              </a>
    
              <div className="mt-8 flex flex-col items-center">
                <a
                  href="mailto:yeahitsyjb@gmail.com"
                  className="
                    px-6 py-3
                    bg-[#d30154]
                    text-white
                    rounded-md
                    hover:bg-opacity-80
                    transition-all
                    duration-300
                    flex items-center
                    font-semibold
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h1 className="emailme text-2xl sm:text-3xl md:text-4xl">
                    Email Me
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
}
//         )}