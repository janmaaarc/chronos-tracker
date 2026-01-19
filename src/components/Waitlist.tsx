import { motion } from 'framer-motion';
import { ArrowRight, Users, Gift, Shield, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const waitlist = JSON.parse(localStorage.getItem('chronos-waitlist') || '[]');
    setCount(waitlist.length + 847);
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (email) {
      setIsLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));

      const waitlist = JSON.parse(localStorage.getItem('chronos-waitlist') || '[]');
      const emailExists = waitlist.some((entry: { email: string }) => entry.email.toLowerCase() === email.toLowerCase());

      if (emailExists) {
        setError('This email is already on the waitlist!');
        setIsLoading(false);
        return;
      }

      waitlist.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('chronos-waitlist', JSON.stringify(waitlist));
      setIsSubmitted(true);
      setEmail('');
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 px-6 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/50 dark:to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-1/2 -left-1/4 w-full h-full bg-indigo-200 dark:bg-indigo-800/50 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-purple-200 dark:bg-purple-800/50 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Ready to take control of your time?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-slate-400 max-w-xl mx-auto mb-10">
            Join the waitlist and be the first to know when Chronos launches. Early adopters get exclusive benefits.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-12"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-6 py-4 rounded-2xl font-medium border border-green-200 dark:border-green-700"
            >
              Welcome aboard! You're #{count} on the list.
            </motion.div>
          ) : (
            <div className="flex flex-col gap-2 w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  disabled={isLoading}
                  className="flex-1 px-5 py-3.5 rounded-full bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-slate-500 shadow-sm disabled:opacity-50"
                  required
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="bg-indigo-600 text-white px-7 py-3.5 rounded-full font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-indigo-500/25 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm text-center"
                >
                  {error}
                </motion.p>
              )}
            </div>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 text-neutral-500 dark:text-slate-400"
        >
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>{count.toLocaleString()}+ on waitlist</span>
          </div>
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5" />
            <span>Early access perks</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span>No spam, ever</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
