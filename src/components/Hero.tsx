import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* Background radial soft blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-cobalt/5 dark:bg-electric-cobalt/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-cobalt/10 text-deep-navy dark:text-electric-cobalt border border-electric-cobalt/20 mb-8"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-semibold tracking-wide uppercase">Serving an International Clientele</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tighter text-obsidian dark:text-white max-w-5xl leading-tight mb-8"
      >
        Engineering Digital <span className="text-electric-cobalt">Authority.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-12 tracking-wide leading-relaxed"
      >
        We build high-performance infrastructure for global brands. From custom React architectures to scalable WordPress ecosystems.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a href="#project" className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-electric-cobalt shadow-xl shadow-electric-cobalt/30 hover:shadow-electric-cobalt/50 hover:bg-electric-cobalt/90 dark:shadow-electric-cobalt/10 rounded-full hover:scale-105 transition-all">
          Start a Global Project <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}
