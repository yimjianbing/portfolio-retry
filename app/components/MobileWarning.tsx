'use client';

import React, { useState, useEffect } from 'react';
import { useDevice } from '../DeviceProvider';

export default function MobileWarning() {
  const { isMobile } = useDevice();
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);
  
  // Only show after a brief delay (allows page to load first)
  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  if (!isMobile || dismissed || !visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] p-4">
      <div className="bg-[#1a1a1a] border border-[#d30154] rounded-lg p-6 max-w-md mx-auto text-center">
        <h2 className="text-2xl font-display text-[#d30154] mb-4">Best Viewed on Desktop</h2>
        
        <p className="mb-4">
          This portfolio features interactive 3D elements and animations that work best on a desktop device.
        </p>
        
        <p className="mb-6">
          For the optimal experience, please view this site on a desktop computer.
        </p>
        
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <button
            onClick={() => setDismissed(true)}
            className="px-5 py-2 bg-[#d30154] text-white rounded-md hover:bg-opacity-80 transition-all"
          >
            Continue Anyway
          </button>
          <a
            href="mailto:?subject=Check%20out%20this%20portfolio&body=I%20found%20this%20awesome%20portfolio:%20https://yimjianbing-yimjianbings-projects.vercel.app/.%20Best%20viewed%20on%20desktop!"
            className="px-5 py-2 bg-gray-700 text-white rounded-md hover:bg-opacity-80 transition-all"
          >
            Email Myself Link
          </a>
        </div>
      </div>
    </div>
  );
}