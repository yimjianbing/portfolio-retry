'use client'
import React from 'react';

interface CanvasItemProps {
  navLink: string;
  imageUrl: string;
  heading: string;
  title1: string;
  title2: string;
  details: string;
  isLeftAligned?: boolean;
  id: number;
}

const CanvasItem: React.FC<CanvasItemProps> = ({
  navLink,
  imageUrl,
  title1,
  title2,
  details,
  isLeftAligned = false,
  id,
}) => {

  const orangeGradientId = `grad-orange-${id}`;
  const redGradientId = `grad-red-${id}`;
  
  return (
    <>
   <a href={navLink} 
      target="_blank"
      rel="noopener noreferrer"
      className="canvasitem relative block w-[640px] h-[360px] p-5 text-inherit no-underline group"
      onMouseEnter={(e) => { e.currentTarget.style.zIndex = '1000'; }}
      onMouseLeave={(e) => { e.currentTarget.style.zIndex = '0'; }}
      >
      <div className="absolute top-10 -left-10 h-full w-full z-0 transition-all duration-250 ease-in-out transform -rotate-10 -skew-x-10 group-hover:rotate-14 group-hover:-skew-x-14 group-hover:scale-96">
        <svg className="h-full w-full">
          <defs>
            <linearGradient id={orangeGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'rgb(253,137,68)', stopOpacity: 1 }}></stop>
              <stop offset="100%" style={{ stopColor: 'rgb(153,75,23)', stopOpacity: 1 }}></stop>
            </linearGradient>
            <linearGradient id={redGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D34F48"></stop>
              <stop offset="100%" stopColor="#772522"></stop>
            </linearGradient>
          </defs>
          <rect
            className="rect-gradient fill-none stroke-4 stroke-[square] [stroke-miterlimit:30] w-full h-full [stroke-dasharray:2000] [stroke-dashoffset:2000] animate-[erase-line_1s_ease-in-out_forwards] group-hover:animate-[draw-line_3s_cubic-bezier(0.19,1,0.22,1)_forwards]"
            width="100%"
            height="100%"
            stroke={`url(#${orangeGradientId})`}
          ></rect>
        </svg>
      </div>
      <div className="relative flex items-center justify-center w-full h-full top-0 left-0 transform -rotate-10 -skew-x-10 overflow-hidden bg-white transition-all duration-250 ease-in-out group-hover:-rotate-14 group-hover:-skew-x-14 group-hover:scale-96">
        <img
          className="transform scale-100 opacity-30 w-fit h-fit transition-all duration-250 ease-in-out group-hover:scale-100 group-hover:opacity-100"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className={`relative bottom-0 ${isLeftAligned ? '-left-[25%]' : 'left-[85%]'} uppercase text-[#000000] z-100`}>
        {/* <span className="text-[#54b9ca] block absolute left-0 top-2 text-2xl font-black transform rotate-[270deg] -translate-y-full -translate-x-[calc(100%+80px)] origin-top-left opacity-0 transition-all duration-750 delay-350 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:opacity-100 group-hover:-translate-x-full">
          {heading}
        </span> */}
        <strong className="font-bold text-6xl block -translate-x-[80px] transition-all duration-750 delay-100 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] opacity-0 text-[#d30154] group-hover:translate-x-0 group-hover:opacity-100">
          {title1}
        </strong>
        <strong className="text-6xl block -translate-x-[80px] transition-all duration-750 delay-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] opacity-0 text-[#ffffff] group-hover:translate-x-0 group-hover:opacity-100">
          {title2}
        </strong>
        <span className="text-[#d30154] font-thin block -translate-x-[80px] transition-all duration-750 delay-140 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
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
      `}</style>
    </>
  );
};

export default CanvasItem;
