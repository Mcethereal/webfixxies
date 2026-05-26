import React, { useEffect, useState } from 'react';
import ThreeHero from './components/ThreeHero';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import MissionSection from './components/MissionSection';
import ContactSection from './components/ContactSection';

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full bg-black min-h-screen overflow-x-hidden selection:bg-electricblue selection:text-black font-sans vector-grid">
      
      {/* Global Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] blur-[150px]" />
      </div>

      {/* Cyber HUD Elements */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden mix-blend-screen text-zinc-600 font-mono text-[10px]">
        <div className="absolute top-4 left-4 drop-shadow">+ SYS.OK</div>
        <div className="absolute top-4 right-4 drop-shadow">+ LATENCY: 2ms</div>
        <div className="absolute bottom-4 left-4 flex flex-col drop-shadow">
          <span>+ MATRIX.ACTIVE</span>
          <span>[COORD: {coords.x}, {coords.y}]</span>
        </div>
        <div className="absolute bottom-4 right-4 drop-shadow">+ W.F. PROTOCOL</div>
      </div>

      <div className="relative w-full flex flex-col z-10">
        <ThreeHero />
        <MissionSection />
        <AboutSection />
        <PricingSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
