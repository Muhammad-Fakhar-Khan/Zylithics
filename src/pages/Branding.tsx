import { SpotlightCard } from '../components/SpotlightCard';

export function Branding() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-5xl md:text-7xl font-extrabold text-obsidian dark:text-white mb-16 tracking-tighter">Visual Identity</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <SpotlightCard key={i} className="aspect-square flex items-center justify-center p-0 bg-gray-50 dark:bg-[#080808]" delay={i * 0.05}>
             <span className="font-bold tracking-widest uppercase text-sm text-deep-navy/50 dark:text-white/20">Mark {i}</span>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
