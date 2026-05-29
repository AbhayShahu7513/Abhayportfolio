import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-dark-card/50 border-t border-white/10 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Designed & Developed by Abhay Shahu
          </div>
          
          <div className="flex gap-4">
            <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/abhayshahu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/abhay-shahu-561a212a1?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:abhayshahu7513@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;