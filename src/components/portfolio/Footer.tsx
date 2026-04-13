import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setLocalTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-dark-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h4 className="text-2xl font-black text-foreground mb-2">RD.</h4>
            <p className="text-white-subtle text-sm leading-relaxed">
              Building digital products with passion and precision.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-white-subtle font-semibold mb-4">Menu</h5>
            <div className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Projects", href: "#work" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <a key={link.name} href={link.href} className="block text-white-muted hover:text-foreground transition-colors text-sm">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-white-subtle font-semibold mb-4">Socials</h5>
            <div className="space-y-2">
              <a href="https://github.com/Riddz04" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white-muted hover:text-foreground transition-colors text-sm">
                <Github size={14} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/riddhidhawan/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white-muted hover:text-foreground transition-colors text-sm">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href="https://x.com/RiddhiDhawan4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white-muted hover:text-foreground transition-colors text-sm">
                <Twitter size={14} /> Twitter
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-white-subtle font-semibold mb-4">Resources</h5>
            <div className="space-y-2">
              <a href="/Riddhi_Dhawan.pdf" target="_blank" rel="noopener noreferrer" className="block text-white-muted hover:text-foreground transition-colors text-sm">
                Resume
              </a>
              <a href="mailto:riddhidhawan.work@gmail.com" className="block text-white-muted hover:text-foreground transition-colors text-sm">
                Email Me
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-dark-border">
          <p className="text-white-subtle text-sm">
            © {new Date().getFullYear()} Riddhi Dhawan. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="text-sm">
              <span className="text-white-subtle/60 text-xs uppercase tracking-wider mr-2">Local Time</span>
              <span className="text-foreground font-mono text-sm">{localTime}</span>
            </div>
            <a
              href="#home"
              className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-foreground hover:bg-accent-orange hover:border-accent-orange transition-all"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
