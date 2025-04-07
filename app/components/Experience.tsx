'use client'
import MobileExperience from './MobileExperience';
import DesktopExperience from './DesktopExperience';
import React from 'react';
import { useDevice } from '../DeviceProvider';
import { useState, useEffect } from 'react';

export default function Experience(){
  const { isMobile } = useDevice()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return <div className="experiences min-h-screen relative"></div>;
  }

  return (
    <div className="experiences-container relative">
      {isMobile ? 
        <div key="mobile-skills"><MobileExperience /></div> : 
        <div key="desktop-skills"><DesktopExperience/></div>
      }
    </div>  
  );
};

