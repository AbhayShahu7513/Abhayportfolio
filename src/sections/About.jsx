// src/sections/About.jsx
import { motion } from 'framer-motion';
import { Code2, Database, Server, BarChart3 } from 'lucide-react';

const About = () => {
  const features = [
    { icon: <Code2 size={28} />, title: 'Web Development', desc: 'Django REST Framework & React.js integration' },
    { icon: <Database size={28} />, title: 'Database Expert', desc: 'MySQL, SQLite, Performance Tuning' },
    { icon: <Server size={28} />, title: 'ERP Management', desc: 'Corporate Mumin ERP Lifecycle' },
    { icon: <BarChart3 size={28} />, title: 'Data Analytics', desc: 'Power BI, Crystal Reports, Excel' },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About <span>Me</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            MCA student with professional experience in full-stack development, database administration, 
            and enterprise resource planning systems.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text">Who am I?</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate developer and data analyst currently pursuing my MCA at Loksanya Institute of Computer Applications. 
              With hands-on experience at Comptech Equipments Ltd., I've mastered the art of building robust web applications, 
              managing complex databases, and optimizing ERP systems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My expertise spans across Python Django, REST APIs, React.js frontend integration, MySQL database administration, 
              and creating insightful reports using Crystal Reports and Power BI. I love solving real-world problems through technology.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Code2 size={24} />
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                <Database size={24} />
              </div>
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Server size={24} />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-5 text-center hover:scale-105 transition-transform">
                <div className="text-cyan-400 mb-3 flex justify-center">{feature.icon}</div>
                <h4 className="font-semibold mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;