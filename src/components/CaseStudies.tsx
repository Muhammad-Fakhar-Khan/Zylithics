import { Target, Cpu, TrendingUp } from 'lucide-react';

export function CaseStudies() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="case-studies">
      <div className="mb-20 md:flex items-end justify-between">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-obsidian dark:text-white mb-6 tracking-tighter">Verified Authority</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 tracking-wide">Delivering scalable architectures for demanding international engineering firms, matching rigorous global standards.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/5 rounded-3xl overflow-hidden shadow-xl shadow-electric-cobalt/5">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-white/5">
          <div className="p-10">
            <div className="w-12 h-12 bg-gray-100 dark:bg-obsidian text-deep-navy dark:text-gray-300 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-obsidian dark:text-white mb-4 tracking-tighter">The Challenge</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              International engineering conglomerates face bloated legacy systems causing high bounce rates, failing Core Web Vitals, and poor WCAG accessibility compliance across global territories.
            </p>
          </div>
          <div className="p-10 bg-gray-50 dark:bg-[#151515]">
            <div className="w-12 h-12 bg-deep-navy text-white rounded-xl flex items-center justify-center mb-6 shadow-md shadow-deep-navy/10">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-obsidian dark:text-white mb-4 tracking-tighter">Technical Solution</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              Complete platform rewrites utilizing custom React rendering, strict semantic HTML for SEO scaling, and integrated systems ensuring zero-layout-shift and sub-second paint times.
            </p>
          </div>
          <div className="p-10 bg-electric-cobalt text-white">
            <div className="w-12 h-12 bg-white/20 text-white rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tighter">Business Impact</h3>
            <p className="text-white/80 leading-relaxed text-sm font-medium">
              Achieved 99+ Lighthouse scores globally. Decreased bounce rates by 42% on mobile networks, and established flawless WCAG/ADA accessibility compliance for international contracting. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
