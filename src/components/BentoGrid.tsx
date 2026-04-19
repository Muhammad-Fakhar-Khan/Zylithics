import { motion } from 'framer-motion';
import { Gauge, Camera, Crown, Hexagon, Component, LayoutTemplate } from 'lucide-react';
import { cn } from '../utils/cn';

function BentoCard({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "p-10 rounded-[2rem] bg-white dark:bg-obsidian border border-gray-200/50 dark:border-white/5",
        "hover:shadow-2xl hover:shadow-electric-cobalt/5 dark:hover:shadow-electric-cobalt/5 transition-shadow duration-500",
        "relative overflow-hidden group",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function BentoGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="vault">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-obsidian dark:text-white mb-6 tracking-tighter">The Vault</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto tracking-wide flex justify-center">Elite infrastructure, visual presence, and strategic deployments crafted for industry authorities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Feature 1: Performance Engineering */}
        <BentoCard className="md:col-span-8 bg-gradient-to-br from-white to-gray-50 dark:from-obsidian dark:to-[#050505]" delay={0.1}>
          <div className="absolute -right-20 -bottom-20 opacity-[0.03] dark:opacity-5 transition-transform group-hover:scale-110 duration-1000">
            <Gauge className="w-96 h-96 text-electric-cobalt" />
          </div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-electric-cobalt/10 text-electric-cobalt text-xs font-bold uppercase tracking-widest">
                01. Engineering
              </div>
              <h3 className="text-3xl font-extrabold text-deep-navy dark:text-white mb-4 tracking-tight">Performance Engineering</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-lg leading-relaxed text-lg">
                Custom React architectures actively scaling global firms. Every byte is optimized for seamless zero-latency navigation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-8 bg-white/50 dark:bg-white/5 p-6 rounded-3xl backdrop-blur-sm border border-gray-100 dark:border-white/5 w-max max-w-full">
              <div className="relative w-32 h-32 rounded-full border-8 border-gray-100 dark:border-gray-800 flex items-center justify-center shrink-0 shadow-inner">
                <svg className="absolute top-0 left-0 w-full h-full -rotate-90">
                  <circle 
                    cx="50%" cy="50%" r="42%" fill="none" 
                    stroke="currentColor" strokeWidth="8" 
                    className="text-electric-cobalt speed-gauge-path"
                  />
                </svg>
                <div className="text-center">
                  <span className="block text-3xl font-black text-obsidian dark:text-white tracking-tighter">-1.2s</span>
                </div>
              </div>
              <div>
                <p className="text-xl font-bold text-obsidian dark:text-white mb-2">Reduction in Page Load</p>
                <p className="text-sm font-medium text-electric-cobalt max-w-[200px] leading-relaxed">
                  Engineered explicitly via surgical Next.js & React optimizations.
                </p>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Feature 2: Visual Identity */}
        <BentoCard className="md:col-span-4" delay={0.2}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-deep-navy/10 dark:bg-white/10 text-deep-navy dark:text-white text-xs font-bold uppercase tracking-widest">
            02. Branding
          </div>
          <h3 className="text-2xl font-extrabold text-obsidian dark:text-white mb-4 tracking-tight">Visual Identity</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            High-end logos and original stylistic branding that establishes permanent dominance in your sector.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-auto">
            <div className="aspect-square bg-gray-50 dark:bg-[#111] rounded-2xl flex items-center justify-center border border-gray-100 dark:border-white/5 group-hover:border-electric-cobalt/30 transition-colors">
              <Crown className="w-8 h-8 text-deep-navy dark:text-gray-500" />
            </div>
            <div className="aspect-square bg-gray-50 dark:bg-[#111] rounded-2xl flex items-center justify-center border border-gray-100 dark:border-white/5 group-hover:border-electric-cobalt/30 transition-colors">
              <Hexagon className="w-8 h-8 text-electric-cobalt" />
            </div>
          </div>
        </BentoCard>

        {/* Feature 3: Motion & Stills */}
        <BentoCard className="md:col-span-4 overflow-hidden p-0" delay={0.3}>
          <div className="p-10 relative z-10 h-full flex flex-col bg-deep-navy text-white">
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 to-transparent z-0" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                03. Media
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight">Motion & Stills</h3>
              <p className="text-gray-300 leading-relaxed mb-6 font-medium tracking-wide">
                Integrated cinematography and professional photography defining your narrative.
              </p>
            </div>
            <div className="mt-auto relative z-10 flex justify-end">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Camera className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Feature 4: The Lab */}
        <BentoCard className="md:col-span-8 bg-gray-50 dark:bg-[#111] border-none" delay={0.4}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-deep-navy/10 dark:bg-white/10 text-deep-navy dark:text-white text-xs font-bold uppercase tracking-widest">
            04. The Lab
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-obsidian p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm">
              <div className="w-12 h-12 bg-deep-navy text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-deep-navy/20">
                <Component className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-obsidian dark:text-white mb-3 tracking-tighter">Enterprise React Builds</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed tracking-wide">
                State-of-the-art React structures utilizing precise component framing. Delivering unprecedented scale and UI responsiveness for Fortune-level applications.
              </p>
            </div>
            <div className="bg-white dark:bg-obsidian p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm">
              <div className="w-12 h-12 bg-electric-cobalt text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-electric-cobalt/20">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-obsidian dark:text-white mb-3 tracking-tighter">Agile WordPress Solutions</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed tracking-wide">
                Scalable, highly refined headless monolithic WordPress ecosystems. Structured dynamically for marketing teams demanding agility without bloat.
              </p>
            </div>
          </div>
        </BentoCard>

      </div>
    </section>
  );
}
