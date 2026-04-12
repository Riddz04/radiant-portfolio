import { Heart, Github, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center border-t border-navy-lightest/30">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex items-center justify-center space-x-2 text-slate-custom text-sm">
          <span>Built with</span>
          <Heart size={16} className="text-green-accent animate-pulse" fill="currentColor" />
          <span>by</span>
          <a href="#home" className="link-underline">Riddhi Dhawan</a>
        </div>

        <div className="flex items-center justify-center space-x-4 text-slate-custom font-mono text-xs">
          <a href="https://github.com/Riddz04" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-green-accent transition-colors">
            <Github size={14} />
            <span>View Source</span>
          </a>
          <span className="text-navy-lightest">•</span>
          <a href="https://github.com/Riddz04" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-green-accent transition-colors">
            <Star size={14} />
            <span>Star on GitHub</span>
          </a>
        </div>

        <p className="text-slate-custom/60 font-mono text-xs">
          Designed & Built by Riddhi Dhawan © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
