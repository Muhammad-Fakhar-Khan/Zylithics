import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Process } from './components/Process';

function App() {
  return (
    <div className="min-h-screen selection:bg-cyan-accent/30 selection:text-obsidian dark:selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Process />
      </main>
      
      <footer className="py-12 text-center border-t border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-obsidian">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Zylithics. Engineering Digital Authority.
        </p>
      </footer>
    </div>
  );
}

export default App;
