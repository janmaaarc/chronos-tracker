import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Designer',
    company: 'Figma',
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Chronos changed how I work. I used to forget to track time constantly. Now it just happens automatically.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Engineering Lead',
    company: 'Stripe',
    avatar: 'https://i.pravatar.cc/150?img=3',
    content: 'The automatic project detection is incredible. It knows exactly what I\'m working on without any manual input.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Freelance Developer',
    company: 'Self-employed',
    avatar: 'https://i.pravatar.cc/150?img=5',
    content: 'Finally, a time tracker that doesn\'t interrupt my flow. The weekly reports have helped me optimize my schedule.',
    rating: 5,
  },
  {
    name: 'James Park',
    role: 'Startup Founder',
    company: 'TechFlow',
    avatar: 'https://i.pravatar.cc/150?img=8',
    content: 'Our whole team uses Chronos now. The insights have helped us identify bottlenecks and ship faster.',
    rating: 5,
  },
  {
    name: 'Anna Kowalski',
    role: 'UX Researcher',
    company: 'Notion',
    avatar: 'https://i.pravatar.cc/150?img=9',
    content: 'I love the focus mode feature. It blocks distractions and helps me get into deep work faster than ever.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Senior Developer',
    company: 'Vercel',
    avatar: 'https://i.pravatar.cc/150?img=12',
    content: 'The integrations with GitHub and Linear make tracking development time effortless. Highly recommend!',
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-neutral-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Loved by early testers
          </h2>
          <p className="text-lg text-neutral-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here's what our beta users have to say about Chronos
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-neutral-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-indigo-100/30 dark:hover:shadow-indigo-900/20 transition-all duration-300 relative group"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
              <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-2xl" />

              <div className="relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-neutral-700 dark:text-slate-300 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-neutral-100 dark:ring-neutral-700"
                  />
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500 dark:text-slate-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
