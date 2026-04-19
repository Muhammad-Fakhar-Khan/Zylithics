import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { CaseStudies } from './components/CaseStudies';
import { Marquee } from './components/Marquee';
import { Process } from './components/Process';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen selection:bg-electric-cobalt/30 selection:text-obsidian dark:selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <BentoGrid />
        <CaseStudies />
        <Process />
        <Contact />
      </main>
      
      <footer className="py-12 text-center border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#080808]">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} Zylithics. Engineering Digital Authority.
        </p>
      </footer>
    </div>
  );
}

export default App;
