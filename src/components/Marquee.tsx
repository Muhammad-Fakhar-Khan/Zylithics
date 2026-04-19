const accolades = [
  "Technova Winner 2025",
  "IEEEP Certified Architecture",
  "PEC Registered Firm",
  "Global UX Excellence",
  "WCAG 2.1 AAA Compliant",
  "ISO 27001 Security Standard",
  /* Duplicate directly in array for seamless CSS loop */
  "Technova Winner 2025",
  "IEEEP Certified Architecture",
  "PEC Registered Firm",
  "Global UX Excellence",
  "WCAG 2.1 AAA Compliant",
  "ISO 27001 Security Standard"
];

export function Marquee() {
  return (
    <div className="py-8 border-y border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#080808] overflow-hidden flex items-center">
      <div className="marquee-container flex whitespace-nowrap w-full">
        <div className="animate-marquee flex gap-12 sm:gap-24 items-center uppercase tracking-[0.2em] text-sm font-bold text-gray-400 dark:text-gray-600">
          {accolades.map((acc, i) => (
             <span key={i} className="flex items-center gap-12 sm:gap-24">
               <span>{acc}</span>
               <span className="w-1.5 h-1.5 rounded-full bg-electric-cobalt/40 shrink-0" />
             </span>
          ))}
        </div>
      </div>
    </div>
  );
}
