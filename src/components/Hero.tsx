import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Play, Clock, CheckCircle2, TrendingUp, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

function MagneticButton({ children, className, onClick, type = 'button' }: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  // Timer starts at 02:34:18 = 2*3600 + 34*60 + 18 = 9258 seconds
  const [seconds, setSeconds] = useState(9258);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

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
    <section className="w-full pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 via-white to-white dark:from-indigo-950 dark:via-slate-900 dark:to-slate-900" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-indigo-300/40 to-purple-300/40 dark:from-indigo-600/20 dark:to-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            delay: 2,
          }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-300/40 to-cyan-300/40 dark:from-blue-600/20 dark:to-cyan-600/20 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuMDMiIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-50 dark:opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-neutral-600 dark:text-slate-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-neutral-200/50 dark:border-slate-700/50 shadow-lg shadow-neutral-200/20 dark:shadow-slate-900/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Launching Soon
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-neutral-900 dark:text-white"
        >
          Track{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            time
          </span>{' '}
          without thinking about it
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg sm:text-xl text-neutral-600 dark:text-slate-400 max-w-2xl mx-auto mb-10"
        >
          The intelligent time tracker that works in the background. Focus on what matters, let Chronos handle the rest.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-6 py-4 rounded-2xl font-medium flex items-center gap-2 border border-green-200 dark:border-green-800"
            >
              <CheckCircle2 className="w-5 h-5" />
              You're on the list! We'll notify you when Chronos launches.
            </motion.div>
          ) : (
            <div className="flex flex-col gap-2 w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                    disabled={isLoading}
                    className="w-full px-5 py-4 rounded-2xl border border-neutral-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-slate-500 shadow-lg shadow-neutral-200/20 dark:shadow-slate-900/20 disabled:opacity-50"
                    required
                  />
                </div>
                <MagneticButton
                  type="submit"
                  className="bg-neutral-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-medium hover:bg-neutral-800 dark:hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-neutral-900/20 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </MagneticButton>
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
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-20 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />

          <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-neutral-200/50 dark:shadow-slate-900/50 border border-neutral-200/50 dark:border-slate-700/50 overflow-hidden">
            <div className="bg-neutral-100/80 dark:bg-slate-900/80 px-4 py-3 flex items-center gap-2 border-b border-neutral-200/50 dark:border-slate-700/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-neutral-500 dark:text-slate-400 ml-2">Chronos</span>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    className="flex items-center gap-4"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                        className="w-20 h-20 rounded-full border-4 border-indigo-100 dark:border-indigo-900"
                      >
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                          className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-500"
                        />
                      </motion.div>
                      <Clock className="absolute inset-0 m-auto w-8 h-8 text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-neutral-900 dark:text-white tabular-nums">
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.7 }}
                        >
                          {formatTime(seconds)}
                        </motion.span>
                      </p>
                      <p className="text-neutral-500 dark:text-slate-400 text-sm">Today's tracked time</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.7, duration: 0.6 }}
                    className="space-y-3"
                  >
                    {[
                      { name: 'Design Review', time: '1h 24m', color: 'bg-indigo-500', progress: 60 },
                      { name: 'Code Review', time: '48m', color: 'bg-purple-500', progress: 35 },
                      { name: 'Team Meeting', time: '22m', color: 'bg-pink-500', progress: 15 },
                    ].map((task, i) => (
                      <motion.div
                        key={task.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8 + i * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-slate-700/50 rounded-xl"
                      >
                        <div className={`w-2 h-2 rounded-full ${task.color}`} />
                        <span className="text-sm text-neutral-700 dark:text-slate-200 flex-1">{task.name}</span>
                        <span className="text-xs text-neutral-500 dark:text-slate-400 tabular-nums">{task.time}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-neutral-700 dark:text-slate-200">Weekly Progress</span>
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm">
                      <TrendingUp className="w-4 h-4" />
                      +12%
                    </div>
                  </div>
                  <div className="flex items-end gap-2 h-32">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 2 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                        className={`flex-1 rounded-t-lg ${
                          i === 5 ? 'bg-indigo-500' : 'bg-indigo-200 dark:bg-indigo-800'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-neutral-400">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
                className="mt-8 flex justify-center"
              >
                <MagneticButton className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                  <Play className="w-4 h-4" fill="white" />
                  Watch Demo
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
