import React, { useState } from 'react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: "Core 3D Web Framework",
    desc: "High-performance, interactive single-page web experiences tailored for businesses looking to establish a distinct digital presence and increase user retention.",
    price: "Custom Scope",
    color: "from-rose-500 to-cyberpink",
    lines: [
      "Custom 3D Art Direction & Scene Configuration",
      "High-Performance Interface Animations (Framer Motion)",
      "Optimized Tailwind CSS Architecture for Faster Load Times",
      "Single-Page Structure Built for User Conversion"
    ]
  },
  {
    name: "Enterprise Experiential Platform",
    desc: "Full-scale web platforms featuring immersive product simulations, custom interactive environments, and complex UI/UX structures built for global scalability.",
    price: "Enterprise",
    color: "from-blue-500 to-indigo-500",
    badge: "INTERNATIONAL OUTREACH READY",
    lines: [
      "Production-Ready 3D Asset Integration (Optimized GLTF / GLB formats)",
      "Real-Time Interactive Cursor & Mouse Tracking Physics",
      "Multi-Page Architecture with Advanced User-Flow Logic",
      "Fully Secure Project Delivery under Parent-Authorized Fiduciary Compliance"
    ]
  }
];

export default function PricingSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative w-full py-32 px-6 flex flex-col items-center z-10 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto flex flex-col h-full px-2 sm:px-0"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-24 text-center tracking-tight uppercase drop-shadow-lg">
          THE PRICING CONTINUUM
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative items-stretch h-full max-w-5xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              onHoverStart={() => setHovered(idx)}
              onHoverEnd={() => setHovered(null)}
              animate={{
                opacity: hovered !== null && hovered !== idx ? 0.3 : 1,
                scale: hovered === idx ? 1.02 : 1,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`relative rounded-xl border border-zinc-800/80 bg-zinc-900/10 backdrop-blur-md p-8 overflow-hidden group cursor-pointer flex flex-col transition-all duration-500 h-full ${hovered === idx ? 'border-white/40 shadow-2xl' : ''}`}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${tier.color} opacity-5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:opacity-20 transition-opacity duration-700`} />

              {tier.badge && (
                <div className="mb-6 relative z-20 self-start">
                  <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-400 text-indigo-300 text-[10px] uppercase font-mono tracking-widest rounded-full animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                    {tier.badge}
                  </span>
                </div>
              )}

              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 pr-4 relative z-10">{tier.name}</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 flex-none relative z-10">{tier.desc}</p>
              
              <div className="w-full bg-zinc-800/50 h-[1px] mb-8 relative z-10" />

              <ul className="flex-1 flex flex-col gap-6 relative z-10">
                {tier.lines.map((line, i) => (
                  <React.Fragment key={i}>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 bg-electricblue rounded-full shadow-[0_0_5px_rgba(0,255,255,1)]" />
                      <span className="text-zinc-400 text-sm font-medium leading-relaxed">{line}</span>
                    </li>
                  </React.Fragment>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-zinc-800/50 flex items-end gap-2 relative z-10 shrink-0">
                <span className="text-2xl md:text-3xl font-bold text-white tracking-widest drop-shadow-md uppercase">{tier.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
