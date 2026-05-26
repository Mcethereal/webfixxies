import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="relative w-full py-32 px-6 bg-zinc-950 flex flex-col items-center overflow-hidden z-10">
      
      {/* Sleek Animated Tab */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto rounded-3xl backdrop-blur-2xl bg-zinc-900/30 border border-white/10 p-1 md:p-2 shadow-2xl relative group mb-12"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-electricblue/20 to-cyberpink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none" />
        
        <div className="w-full rounded-2xl bg-black border border-white/5 p-12 md:p-20 flex flex-col items-center justify-center text-center relative overflow-hidden z-10">
          
          <motion.div
            animate={{ 
              rotate: [0, 3, -3, 0],
              scale: [1, 1.02, 1] 
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -top-32 -left-32 w-64 h-64 bg-electricblue/10 blur-[100px] rounded-full pointer-events-none"
          />
          <motion.div
            animate={{ 
              rotate: [0, -3, 3, 0],
              scale: [1, 1.05, 1] 
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute -bottom-32 -right-32 w-64 h-64 bg-cyberpink/10 blur-[100px] rounded-full pointer-events-none"
          />
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-lg relative z-10">
            Strategic Investment & Project Consultation
          </h2>
          
          <p className="text-zinc-300 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-12 relative z-10">
            Every engagement is custom-priced based on the technical scope and creative complexity of your project. By utilizing a highly optimized, decentralized development model, we deliver top-tier interactive experiences with exceptional capital efficiency. Let's discuss your project goals.
          </p>

          <a 
            href="mailto:webfixxies@gmail.com"
            className="relative px-10 py-5 rounded-full bg-white/5 border border-white/20 hover:border-white/50 overflow-hidden group/btn flex items-center justify-center gap-4 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-electricblue/30 to-cyberpink/30 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 text-white font-mono uppercase tracking-[0.2em] font-bold text-sm md:text-base cursor-pointer">
              webfixxies@gmail.com
            </span>
            <svg className="w-5 h-5 text-white relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Compliance / Footnote Layer */}
      <div className="w-full max-w-4xl mx-auto pt-10 border-t border-white/5">
        <p className="text-zinc-700 text-xs tracking-wide uppercase font-mono text-justify leading-relaxed">
          Web Fixxies operates on international good-faith principles. All transactional invoicing, payment transfers, and operational agreements are legally managed, reviewed, and authorized via parent-fiduciary compliance to ensure total platform security and legal adherence.
        </p>
      </div>
    </section>
  );
}
