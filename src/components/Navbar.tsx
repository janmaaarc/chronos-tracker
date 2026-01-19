import { motion } from 'framer-motion';
import { Clock, Menu, X, Timer, TimerOff } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-neutral-200/50 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Clock className="w-6 h-6 text-indigo-500" />
          Chronos
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('features')}
            className="text-neutral-600 hover:text-neutral-900 dark:text-slate-400 dark:hover:text-white transition-colors text-sm font-medium"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-neutral-600 hover:text-neutral-900 dark:text-slate-400 dark:hover:text-white transition-colors text-sm font-medium"
          >
            How It Works
          </button>
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-neutral-100 dark:bg-slate-800 text-neutral-600 dark:text-slate-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-slate-700 transition-colors"
          >
            {theme === 'light' ? <TimerOff className="w-5 h-5" /> : <Timer className="w-5 h-5" />}
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('waitlist')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neutral-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-800 dark:hover:bg-slate-100 transition-colors"
          >
            Join Waitlist
          </motion.button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-neutral-600 dark:text-slate-400"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-neutral-200/50 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('features')}
              className="text-neutral-600 hover:text-neutral-900 dark:text-slate-400 dark:hover:text-white transition-colors text-sm font-medium text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-neutral-600 hover:text-neutral-900 dark:text-slate-400 dark:hover:text-white transition-colors text-sm font-medium text-left"
            >
              How It Works
            </button>
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-neutral-600 dark:text-slate-400 text-sm font-medium text-left"
            >
              {theme === 'light' ? <TimerOff className="w-4 h-4" /> : <Timer className="w-4 h-4" />}
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </motion.button>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="bg-neutral-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-full text-sm font-medium w-full"
            >
              Join Waitlist
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
