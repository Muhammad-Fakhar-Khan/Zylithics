import { SpotlightCard } from '../components/SpotlightCard';
import { Camera } from 'lucide-react';

export function Video() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-5xl md:text-7xl font-extrabold text-obsidian dark:text-white mb-16 tracking-tighter">Motion & Stills</h1>
      <div className="grid md:grid-cols-2 gap-8">
         <SpotlightCard className="aspect-video bg-obsidian flex items-center justify-center p-0" delay={0.1}>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-20 pointer-events-none mix-blend-luminosity" />
            <Camera className="w-12 h-12 text-white/30 z-10" />
         </SpotlightCard>
         <SpotlightCard className="aspect-video bg-obsidian flex items-center justify-center p-0" delay={0.2}>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-20 pointer-events-none mix-blend-luminosity" />
            <Camera className="w-12 h-12 text-white/30 z-10" />
         </SpotlightCard>
      </div>
    </div>
  );
}
