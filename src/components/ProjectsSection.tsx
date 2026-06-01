import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FolderKanban } from 'lucide-react';

const projectsPath = `${import.meta.env.BASE_URL}#/projects`;

export default function ProjectsSection() {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/5 bg-black px-4 py-24 sm:px-6 sm:py-28 lg:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyberpink/50 to-transparent" />
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyberpink/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-electricblue/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-8 border border-white/10 bg-zinc-950/55 p-6 shadow-[0_32px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10"
      >
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyberpink/25 bg-cyberpink/5 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.3em] text-cyberpink shadow-[0_0_30px_rgba(255,0,255,0.12)]">
            <span className="h-2 w-2 rounded-full bg-cyberpink shadow-[0_0_12px_rgba(255,0,255,0.9)]" />
            Project Archive
          </div>
          <h2 className="text-4xl font-black uppercase tracking-[-0.07em] text-white sm:text-5xl lg:text-6xl lg:leading-[0.95]">
            See our projects.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            View live Web Fixxies demos, brand experiments, and deployed interface builds in one focused page.
          </p>
        </div>

        <a
          href={projectsPath}
          className="group inline-flex w-full items-center justify-between gap-5 border border-electricblue/25 bg-electricblue/10 px-5 py-4 text-left font-mono text-xs uppercase tracking-[0.22em] text-electricblue shadow-[0_0_35px_rgba(0,255,255,0.08)] transition duration-300 hover:border-electricblue/60 hover:bg-electricblue/15 sm:w-auto sm:min-w-[17rem]"
        >
          <span className="inline-flex items-center gap-3">
            <FolderKanban className="h-5 w-5" />
            Open Projects
          </span>
          <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
}
