import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full backdrop-blur-xl bg-obsidian-light/80 dark:bg-obsidian/80 border-b border-gray-200 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <div className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-widest uppercase text-deep-navy dark:text-gray-300">
          <Link to="/custom-web" className="hover:text-electric-cobalt transition-colors focus:outline-none">Custom Web</Link>
          <Link to="/wordpress" className="hover:text-electric-cobalt transition-colors focus:outline-none">WordPress</Link>
          <Link to="/branding" className="hover:text-electric-cobalt transition-colors focus:outline-none">Branding</Link>
          <Link to="/video" className="hover:text-electric-cobalt transition-colors focus:outline-none">Video</Link>
        </div>
        <div className="flex items-center gap-6">
          <ThemeToggle />
          <a href="/#consult" className="hidden md:inline-flex items-center justify-center px-6 py-3 text-sm font-bold tracking-widest uppercase text-white bg-deep-navy dark:bg-white dark:text-obsidian hover:bg-electric-cobalt dark:hover:bg-gray-200 transition-colors rounded-full shadow-lg border-2 border-transparent">
            Consult
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
