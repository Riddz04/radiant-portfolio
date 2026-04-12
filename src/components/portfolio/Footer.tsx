import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setLocalTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const menuLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { name: "GitHub", href: "https://github.com/Riddz04" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/riddhidhawan/" },
    { name: "Twitter", href: "https://x.com/RiddhiDhawan4" },
  ];

  const resources = [
    { name: "Resume", href: "/Riddhi_Dhawan.pdf" },
  ];

  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Three Column Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div>
            <h4 className="font-semibold text-foreground mb-4 pb-2 border-b border-border">Menu</h4>
            <div className="space-y-2">
              {menuLinks.map(link => (
                <a key={link.name} href={link.href} className="block text-olive-muted hover:text-foreground transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 pb-2 border-b border-border">Socials</h4>
            <div className="space-y-2">
              {socials.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="block text-olive-muted hover:text-foreground transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 pb-2 border-b border-border">Resources</h4>
            <div className="space-y-2">
              {resources.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="block text-olive-muted hover:text-foreground transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <p className="text-4xl md:text-5xl font-black text-foreground">© {new Date().getFullYear()}</p>
            <p className="text-lg text-foreground font-medium">All rights reserved.</p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="text-sm">
              <p className="text-xs text-olive-muted uppercase tracking-wider">Your Local Time</p>
              <p className="text-foreground font-mono">{localTime}</p>
            </div>

            <a
              href="#home"
              className="w-12 h-12 rounded-full bg-olive flex items-center justify-center text-cream hover:bg-foreground transition-colors"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
