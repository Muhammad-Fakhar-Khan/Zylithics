import { Calendar, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="consult">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-electric-cobalt/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-4xl mx-auto bg-white/60 dark:bg-obsidian/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-10 md:p-16 rounded-[3rem] shadow-2xl relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-obsidian dark:text-white mb-4 tracking-tighter">Schedule a 15-min Consult</h2>
          <p className="text-gray-600 dark:text-gray-400 tracking-wide">Streamlined onboarding for international leads. Let's discuss your architecture.</p>
        </div>

        <form className="space-y-6 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-deep-navy dark:text-gray-400 tracking-widest uppercase">Full Name</label>
              <input type="text" className="w-full px-5 py-4 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-electric-cobalt transition-shadow text-obsidian dark:text-white" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-deep-navy dark:text-gray-400 tracking-widest uppercase">Work Email</label>
              <input type="email" className="w-full px-5 py-4 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-electric-cobalt transition-shadow text-obsidian dark:text-white" placeholder="john@enterprise.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-deep-navy dark:text-gray-400 tracking-widest uppercase">Project Scope</label>
            <textarea rows={4} className="w-full px-5 py-4 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-electric-cobalt transition-shadow text-obsidian dark:text-white" placeholder="Tell us about the architecture requirements..." />
          </div>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold tracking-wide text-white bg-electric-cobalt shadow-lg shadow-electric-cobalt/20 hover:bg-electric-cobalt/90 rounded-full transition-all hover:scale-105">
              <Mail className="w-5 h-5" /> Send Inquiry
            </button>
            <button type="button" className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold tracking-wide text-obsidian dark:text-white bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 rounded-full transition-all">
              <Calendar className="w-5 h-5" /> Book via Calendly
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
