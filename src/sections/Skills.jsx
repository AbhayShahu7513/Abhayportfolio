// src/sections/Skills.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = {
  'Frontend': [
    { name: 'React.js', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Bootstrap', level: 85 },
  ],
  'Backend': [
    { name: 'Python', level: 90 },
    { name: 'Django', level: 92 },
    { name: 'Django REST Framework', level: 88 },
  ],
  'Database': [
    { name: 'MySQL', level: 85 },
    { name: 'SQLite', level: 80 },
  ],
  'Tools & Others': [
    { name: 'Git/GitHub', level: 85 },
    { name: 'Postman', level: 82 },
    { name: 'Power BI', level: 78 },
    { name: 'Crystal Reports', level: 75 },
    { name: 'Excel', level: 85 },
  ],
};

const SkillBar = ({ name, level, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 text-sm">{name}</span>
        <span className="text-cyan-400 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Constantly expanding my toolkit to build better, faster, and more scalable applications.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold gradient-text mb-4">{category}</h3>
              {skillList.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} index={index} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;