import { motion } from 'framer-motion';
import { Download, MousePointerClick, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Install Chronos',
    description: 'Download our lightweight desktop app. It runs quietly in the background without slowing you down.',
  },
  {
    number: '02',
    icon: MousePointerClick,
    title: 'Just work',
    description: 'Go about your day. Chronos automatically detects apps, projects, and tasks you\'re working on.',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Review insights',
    description: 'Check your dashboard to see where your time went. Discover patterns and optimize your workflow.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Simple as 1, 2, 3
          </h2>
          <p className="text-lg text-neutral-600 dark:text-slate-400 max-w-2xl mx-auto">
            No complex setup. No learning curve. Just install and let Chronos do the heavy lifting.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-24 left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-indigo-200 dark:from-indigo-800 via-indigo-400 to-indigo-200 dark:to-indigo-800" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10"
                >
                  <step.icon className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />
                </motion.div>
                <span className="text-sm font-bold text-indigo-500 dark:text-indigo-400 mb-2 block">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
