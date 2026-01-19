import { motion } from 'framer-motion';
import { Zap, TrendingUp, Blocks, Target, Lock, BellRing } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Auto-Tracking',
    description: 'Chronos detects what you\'re working on and tracks time automatically. No more manual timers.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: TrendingUp,
    title: 'Smart Reports',
    description: 'Get insights into where your time goes with beautiful, actionable reports and analytics.',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    icon: Blocks,
    title: 'Integrations',
    description: 'Connect with your favorite tools. Jira, Notion, Slack, and 50+ more integrations.',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: Target,
    title: 'Focus Mode',
    description: 'Block distractions and enter deep work mode. Chronos helps you stay in the zone.',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your data is encrypted and never shared. Full control over what gets tracked.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: BellRing,
    title: 'Smart Reminders',
    description: 'Get gentle nudges to take breaks and notifications about your productivity patterns.',
    color: 'from-rose-400 to-red-500',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-neutral-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-100/50 dark:from-indigo-950/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
          >
            Features
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              master your time
            </span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-slate-400 max-w-2xl mx-auto">
            Powerful features designed to help you understand, optimize, and take control of how you spend your time.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`} />
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-neutral-200/50 dark:border-slate-700/50 hover:border-transparent transition-colors h-full">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-white dark:bg-slate-800 rounded-[14px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-neutral-700 dark:text-slate-200 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
