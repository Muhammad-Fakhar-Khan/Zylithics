import { motion } from 'framer-motion';
import { Clock, Users, ArrowUpRight } from 'lucide-react';

export function Process() {
  return (
    <section className="py-24 border-t border-gray-100 dark:border-white/5 bg-white dark:bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 font-medium text-sm mb-6"
          >
            <Clock className="w-4 h-4" /> Global Delivery Model
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-obsidian dark:text-white mb-6 leading-tight tracking-tight"
          >
            We align with your time zone, not the other way around.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          >
            Operating in a highly refined Agile/Global sync format, distance is completely eliminated. Whether you are in London, New York, or Dubai, our infrastructure functions as your internal team.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pl-6 border-l-4 border-cobalt dark:border-cyan-accent"
          >
            <p className="text-xl font-medium text-obsidian dark:text-white italic">
              "Resulting in a radically cleaner experience for leading global firms."
            </p>
          </motion.div>
        </div>
        
        <div className="grid gap-6 p-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-white/5 hover:-translate-y-1 transition-transform"
          >
            <Users className="w-8 h-8 text-cobalt dark:text-cyan-accent mb-4" />
            <h4 className="text-xl font-bold text-obsidian dark:text-white mb-2">Dedicated Partnership</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">We operate as strategic tech partners, integrating into your workflows to guarantee high-velocity, reliable shipping and fewer barriers.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-white/5 hover:-translate-y-1 transition-transform"
          >
            <ArrowUpRight className="w-8 h-8 text-cobalt dark:text-cyan-accent mb-4" />
            <h4 className="text-xl font-bold text-obsidian dark:text-white mb-2">Measurable Outcomes</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Every line of code and interface adjustment is tested against hard performance metrics and conversions.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
