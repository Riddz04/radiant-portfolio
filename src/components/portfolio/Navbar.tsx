import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", number: "01" },
    { name: "Experience", href: "#experience", number: "02" },
    { name: "Work", href: "#work", number: "03" },
    { name: "Contact", href: "#contact", number: "04" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-xl shadow-lg border-b border-navy-lightest/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="gradient-text text-xl font-bold font-mono hover:scale-105 transition-transform"
          >
            &lt;RD /&gt;
          </a>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative px-4 py-2 rounded-lg hover:bg-green-tint transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="text-green-accent font-mono text-xs mr-1">
                  {link.number}.
                </span>
                <span className="text-slate-lightest text-sm group-hover:text-green-accent transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
            <a
              href="/Riddhi_Dhawan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 border border-green-accent text-green-accent px-5 py-2 rounded-lg hover:bg-green-tint transition-all font-mono text-sm hover:shadow-[0_0_20px_hsl(166_100%_70%/0.15)]"
            >
              Resume
            </a>
          </div>

          <button
            className="md:hidden text-green-accent hover:bg-green-tint p-2 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-light/95 backdrop-blur-xl border-t border-navy-lightest/30 animate-fade-in-up">
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg hover:bg-green-tint transition-all"
              >
                <span className="text-green-accent font-mono text-sm mr-2">
                  {link.number}.
                </span>
                <span className="text-slate-lightest">{link.name}</span>
              </a>
            ))}
            <a
              href="/Riddhi_Dhawan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-green-accent text-green-accent px-4 py-3 rounded-lg hover:bg-green-tint transition-colors font-mono text-sm mt-4"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
