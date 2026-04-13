import { useState, useEffect } from "react";
import { Home, Monitor, BarChart3, Wrench, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { icon: Home, href: "#home", label: "Home" },
    { icon: Monitor, href: "#work", label: "Projects" },
    { icon: BarChart3, href: "#experience", label: "Experience" },
    { icon: Wrench, href: "#tools", label: "Tools" },
    { icon: Mail, href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* Desktop Nav */}
      <div className={`hidden md:flex nav-pill px-2 py-2 gap-1 transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="p-3 rounded-full text-white-subtle hover:text-foreground hover:bg-dark-card transition-all duration-200"
            title={item.label}
          >
            <item.icon size={18} />
          </a>
        ))}
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex items-center justify-between w-full">
        <a href="#home" className="text-foreground text-lg font-bold">RD</a>
        <button
          className="nav-pill p-3 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-xl z-40 animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-xl text-white-muted hover:text-foreground transition-colors"
              >
                <item.icon size={22} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
