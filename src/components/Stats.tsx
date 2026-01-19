import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 847, suffix: '+', label: 'People on waitlist', description: 'And growing every day' },
  { value: 40, suffix: '%', label: 'Time saved', description: 'On average per user' },
  { value: 50, suffix: '+', label: 'Integrations', description: 'Connect your favorite tools' },
  { value: 99, suffix: '%', label: 'Uptime', description: 'Rock-solid reliability' },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white dark:from-indigo-950/50 dark:via-slate-900 dark:to-slate-900 opacity-50" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Numbers that matter
          </h2>
          <p className="text-lg text-neutral-600 dark:text-slate-400 max-w-2xl mx-auto">
            Built for teams who value their time
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-neutral-200/50 dark:border-slate-700/50 hover:border-indigo-200/50 dark:hover:border-indigo-700/50 transition-colors text-center">
                <p className="text-5xl font-bold text-neutral-900 dark:text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-lg font-medium text-neutral-700 dark:text-slate-200 mb-1">{stat.label}</p>
                <p className="text-sm text-neutral-500 dark:text-slate-400">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
