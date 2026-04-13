import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-dark-border mt-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-white-subtle text-sm">
          © {new Date().getFullYear()} Riddhi Dhawan. All rights reserved.
        </p>
        <a
          href="#home"
          className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-foreground hover:bg-accent-orange hover:border-accent-orange transition-all"
        >
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
