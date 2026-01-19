import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does automatic time tracking work?',
    answer: 'Chronos runs quietly in the background and detects which applications and websites you\'re using. It uses smart algorithms to categorize your activities into projects and tasks, so you never have to manually start or stop timers.',
  },
  {
    question: 'Is my data private and secure?',
    answer: 'Absolutely. Your data is encrypted end-to-end and stored securely. We never sell your data or share it with third parties. You have full control over what gets tracked and can delete your data at any time.',
  },
  {
    question: 'What integrations are available?',
    answer: 'Chronos integrates with over 50 popular tools including Jira, Asana, Notion, Slack, Trello, GitHub, and many more. We\'re constantly adding new integrations based on user requests.',
  },
  {
    question: 'Can I use Chronos offline?',
    answer: 'Yes! Chronos works completely offline. Your time is tracked locally and synced to the cloud once you\'re back online. You\'ll never lose any tracked time due to connectivity issues.',
  },
  {
    question: 'What platforms does Chronos support?',
    answer: 'Chronos is available for macOS, Windows, and Linux. We also have a web dashboard where you can view your reports and manage your settings from any device.',
  },
  {
    question: 'Is there a free plan?',
    answer: 'Yes! We offer a generous free tier that includes basic time tracking and weekly reports. Premium features like advanced analytics, team collaboration, and unlimited integrations are available on our paid plans.',
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={false}
      className="border-b border-neutral-200 dark:border-slate-700 last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors pr-8">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 bg-neutral-100 dark:bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors"
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-neutral-600 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
          ) : (
            <Plus className="w-4 h-4 text-neutral-600 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
          )}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-neutral-600 dark:text-slate-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-neutral-600 dark:text-slate-400">
            Everything you need to know about Chronos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-2xl border border-neutral-200 dark:border-slate-700 p-2"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
