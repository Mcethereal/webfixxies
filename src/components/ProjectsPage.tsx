import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, ExternalLink, MonitorPlay } from 'lucide-react';

const kfcUrl = 'https://kfc-webfixxies-demo.vercel.app/';
const pizzaHutUrl = 'https://pizzahut-demo-page.vercel.app/';
const homePath = import.meta.env.BASE_URL;

const kfcTags = ['Live Deploy', 'Food Brand', 'Animated UI', 'Responsive'];
const pizzaTags = ['Live Deploy', 'Food Brand', '3D Customizer', 'Responsive'];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-cyberpink/10 blur-[130px]" />
        <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-electricblue/10 blur-[150px]" />
        <div className="absolute left-1/3 bottom-1/4 h-96 w-96 rounded-full bg-[#E51A22]/[0.07] blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[112rem]">
        <a
          href={homePath}
          className="mb-10 inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-mono uppercase tracking-[0.24em] text-zinc-300 transition hover:border-electricblue/40 hover:text-electricblue"
        >
          <ArrowLeft className="h-4 w-4" />
          Home
        </a>

        <motion.header
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mb-10 max-w-5xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyberpink/25 bg-cyberpink/5 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.3em] text-cyberpink shadow-[0_0_30px_rgba(255,0,255,0.12)]">
            <span className="h-2 w-2 rounded-full bg-cyberpink shadow-[0_0_12px_rgba(255,0,255,0.9)]" />
            Projects
          </div>
          <h1 className="max-w-4xl text-4xl font-black uppercase tracking-normal text-white sm:text-6xl lg:text-7xl lg:leading-[0.94]">
            Work that can be opened, tested, and felt.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            A focused archive of Web Fixxies builds. Each project links to a live demo and includes the builder credit, scope, and interaction notes.
          </p>
        </motion.header>

        <div className="flex flex-col gap-6">
        {/* KFC Card */}
        <motion.article
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="group grid overflow-hidden border border-white/10 bg-zinc-950/80 shadow-[0_32px_110px_rgba(0,0,0,0.65)] transition duration-300 hover:border-cyberpink/35 lg:grid-cols-[minmax(0,1.35fr)_minmax(27rem,0.65fr)]"
        >
          <div className="relative min-h-[25rem] overflow-hidden bg-[#090909] sm:min-h-[34rem] lg:min-h-[42rem]">
            <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-black/75 px-4 py-3 backdrop-blur-md sm:px-5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E4002B] shadow-[0_0_12px_rgba(228,0,43,0.75)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFCC52] shadow-[0_0_12px_rgba(255,204,82,0.45)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-electricblue shadow-[0_0_12px_rgba(0,255,255,0.55)]" />
              </div>
              <span className="inline-flex items-center gap-2 border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-white">
                <MonitorPlay className="h-3.5 w-3.5 text-[#E4002B]" />
                Live Demo
              </span>
            </div>

            <div className="absolute inset-x-4 bottom-5 top-16 overflow-hidden border border-white/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:inset-x-6 sm:bottom-7">
              <iframe
                title="KFC Bangladesh website preview"
                src={kfcUrl}
                loading="lazy"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[1440px] origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.255] border-0 opacity-95 transition duration-700 ease-out group-hover:scale-[0.265] min-[520px]:scale-[0.34] min-[520px]:group-hover:scale-[0.35] sm:scale-[0.45] sm:group-hover:scale-[0.465] xl:scale-[0.58] xl:group-hover:scale-[0.595]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.04)_55%,rgba(0,0,0,0.26))]" />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black via-black/70 to-transparent" />
            <div className="pointer-events-none absolute bottom-5 left-6 right-6 hidden items-center justify-between border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl sm:flex">
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-400">Preview viewport</span>
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#ff3655]">1440 x 900</span>
            </div>
          </div>

          <div className="relative flex flex-col border-t border-white/10 bg-black/78 p-6 backdrop-blur-xl sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.24, duration: 0.6, ease: 'easeOut' }}
              className="flex flex-1 flex-col"
            >
              <div className="mb-8 flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-400">
                <span className="border border-white/10 bg-white/[0.03] px-3 py-2">KFC Bangladesh</span>
                <span className="border border-[#E4002B]/30 bg-[#E4002B]/10 px-3 py-2 text-[#ff3655]">Brand Demo</span>
              </div>

              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ff3655]">
                Vex / Ibrahim
              </p>
              <h2 className="mt-4 max-w-lg text-4xl font-black uppercase leading-[0.95] tracking-normal text-white sm:text-5xl">
                Interactive Brand Site
              </h2>
              <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-zinc-300 sm:text-base">
                Cinematic landing page, animated menu flow, location browsing, and brand-history storytelling for a Bangladesh-focused KFC concept demo.
              </p>

              <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <div className="mt-8 grid grid-cols-2 gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                {kfcTags.map((item) => (
                  <span key={item} className="border border-white/10 bg-white/[0.03] px-3 py-2">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <a
                  href={kfcUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex w-full items-center justify-between gap-4 bg-[#E4002B] px-5 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(228,0,43,0.35)] transition duration-300 hover:bg-[#ff0736] sm:w-auto sm:min-w-[15rem]"
                >
                  Open Demo
                  <ArrowUpRight className="h-5 w-5 transition duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>

                <a
                  href={kfcUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex max-w-full items-center justify-between gap-3 border border-white/10 bg-white/[0.03] px-4 py-3 text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-500 transition hover:border-white/20 hover:text-zinc-300"
                >
                  <span className="truncate">kfc-webfixxies-demo.vercel.app</span>
                  <ExternalLink className="h-3.5 w-3.5 flex-none" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.article>

        {/* Pizza Hut Card */}
        <motion.article
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.22, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="group grid overflow-hidden border border-white/10 bg-zinc-950/80 shadow-[0_32px_110px_rgba(0,0,0,0.65)] transition duration-300 hover:border-[#E51A22]/35 lg:grid-cols-[minmax(0,1.35fr)_minmax(27rem,0.65fr)]"
        >
          <div className="relative min-h-[25rem] overflow-hidden bg-[#090909] sm:min-h-[34rem] lg:min-h-[42rem]">
            <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-black/75 px-4 py-3 backdrop-blur-md sm:px-5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E51A22] shadow-[0_0_12px_rgba(229,26,34,0.75)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFCC52] shadow-[0_0_12px_rgba(255,204,82,0.45)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-electricblue shadow-[0_0_12px_rgba(0,255,255,0.55)]" />
              </div>
              <span className="inline-flex items-center gap-2 border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-white">
                <MonitorPlay className="h-3.5 w-3.5 text-[#E51A22]" />
                Live Demo
              </span>
            </div>

            <div className="absolute inset-x-4 bottom-5 top-16 overflow-hidden border border-white/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:inset-x-6 sm:bottom-7">
              <iframe
                title="Pizza Hut Bangladesh 3D Customizer preview"
                src={pizzaHutUrl}
                loading="lazy"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[1440px] origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.255] border-0 opacity-95 transition duration-700 ease-out group-hover:scale-[0.265] min-[520px]:scale-[0.34] min-[520px]:group-hover:scale-[0.35] sm:scale-[0.45] sm:group-hover:scale-[0.465] xl:scale-[0.58] xl:group-hover:scale-[0.595]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.04)_55%,rgba(0,0,0,0.26))]" />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black via-black/70 to-transparent" />
            <div className="pointer-events-none absolute bottom-5 left-6 right-6 hidden items-center justify-between border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl sm:flex">
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-400">Preview viewport</span>
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#E51A22]">1440 x 900</span>
            </div>
          </div>

          <div className="relative flex flex-col border-t border-white/10 bg-black/78 p-6 backdrop-blur-xl sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.36, duration: 0.6, ease: 'easeOut' }}
              className="flex flex-1 flex-col"
            >
              <div className="mb-8 flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-400">
                <span className="border border-white/10 bg-white/[0.03] px-3 py-2">Pizza Hut Bangladesh</span>
                <span className="border border-[#E51A22]/30 bg-[#E51A22]/10 px-3 py-2 text-[#E51A22]">Brand Demo</span>
              </div>

              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E51A22]">
                Arsenic / Ahnaf Tahmid
              </p>
              <h2 className="mt-4 max-w-lg text-4xl font-black uppercase leading-[0.95] tracking-normal text-white sm:text-5xl">
                3D Pizza Customizer
              </h2>
              <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-zinc-300 sm:text-base">
                Interactive 3D pizza building experience for Pizza Hut Bangladesh, featuring mobile-responsive menus, dynamic sound effects, and real-time topping rendering.
              </p>

              <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <div className="mt-8 grid grid-cols-2 gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                {pizzaTags.map((item) => (
                  <span key={item} className="border border-white/10 bg-white/[0.03] px-3 py-2">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <a
                  href={pizzaHutUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex w-full items-center justify-between gap-4 bg-[#E51A22] px-5 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(229,26,34,0.35)] transition duration-300 hover:bg-[#ff2030] sm:w-auto sm:min-w-[15rem]"
                >
                  Open Demo
                  <ArrowUpRight className="h-5 w-5 transition duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>

                <a
                  href={pizzaHutUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex max-w-full items-center justify-between gap-3 border border-white/10 bg-white/[0.03] px-4 py-3 text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-500 transition hover:border-white/20 hover:text-zinc-300"
                >
                  <span className="truncate">pizzahut-demo-page.vercel.app</span>
                  <ExternalLink className="h-3.5 w-3.5 flex-none" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.article>
        </div>
      </div>
    </main>
  );
}
