import { cn } from '../utils/cn';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* The Lithic Hexagon */}
        <polygon 
          points="50 5, 93 25, 93 75, 50 95, 7 75, 7 25" 
          className="fill-transparent stroke-obsidian dark:stroke-white transition-colors duration-500" 
          strokeWidth="4" 
        />
        {/* Electric Cobalt 'Z' etched inside */}
        <path 
          d="M 30 35 L 70 35 L 30 65 L 70 65" 
          stroke="#2E5BFF" 
          strokeWidth="8" 
          strokeLinecap="square" 
          strokeLinejoin="miter" 
        />
      </svg>
      <span className="font-bold text-2xl tracking-widest text-obsidian dark:text-white uppercase font-sans">
        Zylithics
      </span>
    </div>
  );
}
