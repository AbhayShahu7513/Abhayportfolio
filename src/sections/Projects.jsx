import { motion } from 'framer-motion';
import { ExternalLink, Github, BarChart3 } from 'lucide-react';

const projects = [
  {
    title: 'Machine Warranty & Service Tracker',
    description: 'Enterprise solution for tracking machine sales, warranty transfers, AMC contracts, and service history across dealer-customer chains with real-time ERP synchronization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    tech: ['Django REST API', 'React.js', 'MySQL', 'Real-time Sync'],
    features: ['Warranty Tracking', 'AMC Contracts', 'Service Dashboards', 'ERP Integration']
  },
  {
    title: 'BookYourEV - EV Rental Platform',
    description: 'Full-stack EV rental platform with three-module architecture (Admin, Customer, Owner) featuring vehicle listings, booking workflow, and payment gateway simulation.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600',
    tech: ['Django', 'SQLite', 'HTML/CSS', 'Bootstrap'],
    features: ['Vehicle Booking', 'Auth System', 'Multi-User Roles', 'Payment Simulation']
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="glass-card overflow-hidden group"
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">{tech}</span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-300">
          {project.features.map((feature, i) => (
            <span key={i} className="flex items-center gap-1"><BarChart3 size={12} /> {feature}</span>
          ))}
        </div>
        
        <div className="flex gap-4 pt-2">
          <a href="#" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-sm transition-colors">
            <ExternalLink size={16} /> Live Demo
          </a>
          <a href="#" className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm transition-colors">
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real-world solutions that demonstrate my ability to build scalable, production-ready applications.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;