import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pb-20">
      {/* Title */}
      <div className="mb-8">
        <h1 className="section-title text-[clamp(3rem,6vw,5.5rem)]">
          SOFTWARE
        </h1>
        <h1 className="section-title-outline text-[clamp(3rem,6vw,5.5rem)]">
          ENGINEER
        </h1>
      </div>

      {/* Description */}
      <p className="text-white-subtle text-lg max-w-xl leading-relaxed mb-10">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted full-stack products.
      </p>

      {/* Stats */}
      <div className="flex flex-wrap gap-12 mb-10">
        <div>
          <p className="stat-number">+1</p>
          <p className="stat-label">YEARS OF</p>
          <p className="stat-label">EXPERIENCE</p>
        </div>
        <div>
          <p className="stat-number">+10</p>
          <p className="stat-label">PROJECTS</p>
          <p className="stat-label">COMPLETED</p>
        </div>
        <div>
          <p className="stat-number">+2</p>
          <p className="stat-label">COMPANIES</p>
          <p className="stat-label">WORKED AT</p>
        </div>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="accent-card-orange p-6 flex flex-col justify-between min-h-[140px]">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-sm uppercase">Full-Stack Development,</p>
            <p className="font-bold text-sm uppercase">System Design</p>
          </div>
          <div className="flex justify-end mt-3">
            <ArrowRight size={20} />
          </div>
        </div>

        <div className="accent-card-green p-6 flex flex-col justify-between min-h-[140px]">
          <div className="w-10 h-10 rounded-lg bg-black/10 flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-sm uppercase">React, Next.js, Node.js,</p>
            <p className="font-bold text-sm uppercase">TypeScript, Python</p>
          </div>
          <div className="flex justify-end mt-3">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
