import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'VEX',
    realName: 'Ibrahim',
    role: 'Design Principal & UI/UX Architect',
    copy: 'The architectural core of Web Fixxies. Vex drives the macro UI/UX vision, engineering layouts that forcefully capture enterprise retention. Master of structural typography, component scaling, and high-fidelity wireframing.',
    img: 'vexpfp.png',
    hoverGlowClass: 'hover:border-cyberpink hover:shadow-[0_0_50px_rgba(255,0,128,0.15)] hover:bg-zinc-950/50',
    accentColor: 'text-rose-500',
    glowRing: 'shadow-[0_0_20px_rgba(244,63,94,0.4)] border-rose-500/50'
  },
  {
    name: 'RAIN',
    realName: 'Ibrahim',
    role: 'Technical Director & Spatial Engineer',
    copy: 'The hardware executor. Rain bridges visionary design with raw browser performance, building out structural React components, framer-motion physics, and three-dimensional spatial environments optimized for high-refresh rates.',
    img: 'rainpfp.jpg',
    hoverGlowClass: 'hover:border-blue-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] hover:bg-blue-950/10',
    accentColor: 'text-blue-500',
    glowRing: 'shadow-[0_0_20px_rgba(59,130,246,0.4)] border-blue-500/50'
  },
  {
    name: 'ARSENIC',
    realName: 'Ahnaf',
    role: 'Growth Strategist & Client Relations',
    copy: 'The strategic conduit. Arsenic aligns advanced engineering capabilities with enterprise business growth. Fluent in international project deployment, cross-border client operations, and ensuring strict adherence to compliance standards.',
    img: './alexispfp.webp',
    hoverGlowClass: 'hover:border-indigo-400 hover:shadow-[0_0_50px_rgba(129,140,248,0.15)] hover:bg-indigo-950/10',
    accentColor: 'text-indigo-400',
    glowRing: 'shadow-[0_0_20px_rgba(129,140,248,0.4)] border-indigo-400/50'
  }
];

export default function AboutSection() {
  return (
    <section className="relative w-full py-32 px-6 overflow-hidden flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-5xl mx-auto flex flex-col items-center mb-16 sm:mb-24 z-10"
      >
          <div className="text-center bg-zinc-950/40 p-6 md:p-12 border border-zinc-800/60 rounded-3xl backdrop-blur-xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight uppercase drop-shadow-md">
            THE MATRIX
          </h2>
          <p className="text-sm md:text-base text-zinc-300 font-light leading-relaxed max-w-3xl mx-auto">
            A generationally native digital collective operating across Bangladesh and Pakistan. We converge advanced artificial intelligence pipelines with fluid spatial web engineering to construct high-retention interactive architectures for forward-thinking enterprises—delivered with absolute integrity and secured by established parent-fiduciary legal compliance.
          </p>
        </div>
      </motion.div>
      
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 md:gap-16 z-10">
        {team.map((member, index) => (
          <div key={member.name} className={`w-full md:w-[85%] lg:md:w-[65%] ${index % 2 === 0 ? 'md:self-end' : 'md:self-start'}`}>
            <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={2000} scale={1.01} transitionSpeed={2500} className="h-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 50, damping: 25, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`group relative rounded-2xl border border-zinc-800/60 bg-zinc-950/40 backdrop-blur-xl p-8 transition-all duration-500 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 ${member.hoverGlowClass}`}
              >
                
                <div className={`w-28 h-28 md:w-36 md:h-36 rounded-2xl border-2 overflow-hidden bg-black flex-shrink-0 relative z-10 group-hover:scale-105 transition-transform duration-700 ${member.glowRing}`}>
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
                
                <div className="flex-1 relative z-10 flex flex-col justify-center h-full">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-widest flex items-end justify-center md:justify-start gap-3">
                      {member.name}
                      <span className="text-zinc-500 text-sm font-mono tracking-normal mb-1">{member.realName}</span>
                    </h3>
                    <h4 className={`text-xs md:text-sm ${member.accentColor} mb-4 font-mono uppercase tracking-[0.1em] font-bold`}>{member.role}</h4>
                  </div>
                  
                  <div className="w-full h-px bg-white/10 my-1 group-hover:bg-white/20 transition-colors" />
                  
                  <div className="mt-4">
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                      {member.copy}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
}
