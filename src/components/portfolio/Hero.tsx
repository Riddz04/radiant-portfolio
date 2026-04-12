import { ArrowUpRight } from "lucide-react";
import profileImg from "@/assets/photo2.jpeg";
import activityImage from "@/assets/github-activity.png";

const Hero = () => {
  const currentMonth = new Date().toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const currentYear = new Date().getFullYear().toString().slice(-2);

  return (
    <section id="home" className="min-h-screen pt-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Giant Name */}
        <div className="pt-12 pb-8">
          <h1 className="display-heading text-[clamp(3rem,10vw,8rem)] tracking-[0.08em] uppercase">
            RIDDHI DHAWAN
            <span className="inline-block text-olive-muted ml-4 text-[0.6em]">✳</span>
          </h1>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-16">
          {/* GitHub Activity Card */}
          <div className="md:col-span-4">
            <div className="editorial-card p-5 h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="section-label">GitHub Activity</span>
                <a
                  href="https://github.com/Riddz04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-olive-muted hover:text-foreground transition-colors"
                >
                  @Riddz04
                </a>
              </div>
              <div className="rounded overflow-hidden mb-4">
                <img
                  src={activityImage}
                  alt="GitHub contributions"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex gap-8">
                <div>
                  <p className="text-xs text-olive-muted">This Year</p>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                </div>
                <div>
                  <p className="text-xs text-olive-muted">Longest Streak</p>
                  <p className="text-2xl font-bold text-foreground">30 days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="md:col-span-4">
            <div className="relative h-80 md:h-full rounded-lg overflow-hidden">
              <img
                src={profileImg}
                alt="Riddhi Dhawan"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* CTA */}
            <a
              href="mailto:riddhidhawan.work@gmail.com"
              className="group flex items-center justify-between bg-foreground text-background px-8 py-5 rounded-full font-medium text-lg hover:bg-olive-dark transition-colors"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* Date */}
            <div className="flex-1 flex items-end justify-end">
              <h2 className="display-heading text-[clamp(3rem,8vw,6rem)] text-right leading-none">
                {currentMonth} '{currentYear}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
