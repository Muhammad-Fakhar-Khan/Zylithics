import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-obsidian/70 border-b border-gray-100 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6">
          <ThemeToggle />
          <a href="#consult" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide text-white bg-cobalt hover:bg-cobalt-light transition-colors rounded-full shadow-lg shadow-cobalt/20">
            Global Consult
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
