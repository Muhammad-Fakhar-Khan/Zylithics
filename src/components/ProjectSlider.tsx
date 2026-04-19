import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { cn } from '../utils/cn';

export interface ProjectData {
  title: string;
  desc: string;
  link: string;
  screenshot: string;
}

interface ProjectSliderProps {
  projects: ProjectData[];
  className?: string;
}

export const ProjectSlider: React.FC<ProjectSliderProps> = ({ projects, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className={cn("relative", className)}>
      <div className="relative overflow-hidden min-h-[600px] rounded-[3rem] bg-white dark:bg-[#080808] border border-gray-200 dark:border-white/5 shadow-2xl group/slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid md:grid-cols-2 h-full absolute inset-0 w-full"
          >
            {/* Left Column: Details */}
            <div className="p-12 md:p-16 flex flex-col justify-center h-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-electric-cobalt/10 text-electric-cobalt text-xs font-bold uppercase tracking-widest w-max">
                Project {currentIndex + 1} of {projects.length}
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-obsidian dark:text-white mb-6 tracking-tighter">
                {projects[currentIndex].title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed tracking-wide mb-10 w-[95%]">
                {projects[currentIndex].desc}
              </p>
              <a 
                href={projects[currentIndex].link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold tracking-wide text-white bg-electric-cobalt hover:bg-electric-cobalt/90 rounded-full transition-all w-max shadow-lg shadow-electric-cobalt/20 hover:scale-105"
              >
                Visit Live Site <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Right Column: HD Screenshot */}
            <div className="relative h-full w-full bg-gray-100 dark:bg-[#111] overflow-hidden">
               <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse -z-10" />
               <img 
                 src={projects[currentIndex].screenshot} 
                 alt={projects[currentIndex].title} 
                 className="absolute inset-0 w-full h-full object-cover object-left-top transition-transform duration-1000 origin-top-left group-hover/slider:-translate-y-4"
               />
               {/* Internal gradient overlay to smooth edges for light/dark mode */}
               <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#080808] to-transparent w-16 left-0" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button 
          onClick={prevSlide}
          className="w-14 h-14 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-obsidian dark:text-white hover:bg-electric-cobalt hover:text-white hover:border-transparent transition-all hover:scale-110 shadow-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "w-3 h-3 rounded-full transition-all", 
                i === currentIndex ? "bg-electric-cobalt scale-125" : "bg-gray-300 dark:bg-white/20 hover:bg-electric-cobalt/50"
              )}
            />
          ))}
        </div>
        <button 
          onClick={nextSlide}
          className="w-14 h-14 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-obsidian dark:text-white hover:bg-electric-cobalt hover:text-white hover:border-transparent transition-all hover:scale-110 shadow-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
