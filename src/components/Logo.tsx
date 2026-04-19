import { cn } from '../utils/cn';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background dark shield or base element */}
        <rect x="5" y="5" width="90" height="90" rx="16" className="fill-transparent stroke-obsidian dark:stroke-white dark:fill-transparent" strokeWidth="4" />
        
        {/* The 'Z' path */}
        <path d="M 25 30 L 75 30 L 25 70 L 75 70" className="stroke-obsidian dark:stroke-white" strokeWidth="12" strokeLinecap="square" strokeLinejoin="miter" />
        
        {/* Diagonal speed line / Arrow */}
        <path d="M 15 85 L 85 15" stroke="#21E6C1" strokeWidth="8" strokeLinecap="round" />
        <path d="M 60 15 L 85 15 L 85 40" stroke="#21E6C1" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-bold text-2xl tracking-tighter text-obsidian dark:text-white uppercase font-sans">
        Zylithics
      </span>
    </div>
  );
}
