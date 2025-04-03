'use client'
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"

import Image from "next/image"

interface CardProps {
  number: string
  author: string
  backgroundImage?: string
  customStyles?: string
}

export default function Card({
  number = "02",
  author = "Omar Faruq Tawsif",
  backgroundImage = "/Yim Jian Bing.png",
}: CardProps) {

    useGSAP(() => {
        gsap.fromTo(
            "cardcontainer",
            { x: "0%" },
            {
              x: "100%",
              ease: "none",
              scrollTrigger: {
                trigger: "cardcontainer",
                start: "top 80%", // When the top of the card hits 80% of the viewport height
                end: "top 30%",   // Animation ends when the top of the card reaches 30%
                scrub: true,      // Links the animation progress to scroll position
              },
            }
          );
    })

  return (
    <div className={`cardcontainer relative overflow-hidden rounded-3xl max-w-sm`}>
      {/* Card Background */}
      <div className="relative w-full aspect-[9/16] bg-gradient-to-br from-rose-300 via-rose-200 to-teal-100">
        {backgroundImage && (
          <Image
            src={backgroundImage || "/placeholder.svg"}
            alt="Tea card background"
            fill
            className="object-cover"
            priority
          />
        )}

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col p-8">
          {/* Title */}
          <div className="flex-1">
            <h1 className="text-white text-7xl sm:text-8xl font-light tracking-tighter">tea</h1>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-end">
            <span className="text-white/90 font-medium">{author}</span>
            <span className="text-white/90 text-3xl font-light">/{number}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

