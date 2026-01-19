import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for individuals getting started',
    features: [
      'Basic time tracking',
      'Weekly reports',
      '1 project',
      'Browser extension',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/month',
    description: 'For professionals who want more',
    features: [
      'Everything in Free',
      'Unlimited projects',
      'Advanced analytics',
      'Integrations',
      'Focus mode',
      'Priority support',
    ],
    cta: 'Coming Soon',
    popular: true,
  },
  {
    name: 'Team',
    price: '$19',
    period: '/user/month',
    description: 'For teams that need collaboration',
    features: [
      'Everything in Pro',
      'Team dashboard',
      'Admin controls',
      'Shared reports',
      'API access',
      'Dedicated support',
    ],
    cta: 'Coming Soon',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-neutral-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            Pricing
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-neutral-600 dark:text-slate-400 max-w-2xl mx-auto">
            Start free and upgrade as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-medium px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? 'text-white dark:text-slate-900' : 'text-neutral-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-neutral-400 dark:text-slate-500' : 'text-neutral-500 dark:text-slate-400'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.popular ? 'text-white dark:text-slate-900' : 'text-neutral-900 dark:text-white'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? 'text-neutral-400 dark:text-slate-500' : 'text-neutral-500 dark:text-slate-400'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.popular ? 'text-indigo-400 dark:text-indigo-600' : 'text-indigo-500 dark:text-indigo-400'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-neutral-300 dark:text-slate-600' : 'text-neutral-600 dark:text-slate-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-xl font-medium transition-colors ${
                  plan.popular
                    ? 'bg-white dark:bg-slate-900 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-slate-800'
                    : plan.cta === 'Coming Soon'
                    ? 'bg-neutral-100 dark:bg-slate-700 text-neutral-400 cursor-not-allowed'
                    : 'bg-neutral-900 dark:bg-white text-white dark:text-slate-900 hover:bg-neutral-800 dark:hover:bg-slate-100'
                }`}
                disabled={plan.cta === 'Coming Soon' && !plan.popular}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
