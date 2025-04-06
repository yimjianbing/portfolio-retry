'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';

// Define context type
type DeviceContextType = {
  isMobile: boolean;
};

// Create context with default value
const DeviceContext = createContext<DeviceContextType>({ isMobile: false });

// Provider component
export function DeviceProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window !== 'undefined') {
      // Initial check
      handleResize();
      
      // Set up event listener
      window.addEventListener('resize', handleResize);
      
      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
  };
  
  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
}

// Custom hook to use the context
export function useDevice() {
  return useContext(DeviceContext);
}