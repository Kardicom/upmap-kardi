'use client'

import React from 'react';

const CallWidget: React.FC = () => {
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
  return (
    <a
      href="tel:+79935006321"
      className="fixed right-6 bottom-6 md:right-8 md:bottom-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center w-16 h-16 md:w-20 md:h-20 transition-all duration-300 group call-glow"
      title="Позвонить сейчас"
      style={{ 
        boxShadow: '0 0 0 0 rgba(59,130,246,0.0), 0 0 32px 8px rgba(59,130,246,0.18)',
        zIndex: 1001
      }}
    >
      {!isMobile && <span className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-500/30 call-pulse pointer-events-none" style={{zIndex:1}}></span>}
      {!isMobile && <span className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-blue-400/20 call-pulse2 pointer-events-none" style={{zIndex:0}}></span>}
      <svg className="w-8 h-8 md:w-10 md:h-10 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z" />
      </svg>
      <span className="sr-only">Позвонить</span>
    </a>
  );
};

export default CallWidget;
