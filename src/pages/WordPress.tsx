import { SpotlightCard } from '../components/SpotlightCard';

export function WordPress() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-obsidian dark:text-white mb-6 tracking-tighter">Scalable WordPress</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 tracking-wide max-w-2xl">A premium showcase of agile monolithic architectures engineered for precise scale without the bloat.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <SpotlightCard delay={0.1}>
          <h2 className="text-2xl font-extrabold mb-4 dark:text-white tracking-tighter">CodeTec</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed tracking-wide">Headless structural build pushing boundaries for B2B leads via a deeply decoupled backend.</p>
        </SpotlightCard>
        <SpotlightCard delay={0.2}>
          <h2 className="text-2xl font-extrabold mb-4 dark:text-white tracking-tighter">Precision Engineering</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed tracking-wide">Agile marketing-focused CMS explicitly configured for extreme velocity campaigns.</p>
        </SpotlightCard>
        <SpotlightCard delay={0.3}>
          <h2 className="text-2xl font-extrabold mb-4 dark:text-white tracking-tighter">Oceanic Logistics</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed tracking-wide">A monolithic structural overhaul strictly optimized for flawless 99+ Lighthouse metrics globally.</p>
        </SpotlightCard>
      </div>
    </div>
  );
}
