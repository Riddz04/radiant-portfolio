import { useState } from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Stealth AI Startup",
      position: "Full-Stack Developer",
      duration: "Nov 2025 - Present",
      url: "#",
      responsibilities: [
        "Developing a production-grade Next.js application with end-to-end functionality and scalable architecture.",
        "Integrating Supabase backend services for authentication, data persistence, and real-time updates.",
        "Building and deploying the product MVP, adding payment workflows, and migrating legacy codebases.",
      ],
    },
    {
      company: "BlueStock Fintech",
      position: "SDE Intern",
      duration: "Nov 2025 - Dec 2025",
      url: "https://bluestock.in/",
      responsibilities: [
        "Worked on developing and improving core product features for Bluestock's fintech platform.",
        "Collaborated with the engineering team to build scalable APIs and optimize backend performance.",
        "Contributed to frontend components, ensuring smooth UX and reliable data handling.",
      ],
    },
    {
      company: "DRDO",
      position: "Summer Research Intern",
      duration: "June 2025 - July 2025",
      url: "https://drdo.res.in/drdo/",
      responsibilities: [
        "Explored the electrical-software interface via semiconductor simulations.",
        "Conducted Monte Carlo analysis on MCT photodiodes using statistical models.",
        "Converted C functions to MATLAB and built a simulation dashboard.",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading" data-number="02.">Where I've Worked</h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-none">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left px-5 py-3 font-mono text-sm whitespace-nowrap transition-all duration-300 relative ${
                  activeTab === index
                    ? "text-green-accent bg-green-tint"
                    : "text-slate-custom hover:bg-navy-light hover:text-green-accent"
                }`}
              >
                {/* Active indicator */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ${
                    activeTab === index
                      ? "bg-gradient-to-b from-green-accent to-cyan-accent"
                      : "bg-navy-lightest"
                  }`}
                />
                <div className="flex items-center gap-2">
                  <Briefcase size={14} className={activeTab === index ? "text-green-accent" : "text-slate-custom"} />
                  {exp.company}
                </div>
              </button>
            ))}
          </div>

          <div className="flex-1 glass-card p-8 hover:transform-none">
            <div className="space-y-4">
              <h3 className="text-slate-lightest text-xl md:text-2xl font-semibold">
                {experiences[activeTab].position}{" "}
                <a
                  href={experiences[activeTab].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  @ {experiences[activeTab].company}
                </a>
              </h3>

              <p className="font-mono text-sm text-slate-custom flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-accent inline-block" />
                {experiences[activeTab].duration}
              </p>

              <ul className="space-y-4 mt-6">
                {experiences[activeTab].responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 text-slate-custom group">
                    <span className="text-green-accent mt-1 flex-shrink-0 group-hover:scale-125 transition-transform">▹</span>
                    <span className="group-hover:text-slate-light transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
