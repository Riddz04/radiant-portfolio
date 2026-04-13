import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import profileImg from "@/assets/photo2.jpeg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-28 pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Profile Card */}
          <div className="lg:col-span-4">
            <div className="profile-card p-6 text-center relative overflow-hidden">
              {/* Decorative dashed border */}
              <div className="absolute -top-4 -left-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] border-2 border-dashed border-accent-orange/40 rounded-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="w-48 h-56 mx-auto mb-4 rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-accent-orange/30 to-transparent z-10" />
                  <img
                    src={profileImg}
                    alt="Riddhi Dhawan"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-dark-bg mb-1">Riddhi Dhawan</h3>
                <div className="flex items-center justify-center gap-1 mb-3">
                  <span className="text-accent-orange text-lg">🔥</span>
                </div>
                <p className="text-dark-bg/60 text-sm leading-relaxed mb-5 px-2">
                  A Software Engineer who builds innovative full-stack solutions with passion.
                </p>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-4">
                  <a href="https://github.com/Riddz04" target="_blank" rel="noopener noreferrer"
                    className="text-dark-bg/40 hover:text-accent-orange transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/riddhidhawan/" target="_blank" rel="noopener noreferrer"
                    className="text-dark-bg/40 hover:text-accent-orange transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://x.com/RiddhiDhawan4" target="_blank" rel="noopener noreferrer"
                    className="text-dark-bg/40 hover:text-accent-orange transition-colors">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Title */}
            <div>
              <h1 className="section-title text-[clamp(3rem,7vw,6rem)]">
                SOFTWARE
              </h1>
              <h1 className="section-title-outline text-[clamp(3rem,7vw,6rem)]">
                ENGINEER
              </h1>
            </div>

            {/* Description */}
            <p className="text-white-subtle text-lg max-w-xl leading-relaxed">
              Passionate about creating intuitive and engaging user experiences. 
              Specialize in transforming ideas into beautifully crafted full-stack products.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-12">
              <div>
                <p className="stat-number">+2</p>
                <p className="stat-label">YEARS OF</p>
                <p className="stat-label">EXPERIENCE</p>
              </div>
              <div>
                <p className="stat-number">+10</p>
                <p className="stat-label">PROJECTS</p>
                <p className="stat-label">COMPLETED</p>
              </div>
              <div>
                <p className="stat-number">+3</p>
                <p className="stat-label">COMPANIES</p>
                <p className="stat-label">WORKED AT</p>
              </div>
            </div>

            {/* Skill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="accent-card-orange p-6 flex flex-col justify-between min-h-[140px]">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
