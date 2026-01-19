import { motion } from 'framer-motion';
import { Clock, Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-white dark:bg-slate-900 border-t border-neutral-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.a
            href="#"
            className="flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Clock className="w-6 h-6 text-indigo-500" />
            Chronos
          </motion.a>

          <div className="flex items-center gap-6">
            <a href="#" className="text-neutral-500 dark:text-slate-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-neutral-500 dark:text-slate-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-neutral-500 dark:text-slate-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-neutral-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-neutral-600 dark:text-slate-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-neutral-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-neutral-600 dark:text-slate-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-neutral-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-neutral-600 dark:text-slate-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-slate-700 text-center">
          <p className="text-neutral-500 dark:text-slate-400 text-sm">
            {new Date().getFullYear()} Chronos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
