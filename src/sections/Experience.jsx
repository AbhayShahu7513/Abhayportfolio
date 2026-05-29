// src/sections/Experience.jsx
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Database Analyst & Web Application Developer',
    company: 'Comptech Equipments Ltd.',
    location: 'Gandhinagar, Gujarat',
    period: 'Present',
    description: [
      'Administer MySQL database servers — handling backups, performance tuning, indexing, and proactive health monitoring.',
      'Design and execute complex SQL queries for business reporting.',
      'Develop and maintain Crystal Reports for management covering sales performance, inventory, and financial KPIs.',
      'Develop enterprise web applications using Python Django REST Framework with modular backend architecture.',
      'Build and expose RESTful APIs consumed by React.js frontend with JWT authentication.'
    ]
  },
  {
    title: 'Software Customisation Intern',
    company: 'Horizon CAD Solutions',
    location: 'Ahmedabad, Gujarat',
    period: 'May 2024 - Aug 2024',
    description: [
      'Customised CRM, Payroll, and ERP software modules post-sales based on specific client business requirements.',
      'Gathered client requirements and translated them into functional software configurations.',
      'Provided hands-on user training and documentation for customised ERP and CRM deployments.'
    ]
  },
  {
    title: 'Python Developer Intern',
    company: 'InfoLabz Pvt. Ltd.',
    location: 'Ahmedabad, Gujarat',
    period: 'Jul 2023 - Apr 2024',
    description: [
      'Developed full-stack web applications using Python, Django, HTML, CSS, Bootstrap, and SQLite.',
      'Built backend business logic, URL routing, models, views, and templates following Django\'s MVT architecture.',
      'Led development of BookYourEV — a production-ready EV rental platform with multi-module architecture.'
    ]
  }
];

const TimelineItem = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 border-l-2 border-cyan-500/30 last:pb-0"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
      <div className="glass-card p-6 hover:scale-[1.02] transition-transform">
        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
          <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
          <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">{exp.period}</span>
        </div>
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
          <span className="flex items-center gap-1"><Briefcase size={14} /> {exp.company}</span>
          <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
          {exp.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Professional <span>Experience</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A journey of building robust systems, optimizing workflows, and delivering value.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.company} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;