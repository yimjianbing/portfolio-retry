'use client'
import React from 'react';

interface CanvasItemProps {
  imageUrl: string;
  heading: string;
  title1: string;
  title2: string;
  details: string;
  isLeftAligned?: boolean;
}

const CanvasItem: React.FC<CanvasItemProps> = ({
  imageUrl,
  heading,
  title1,
  title2,
  details,
  isLeftAligned = false,
}) => {
  return (
    <>
    <a href="#" className="canvasitem relative block w-[400px] h-[400px] p-5 text-inherit no-underline group">
      <div className="absolute top-10 -left-10 h-full w-full z-0 transition-all duration-250 ease-in-out transform -rotate-10 -skew-x-10 group-hover:rotate-14 group-hover:-skew-x-14 group-hover:scale-96">
        <svg className="h-full w-full">
          <defs>
            <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'rgb(253,137,68)', stopOpacity: 1 }}></stop>
              <stop offset="100%" style={{ stopColor: 'rgb(153,75,23)', stopOpacity: 1 }}></stop>
            </linearGradient>
            <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D34F48"></stop>
              <stop offset="100%" stopColor="#772522"></stop>
            </linearGradient>
          </defs>
          <rect
            className="rect-gradient stroke-[url(#grad-orange)] fill-none stroke-4 [stroke-miterlimit:30] w-full h-full [stroke-dasharray:2000] [stroke-dashoffset:2000] animate-[erase-line_1s_ease-in-out_forwards] group-hover:animate-[draw-line_3s_cubic-bezier(0.19,1,0.22,1)_forwards]"
            width="100%"
            height="100%"
          ></rect>
        </svg>
      </div>
      <div className="absolute flex items-center justify-center w-full h-full top-0 left-0 transform -rotate-10 -skew-x-10 overflow-hidden bg-white transition-all duration-250 ease-in-out group-hover:-rotate-14 group-hover:-skew-x-14 group-hover:scale-96">
        <img
          className="w-full h-full object-cover transform scale-90 opacity-30 transition-all duration-250 ease-in-out group-hover:scale-100 group-hover:opacity-100"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className={`absolute bottom-0 ${isLeftAligned ? '-left-[25%]' : 'left-[85%]'} uppercase text-[#d30154] z-100`}>
        <span className="block absolute left-0 top-2 text-2xl font-black transform rotate-[270deg] -translate-y-full -translate-x-[calc(100%+80px)] origin-top-left opacity-0 transition-all duration-750 delay-350 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:opacity-100 group-hover:-translate-x-full">
          {heading}
        </span>
        <strong className="text-6xl block -translate-x-[80px] transition-all duration-750 delay-100 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] opacity-0 text-[#54b9ca] group-hover:translate-x-0 group-hover:opacity-100">
          {title1}
        </strong>
        <strong className="text-6xl block -translate-x-[80px] transition-all duration-750 delay-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] opacity-0 text-[#54b9ca] group-hover:translate-x-0 group-hover:opacity-100">
          {title2}
        </strong>
        <span className="block -translate-x-[80px] transition-all duration-750 delay-140 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
          {details}
        </span>
      </div>
    </a>
        <style jsx global>{`
          @keyframes draw-line {
            from {
              stroke-dashoffset: 2000;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
          @keyframes erase-line {
            from {
              stroke-dashoffset: 0;
            }
            to {
              stroke-dashoffset: 2000;
            }
          }
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          /* When hovering the card, change the SVG rect animation */
          .group:hover .rect-gradient {
            animation: draw-line 3s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          }
          /* Adjust the subtitle transform on hover */
          .group:hover .canvas-copy-subtitle {
            transform: rotate(270deg) translateY(-100%) translateX(-100%);
          }
        `}</style>
        </>
  );
};

export default CanvasItem;
