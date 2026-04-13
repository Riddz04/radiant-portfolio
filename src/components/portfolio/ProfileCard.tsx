import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import profileImg from "@/assets/photo2.jpeg";

const ProfileCard = () => {
  return (
    <div className="profile-card p-8 text-center relative overflow-hidden flex flex-col items-center">
      {/* Decorative dashed border curve */}
      <svg
        className="absolute -top-6 -left-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] pointer-events-none"
        viewBox="0 0 400 500"
        fill="none"
      >
        <path
          d="M 350 0 Q 400 150 200 200 Q 0 250 50 500"
          stroke="hsl(var(--accent-orange) / 0.4)"
          strokeWidth="2"
          strokeDasharray="8 6"
          fill="none"
        />
      </svg>

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Profile Image */}
        <div className="w-52 h-64 mb-6 rounded-2xl overflow-hidden relative shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-orange/20 to-transparent z-10 rounded-2xl" />
          <img
            src={profileImg}
            alt="Riddhi Dhawan"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h3 className="text-2xl font-bold text-dark-bg mb-1">Riddhi Dhawan</h3>

        {/* Fire icon */}
        <div className="flex items-center justify-center gap-1 mb-3">
          <div className="w-8 h-8 rounded-full bg-accent-orange/10 flex items-center justify-center">
            <span className="text-accent-orange text-lg">🔥</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-dark-bg/60 text-sm leading-relaxed mb-8 px-4 max-w-[260px]">
          A Software Engineer who has developed countless innovative solutions.
        </p>

        {/* Social Icons - matching reference style */}
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/Riddz04"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-dark-bg/10 flex items-center justify-center text-dark-bg/40 hover:text-accent-orange hover:border-accent-orange/40 transition-all duration-300"
          >
            <Github size={18} />
          </a>
          <a
            href="https://x.com/RiddhiDhawan4"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-dark-bg/10 flex items-center justify-center text-dark-bg/40 hover:text-accent-orange hover:border-accent-orange/40 transition-all duration-300"
          >
            <Twitter size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/riddhidhawan/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-dark-bg/10 flex items-center justify-center text-dark-bg/40 hover:text-accent-orange hover:border-accent-orange/40 transition-all duration-300"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-dark-bg/10 flex items-center justify-center text-dark-bg/40 hover:text-accent-orange hover:border-accent-orange/40 transition-all duration-300"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
