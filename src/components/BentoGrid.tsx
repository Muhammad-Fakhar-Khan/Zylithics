import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Activity, Search, ShieldCheck, Code, LayoutTemplate } from 'lucide-react';
import { cn } from '../utils/cn';

function BentoCard({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-white/5",
        "hover:shadow-2xl hover:shadow-cobalt/10 dark:hover:shadow-cyan-accent/5 transition-shadow duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function BentoGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="capabilities">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-obsidian dark:text-white mb-4 tracking-tight">Technical Mastery at Scale</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We engineer solutions that perform exceptionally under global traffic.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Performance Spotlight */}
        <BentoCard className="md:col-span-2 relative overflow-hidden group" delay={0.1}>
          <div className="absolute top-0 right-0 p-8 opacity-10 transition-transform group-hover:scale-110 duration-700">
            <Gauge className="w-64 h-64 text-cobalt dark:text-cyan-accent" />
          </div>
          <div className="relative z-10 flex flex-col h-full justify-center">
            <h3 className="text-2xl font-bold text-obsidian dark:text-white mb-2">Performance Spotlight</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">Our custom React optimizations routinely slice load times, retaining your most impatient global customers.</p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="relative w-32 h-32 rounded-full border-8 border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0">
                <svg className="absolute top-0 left-0 w-full h-full -rotate-90">
                  <circle 
                    cx="50%" cy="50%" r="42%" fill="none" 
                    stroke="currentColor" strokeWidth="8" 
                    className="text-cyan-accent speed-gauge-path"
                  />
                </svg>
                <div className="text-center">
                  <span className="block text-3xl font-black text-obsidian dark:text-white">-1.2s</span>
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-obsidian dark:text-white mb-1">Reduction in Page Load</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">Via surgical Next.js & React architectural refactoring.</p>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Global Standards */}
        <BentoCard delay={0.2} className="flex flex-col">
          <h3 className="text-2xl font-bold text-obsidian dark:text-white mb-2">Global Standards</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">International compliance built-in from day one.</p>
          <div className="space-y-4 mt-auto">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-lg"><Activity className="w-5 h-5"/></div>
              <span className="font-medium dark:text-gray-200 text-sm">Core Web Vitals Checked</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cobalt/10 text-cobalt dark:text-cyan-accent rounded-lg"><Search className="w-5 h-5"/></div>
              <span className="font-medium dark:text-gray-200 text-sm">Technical SEO Mastery</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-lg"><ShieldCheck className="w-5 h-5"/></div>
              <span className="font-medium dark:text-gray-200 text-sm">WCAG / ADA Accessibility</span>
            </div>
          </div>
        </BentoCard>

        {/* The Lab: Custom Engineering */}
        <BentoCard delay={0.3}>
          <div className="w-12 h-12 bg-obsidian text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-obsidian/20">
            <Code className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-obsidian dark:text-white mb-2">Custom Engineering</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise-grade React and Next.js architectures built for unrivaled speed, security, and scalability. Taking complex technical demands in stride.</p>
        </BentoCard>

        {/* The Lab: Scalable CMS */}
        <BentoCard delay={0.4}>
          <div className="w-12 h-12 bg-cobalt text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cobalt/20">
            <LayoutTemplate className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-obsidian dark:text-white mb-2">Scalable CMS</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Headless and monolithic WordPress ecosystems explicitly configured for agile marketing teams demanding control and flexibility without the bloat.</p>
        </BentoCard>

        {/* Closing card */}
        <BentoCard delay={0.5} className="bg-obsidian dark:bg-cobalt border-none text-center flex flex-col justify-center items-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Start Your Transformation</h3>
            <a href="#consult" className="px-6 py-3 bg-cyan-accent text-obsidian font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-cyan-accent/20 relative z-10">
              Book a Strategy Call
            </a>
        </BentoCard>

      </div>
    </section>
  );
}
