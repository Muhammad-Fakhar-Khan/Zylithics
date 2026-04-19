import { SpotlightCard } from '../components/SpotlightCard';

export function CustomWeb() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-5xl md:text-7xl font-extrabold text-obsidian dark:text-white mb-16 tracking-tighter">Custom Web Platforms</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <SpotlightCard className="bg-gray-50 dark:bg-[#080808]">
          <h2 className="text-3xl font-extrabold mb-4 dark:text-white tracking-tighter">Coffee Shop App</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg tracking-wide">High-performance Next.js ordering architecture designed specifically for global scalability and sub-second latency.</p>
        </SpotlightCard>
        <SpotlightCard className="bg-gray-50 dark:bg-[#080808]">
          <h2 className="text-3xl font-extrabold mb-4 dark:text-white tracking-tighter">My-App Enterprise</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg tracking-wide">Custom React framework deployment heavily optimized for handling massive global data sets efficiently securely.</p>
        </SpotlightCard>
      </div>
    </div>
  );
}
