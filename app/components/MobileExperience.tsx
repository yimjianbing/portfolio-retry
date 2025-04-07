'use client';

import React from 'react';

export default function MobileExperience() {
  const hackathons = [
    'SDG OpenHacks 2024', 
    'DSTA Code_EXP 2024', 
    'HackNRoll 2025', 
    'NTU IdeasJam 2024', 
    'Hack4Good 2024', 
    'NES CatalystX 2024'
  ];


  return (
    <div id="experience" className="mobile-experience-container font-display min-h-screen py-16 px-4 pt-[100vh]">
      <h2 className="mobile-experience-title text-6xl font-bold mb-8 text-[#d30154]">
        Experience
      </h2>
      
      <div className="mb-8 text-[#d30154]">
        <p className="text-3xl font-extrabold uppercase tracking-wider leading-tight">
          I enjoyed competing in hackathons like
        </p>
      </div>

      <ul className="mobile-hackathon-list list-none pl-0 space-y-4">
        {hackathons.map((name, index) => (
          <li
            key={index}
            className="mobile-hackathon-item bg-black bg-opacity-30 p-4 rounded-md border border-[#d30154] border-opacity-20"
          >
            <span className="text-2xl font-bold text-white block">{name}</span>
          </li>
        ))}
      </ul>
      
    </div>
  );
}