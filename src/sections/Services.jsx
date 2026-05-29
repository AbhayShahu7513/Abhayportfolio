// src/sections/Services.jsx
import { motion } from 'framer-motion';
import { Code2, Database, Server, BarChart3, LayoutDashboard, Workflow } from 'lucide-react';

const services = [
  { icon: <Code2 size={32} />, title: 'Web Development', desc: 'Full-stack web apps with Django & React.js' },
  { icon: <Workflow size={32} />, title: 'REST API Development', desc: 'Secure, scalable API endpoints with JWT' },
  { icon: <Server size={32} />, title: 'ERP Integration', desc: 'ERP system management & customisation' },
  { icon: <Database size={32} />, title: 'Database Management', desc: 'MySQL optimization & administration' },
  { icon: <BarChart3 size={32} />, title: 'Data Analysis', desc: 'Power BI & Crystal Reports dashboards' },
  { icon: <LayoutDashboard size={32} />, title: 'Dashboard Development', desc: 'Interactive business intelligence dashboards' }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass-card p-6 text-center group cursor-pointer"
    >
      <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
        {service.icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-400 text-sm">{service.desc}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">What I <span>Offer</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive technical services to help businesses grow and optimize their operations.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;