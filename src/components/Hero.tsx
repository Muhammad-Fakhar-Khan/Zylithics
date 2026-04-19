import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cobalt/5 dark:bg-cobalt-light/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-accent/10 text-cyan-accent dark:text-cyan-accent border border-cyan-accent/20 mb-8"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium tracking-wide">Serving an International Clientele</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight text-obsidian dark:text-white max-w-4xl leading-tight mb-6"
      >
        Engineering Digital <span className="text-cobalt dark:text-cyan-accent">Authority.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-12"
      >
        We build high-performance infrastructure for global brands. From custom React architectures to scalable WordPress ecosystems, we turn complex technical challenges into seamless business results.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <a href="#project" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-obsidian dark:bg-white dark:text-obsidian rounded-full hover:scale-105 transition-transform">
          Start a Project <ArrowRight className="w-5 h-5" />
        </a>
        <a href="#consult" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-obsidian dark:text-white border-2 border-gray-200 dark:border-white/20 rounded-full hover:-translate-y-1 transition-transform">
          Global Consult
        </a>
      </motion.div>
    </section>
  );
}
