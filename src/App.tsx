import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { CustomWeb } from './pages/CustomWeb';
import { WordPress } from './pages/WordPress';
import { Branding } from './pages/Branding';
import { Video } from './pages/Video';

function App() {
  return (
    <div className="min-h-screen selection:bg-electric-cobalt/30 selection:text-obsidian dark:selection:text-white flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/custom-web" element={<CustomWeb />} />
          <Route path="/wordpress" element={<WordPress />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </div>
      
      <footer className="py-12 text-center border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#080808]">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} Zylithics. Engineering Digital Authority.
        </p>
      </footer>
    </div>
  );
}

export default App;
