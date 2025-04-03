'use client'
import React, { useEffect, useState } from 'react';

const ScrollDownArrow = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY <= 10); // re-show if scrolled back to top
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 text-center transition-opacity duration-500 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <p className="text-gray-600 text-lg mb-2 font-semibold">Scroll Down</p>
      <div className="animate-bounce-slow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-700 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(8px);
              opacity: 0.4;
            }
          }
          .animate-bounce-slow {
            animation: bounce-slow 1.2s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default ScrollDownArrow;
