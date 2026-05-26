import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

const cards = [
  {
    title: 'Broken navigation is the baseline problem.',
    body:
      'We are generationally native digital builders who understand that modern web journeys are failing. In an era shaped by LLMs and instant answers, legacy websites act like data graveyards: stale, buried, and frustratingly hard to traverse when users try to follow precise instructions.',
    accent: 'from-electricblue/20 to-cyan-400/10',
    glow: 'bg-electricblue/10',
  },
  {
    title: 'Generic templates are killing distinction.',
    body:
      'Most websites still look interchangeable, leaning on safe layouts that say nothing memorable about the brand behind them. We build spatial, high-end interfaces that feel intentional, premium, and unmistakably custom.',
    accent: 'from-white/10 to-zinc-400/10',
    glow: 'bg-white/5',
  },
  {
    title: 'Design quality should not be gatekept.',
    body:
      'Coming from a region where advanced graphic design is often trapped behind massive agency premiums, we see too many local businesses neglect their digital storefronts entirely. That gap should not exist.',
    accent: 'from-cyberpink/20 to-fuchsia-400/10',
    glow: 'bg-cyberpink/10',
  },
];

function MissionOptimizerShell() {
  const [isTransformed, setIsTransformed] = useState(false);
  const [cursorTracking, setCursorTracking] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState('kernel params');

  const docs: Record<string, { title: string; body: string; table?: Array<{ k: string; v: string }> }> = {
    'kernel params': {
      title: 'Kernel Parameters',
      body: 'A compact reference for kernel tunables and scheduler flags. Use these pages to understand legacy knobs and migration notes.',
      table: [
        { k: 'sched_rt_runtime_us', v: '950000' },
        { k: 'vm.swappiness', v: '10' },
        { k: 'cpu.max', v: 'max 100000' },
      ],
    },
    'scheduler notes': {
      title: 'Scheduler Notes',
      body: 'High-level scheduler heuristics and recommended migration paths to modern task schedulers.',
      table: [
        { k: 'rr_weight', v: '32' },
        { k: 'sched_latency_ns', v: '6000000' },
      ],
    },
    'irq tuning': {
      title: 'IRQ Tuning',
      body: 'Interrupt routing and affinity guidance for high-throughput networking and storage workloads.',
      table: [
        { k: 'irqbalance', v: 'enabled' },
        { k: 'affinity_mask', v: '0xff' },
      ],
    },
    'cache flags': {
      title: 'Cache Flags',
      body: 'Notes about filesystem and read-ahead flags in legacy systems.',
      table: [{ k: 'readahead_kb', v: '128' }],
    },
    'thread pool': {
      title: 'Thread Pool',
      body: 'Guidance on configuring worker pools for predictable latency.',
      table: [{ k: 'max_workers', v: '64' }],
    },
  };

  const legacyRows = [
    {
      key: 'sched_rt_runtime_us',
      value: '950000',
      notes: 'deprecated in many stacks',
    },
    {
      key: 'vm.swappiness',
      value: '10',
      notes: 'watch memory pressure',
    },
    {
      key: 'cpu.max',
      value: 'max 100000',
      notes: 'nested control group',
    },
  ];

  const runtimeValue = Number(legacyRows[0].value);
  const runtimeOptimized = Math.round((runtimeValue / 1000000) * 100);
  const swappinessValue = Number(legacyRows[1].value);

  const handleToggle = () => {
    if (cursorTracking) {
      return;
    }
    setCursorTracking(true);
    window.setTimeout(() => {
      setIsTransformed((prev) => !prev);
      setCursorTracking(false);
    }, 430);
  };

  return (
    <div className="mx-auto w-full max-w-[min(100%,56rem)] pt-6 sm:pt-10">
      <div className="mx-auto w-full aspect-[16/10]">
        <div className="flex h-full w-full flex-col items-center">
          <motion.div className="relative h-full w-full overflow-visible">
            <div className="relative h-[calc(100%-2.6rem)] w-full overflow-hidden rounded-2xl border-4 border-[#0f1720] bg-black shadow-[0_40px_120px_rgba(0,0,0,0.9)]">
              <div className="flex h-6 items-center justify-between border-b border-neutral-800 bg-[#0d0d0d] px-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.25)]" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/80 shadow-[0_0_8px_rgba(250,204,21,0.2)]" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(74,222,128,0.2)]" />
                </div>

                <div className="flex min-w-[12rem] max-w-[60%] items-center justify-center rounded-full border border-neutral-700/80 bg-neutral-900/80 px-3 py-0.5 text-[10px] font-mono tracking-[0.14em] text-zinc-400">
                  webfixxies.dev/optimize/{selectedDoc.replace(/\s+/g, '-')}
                </div>

                <div className="w-12" />
              </div>

              <div className="relative h-[calc(100%-1.5rem)] w-full">
                <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-8 bg-gradient-to-b from-white/5 to-transparent" />
                <AnimatePresence mode="wait">
                  {!isTransformed ? (
                    <motion.div
                      key="before"
                      initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scale: 0.965, filter: 'blur(6px)' }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="h-full w-full select-none overflow-hidden bg-[#f0f0f0] p-3 pb-12 font-serif text-[10px] text-black sm:p-4 sm:pb-14 sm:text-[11px]"
                    >
                      <div className="grid h-full min-h-0 grid-cols-[80px_minmax(0,1fr)] gap-3 md:grid-cols-[96px_minmax(0,1fr)]">
                        <aside className="space-y-2 border-r border-black/30 pr-3 leading-[1.12]">
                          <div className="text-[10px] uppercase tracking-[0.18em] text-black/60">docs</div>
                          {Object.keys(docs).map((k) => (
                            <button
                              key={k}
                              onClick={() => setSelectedDoc(k)}
                              className={`block w-full text-left text-blue-700/95 hover:text-blue-900 underline break-words py-0.5 text-[11px] ${selectedDoc === k ? 'font-bold text-blue-900' : ''}`}
                            >
                              {k}
                            </button>
                          ))}
                        </aside>

                        <div className="min-w-0 overflow-hidden pr-1">
                          <div className="space-y-1.5 leading-[1.12] break-words sm:space-y-2">
                            <p className="font-bold">{docs[selectedDoc].title}</p>
                            <p>{docs[selectedDoc].body}</p>
                            <p className="text-xs text-zinc-600">Viewing: {selectedDoc}</p>
                          </div>

                          <div className="mt-2 overflow-hidden border border-black text-[9px] leading-[1.05] sm:mt-3">
                            <table className="w-full border-collapse">
                              <thead>
                                <tr className="bg-black/10">
                                  <th className="border border-black px-2 py-1 text-left font-normal">param</th>
                                  <th className="border border-black px-2 py-1 text-left font-normal">value</th>
                                </tr>
                              </thead>
                              <tbody>
                                {((docs[selectedDoc].table as any[]) || []).map((row) => (
                                  <tr key={row.k}>
                                    <td className="border border-black px-2 py-1 break-words">{row.k}</td>
                                    <td className="border border-black px-2 py-1 break-words">{row.v}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          <div className="mt-3 flex flex-wrap items-center gap-2">
                            <button className="border border-black bg-[#e5e5e5] px-2 py-1 text-[10px] text-black shadow-none">Apply settings</button>
                            <div className="text-[10px] leading-[1.1] text-black/70 break-words">Manual review required before commit.</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="after"
                      initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scale: 0.965, filter: 'blur(6px)' }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="relative h-full w-full select-none overflow-hidden bg-[#050505] p-2.5 pb-12 font-sans text-white sm:p-4 sm:pb-14"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:16px_16px] opacity-100" />
                      <div className="relative z-10 flex h-full min-h-0 flex-col justify-between space-y-4">
                        <div className="flex items-start justify-between gap-2 rounded-lg border border-neutral-800 bg-neutral-900/80 p-2.5 backdrop-blur-sm sm:p-3">
                          <div className="min-w-0">
                            <div className="text-[9px] font-mono uppercase tracking-[0.24em] text-zinc-400 whitespace-nowrap truncate">kernel performance map</div>
                            <p className="mt-1 text-[11px] leading-relaxed text-zinc-300 break-words">Structured view of the same low-level parameters with clean hierarchy.</p>
                          </div>
                          <span className="text-cyan-400 font-mono text-[9px] bg-cyan-950/50 border border-cyan-800/50 px-1.5 py-0.5 rounded whitespace-nowrap">LATENCY READY</span>
                        </div>

                        <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-2 lg:gap-3">
                          <div className="rounded-lg border border-neutral-800 bg-neutral-900/80 p-2.5 backdrop-blur-sm sm:p-3">
                            <div className="mb-2 text-[9px] font-mono uppercase tracking-[0.24em] text-cyan-300 whitespace-nowrap truncate">runtime allocation</div>
                            <div className="flex items-center gap-3">
                              <div className="relative h-10 w-10 shrink-0 rounded-full border-2 border-cyan-500/60">
                                <div className="absolute inset-1 rounded-full border border-cyan-300/70" />
                                <div className="absolute inset-0 rounded-full shadow-[0_0_18px_rgba(34,211,238,0.35)]" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-[11px] text-cyan-100 font-medium whitespace-nowrap truncate">Runtime Allocation // {runtimeOptimized}% Optimized</p>
                                <p className="text-[10px] text-zinc-400 break-words">From {legacyRows[0].key}: {legacyRows[0].value}</p>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-lg border border-neutral-800 bg-neutral-900/80 p-2.5 backdrop-blur-sm sm:p-3">
                            <div className="mb-2 text-[9px] font-mono uppercase tracking-[0.24em] text-blue-300 whitespace-nowrap truncate">memory pressure</div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between gap-2 rounded-md border border-blue-500/30 bg-blue-500/10 px-2 py-1.5 text-[10px]">
                                <span className="text-zinc-300 truncate">{legacyRows[1].key}</span>
                                <span className="text-blue-200 whitespace-nowrap">{swappinessValue}</span>
                              </div>
                              <p className="text-[10px] leading-relaxed text-zinc-400 break-words">
                                Memory pressure is low and stable, preserving responsive cache behavior.
                              </p>
                              <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-800">
                                <div className="h-full w-[22%] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border border-neutral-800 bg-neutral-900/80 p-2.5 backdrop-blur-sm sm:p-3">
                          <div className="text-[9px] font-mono uppercase tracking-[0.24em] text-cyan-300 whitespace-nowrap truncate">optimization flow</div>
                          <div className="mt-2 grid grid-cols-1 gap-2 p-0.5 sm:grid-cols-3">
                            <div className="rounded-md border border-neutral-800 bg-black/20 px-2 py-2 text-[10px] text-zinc-400 whitespace-nowrap truncate text-center">diagnose</div>
                            <div className="rounded-md border border-neutral-800 bg-black/20 px-2 py-2 text-[10px] text-zinc-400 whitespace-nowrap truncate text-center">refactor</div>
                            <div className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-2 text-[10px] text-cyan-200 whitespace-nowrap truncate text-center">deploy</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute z-30 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-black/80 shadow-[0_0_10px_rgba(255,255,255,0.25)]"
                  animate={
                    cursorTracking
                      ? {
                          left: ['52%', '86%', '86%'],
                          top: ['52%', '84%', '84%'],
                          scale: [1, 0.82, 1],
                        }
                      : {
                          left: isTransformed ? '86%' : '52%',
                          top: isTransformed ? '84%' : '52%',
                          scale: 1,
                        }
                  }
                  transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                </motion.div>

                <motion.button
                  type="button"
                  aria-label={isTransformed ? 'Reset interface' : 'Optimize interface'}
                  onClick={handleToggle}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-2.5 right-2.5 z-40 rounded-full border border-white/20 bg-white/10 p-2.5 text-black shadow-lg shadow-cyan-900/20 backdrop-blur-md hover:border-cyan-500/50 sm:bottom-3 sm:right-3 sm:p-3"
                >
                  <Wrench className="h-3.5 w-3.5 text-cyan-100 sm:h-4 sm:w-4" />
                </motion.button>
              </div>
            </div>

            <div className="h-4 w-[106%] -ml-[3%] rounded-b-lg border-x border-b border-neutral-700/60 bg-gradient-to-r from-[#232323] via-[#383838] to-[#232323] shadow-[0_16px_35px_rgba(0,0,0,0.72)]" />
            <div className="mx-auto mt-1 h-7 w-[44%] rounded-md border border-neutral-700/70 bg-gradient-to-b from-neutral-800/70 to-neutral-900/80 shadow-inner" />

            <div className="mx-auto mt-1.5 grid w-[94%] grid-cols-10 gap-1 rounded-lg border border-neutral-700/40 bg-neutral-900/30 p-1.5">
              {Array.from({ length: 30 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-sm bg-neutral-700/70 ${
                    i % 10 === 0 || i % 10 === 9 ? 'col-span-2' : 'col-span-1'
                  }`}
                />
              ))}
            </div>

            <div className="pointer-events-none absolute -right-3 bottom-0 scale-90 sm:-right-10 sm:bottom-1 sm:scale-100">
              <svg className="absolute -left-20 -top-10 h-14 w-24 sm:-left-24 sm:-top-12 sm:h-16 sm:w-28" viewBox="0 0 112 64" fill="none" aria-hidden="true">
                <path d="M2 2 C 28 4, 44 16, 66 20 C 86 24, 96 30, 110 40" stroke="rgba(148,163,184,0.5)" strokeWidth="1.6" />
              </svg>
              <div className="relative h-12 w-8 rounded-full border border-neutral-700 bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-[0_8px_20px_rgba(0,0,0,0.55)]">
                <div className="absolute inset-x-1 top-1 h-[44%] rounded-t-full border border-white/10" />
                <div className="absolute left-1/2 top-2 h-3 w-px -translate-x-1/2 rounded-full bg-cyan-200/70" />
                <div className="absolute left-1/2 top-[52%] h-4 w-px -translate-x-1/2 bg-neutral-500/70" />
              </div>
            </div>
          </motion.div>

          <p className="mt-3 text-center text-[9px] font-mono uppercase tracking-[0.28em] text-zinc-500 sm:text-[10px] sm:tracking-[0.35em]">
            Click tool to optimize interface.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MissionSection() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/5 bg-black px-4 py-20 sm:px-6 sm:py-28 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,rgba(56,189,248,0.02)_35%,transparent_72%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.06)_0%,rgba(236,72,153,0.02)_35%,transparent_72%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 sm:gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -28, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:sticky lg:top-28"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electricblue/25 bg-electricblue/5 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.3em] text-electricblue shadow-[0_0_30px_rgba(56,189,248,0.12)]">
            <span className="h-2 w-2 rounded-full bg-electricblue shadow-[0_0_12px_rgba(56,189,248,0.9)] animate-pulse" />
            Mission
          </div>

          <h2 className="max-w-xl text-3xl font-black tracking-[-0.07em] text-white sm:text-5xl lg:text-6xl lg:leading-[0.95]">
            We build the web so it feels{' '}
            <span className="bg-gradient-to-r from-white via-slate-100 to-electricblue bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.14)]">
              immediate, premium, and effortless.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
            Web Fixxies exists to correct the experience layer of modern browsing. We engineer visually stunning, fluid spatial architectures for brands that need more than a template and more than a brochure site.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500 sm:mt-5 sm:text-base">
            Our mission is to make advanced digital presence accessible at a fraction of enterprise cost, giving local businesses and ambitious teams the level of polish, performance, and clarity that used to be locked behind agency premiums.
          </p>

          <MissionOptimizerShell />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.16 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          className="grid gap-5 sm:gap-6 xl:grid-cols-2"
        >
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              variants={{
                hidden: { opacity: 0, y: 28, scale: 0.985 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
              }}
              whileHover={{ y: -4 }}
              className={`group relative isolate overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(255,255,255,0.04)] ${index === 2 ? 'lg:col-span-2' : ''}`}
            >
              <div className={`absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br ${card.accent} blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent`} />
              <div className="relative z-10 flex h-full flex-col px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
                <div className="mb-5 inline-flex self-start items-center gap-3 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-electricblue/90 backdrop-blur-sm">
                  <span className={`h-px w-8 bg-gradient-to-r from-electricblue to-transparent`} />
                  {index === 0 ? 'Broken navigation' : index === 1 ? 'Template fatigue' : 'Access gap'}
                </div>
                <h3 className="max-w-2xl break-words text-xl font-bold tracking-tight text-white sm:text-[1.75rem]">
                  {card.title}
                </h3>
                <p className="mt-4 max-w-2xl break-words leading-relaxed text-zinc-400 md:leading-loose">
                  {card.body}
                </p>
              </div>
              <div className={`pointer-events-none absolute inset-0 rounded-3xl ${card.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />
            </motion.article>
          ))}

          <motion.article
            variants={{
              hidden: { opacity: 0, y: 28, scale: 0.985 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
            }}
            whileHover={{ y: -4 }}
            className="relative isolate overflow-hidden rounded-3xl border border-electricblue/20 bg-gradient-to-br from-electricblue/10 via-white/[0.03] to-indigo-950/20 shadow-[0_0_50px_rgba(56,189,248,0.08)] backdrop-blur-xl lg:col-span-2"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electricblue to-transparent opacity-70" />
            <div className="relative z-10 flex h-full flex-col px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
              <div className="mb-5 inline-flex self-start items-center gap-3 rounded-full border border-electricblue/20 bg-black/70 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.24em] text-electricblue backdrop-blur-sm">
                <span className="h-px w-8 bg-electricblue" />
                Our mission
              </div>
              <p className="max-w-5xl break-words text-xl font-medium leading-relaxed tracking-[-0.04em] text-white sm:text-3xl md:leading-[1.3]">
                We disrupt that cycle by delivering high-performance, visually stunning, fluid spatial web architectures at a fraction of enterprise cost, making advanced digital presence accessible to the businesses that need it most.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 text-xs font-mono uppercase tracking-[0.22em] text-zinc-300">
                <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2">Performance first</span>
                <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2">Spatial storytelling</span>
                <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2">Accessible premium design</span>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}