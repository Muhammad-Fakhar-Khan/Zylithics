import React, { useRef, useState } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../utils/cn';

interface SpotlightCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className, delay = 0, ...props }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-[2rem] bg-white dark:bg-[#050505] border border-gray-200 dark:border-white/5",
        "group h-full shadow-lg shadow-gray-200/20 dark:shadow-none hover:shadow-2xl hover:shadow-electric-cobalt/5 transition-all duration-500",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100 z-0 mix-blend-color-dodge dark:mix-blend-screen"
        style={{
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(46, 91, 255, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full w-full p-10 flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};
