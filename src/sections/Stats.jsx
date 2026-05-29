import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, LayoutDashboard } from 'lucide-react';

const stats = [
  { icon: <Code2 size={28} />, value: 15, label: 'Projects Completed', suffix: '+' },
  { icon: <Database size={28} />, value: 25, label: 'APIs Developed', suffix: '+' },
  { icon: <Server size={28} />, value: 8, label: 'Databases Managed', suffix: '+' },
  { icon: <LayoutDashboard size={28} />, value: 12, label: 'ERP Modules Handled', suffix: '+' }
];

const Counter = ({ value, suffix, label, icon }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3, triggerOnce: true }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [value, hasAnimated]);

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6 text-center"
    >
      <div className="text-cyan-400 flex justify-center mb-3">{icon}</div>
      <div className="text-3xl md:text-4xl font-bold gradient-text">
        {count}{suffix}
      </div>
      <p className="text-gray-400 text-sm mt-2">{label}</p>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;