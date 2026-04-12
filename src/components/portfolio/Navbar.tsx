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
    { name: "Projects", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="text-foreground text-lg font-bold tracking-tight"
          >
            RD<span className="text-olive-muted text-xs align-super">©</span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, i) => (
              <span key={link.name} className="flex items-center">
                <a
                  href={link.href}
                  className="px-3 py-2 text-foreground text-sm font-medium hover:text-olive transition-colors"
                >
                  {link.name}
                </a>
                {i < navLinks.length - 1 && (
                  <span className="text-olive-muted mx-1">|</span>
                )}
              </span>
            ))}
          </div>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-foreground hover:text-olive transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Riddhi_Dhawan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-foreground text-foreground px-4 py-3 rounded-full text-sm mt-4 hover:bg-foreground hover:text-background transition-all"
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
