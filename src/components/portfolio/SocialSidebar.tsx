import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const SocialSidebar = () => {
  const socials = [
    { icon: Github, href: "https://github.com/Riddz04", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/riddhidhawan/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/RiddhiDhawan4", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Mail, href: "mailto:riddhidhawan.work@gmail.com", label: "Email" },
  ];

  return (
    <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center space-y-5 z-40">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-light hover:text-green-accent hover:-translate-y-1 transition-all duration-300"
            aria-label={social.label}
          >
            <Icon size={20} />
          </a>
        );
      })}
      <div className="w-px h-24 bg-gradient-to-t from-slate-light/50 to-transparent" />
    </div>
  );
};

export default SocialSidebar;
