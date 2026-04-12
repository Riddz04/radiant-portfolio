import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences = [
    {
      company: "Stealth AI Startup",
      initial: "S",
      position: "Full-Stack Developer",
      duration: "Nov 2025 – Present",
      location: "Remote",
      responsibilities: [
        "Developing a production-grade Next.js application with end-to-end functionality and scalable architecture.",
        "Integrating Supabase backend services for authentication, data persistence, and real-time updates.",
        "Building and deploying the product MVP, adding payment workflows, and migrating legacy codebases.",
      ],
    },
    {
      company: "BlueStock Fintech",
      initial: "B",
      position: "SDE Intern",
      duration: "Nov 2025 – Dec 2025",
      location: "Remote",
      responsibilities: [
        "Worked on developing and improving core product features for Bluestock's fintech platform.",
        "Collaborated with the engineering team to build scalable APIs and optimize backend performance.",
        "Contributed to frontend components, ensuring smooth UX and reliable data handling.",
      ],
    },
    {
      company: "DRDO",
      initial: "D",
      position: "Summer Research Intern",
      duration: "June 2025 – July 2025",
      location: "New Delhi, India",
      responsibilities: [
        "Explored the electrical-software interface via semiconductor simulations.",
        "Conducted Monte Carlo analysis on MCT photodiodes using statistical models.",
        "Converted C functions to MATLAB and built a simulation dashboard.",
      ],
    },
  ];

  const skills = [
    "React", "TypeScript", "JavaScript", "Node.js",
    "Python", "Tailwind CSS", "PostgreSQL", "Docker",
    "C++", "Git",
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="display-heading text-[clamp(2.5rem,6vw,5rem)]">
            Experience/
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4">
            <span className="section-label">( PROFESSIONAL JOURNEY )</span>
            <p className="text-olive-muted text-lg max-w-xl">
              Building impactful products and scalable solutions across full-stack development and engineering.
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-4 mb-20">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="editorial-card overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center gap-6 text-left"
              >
                <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {exp.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                  <p className="text-olive-muted">{exp.company}</p>
                </div>
                <div className="hidden md:block text-right flex-shrink-0">
                  <p className="text-sm text-olive-muted">{exp.duration}</p>
                  <p className="text-xs text-olive-muted">{exp.location}</p>
                </div>
                {expandedIndex === index ? (
                  <ChevronUp size={20} className="text-olive-muted flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-olive-muted flex-shrink-0" />
                )}
              </button>

              {expandedIndex === index && (
                <div className="px-8 pb-6 animate-fade-in-up">
                  <div className="md:hidden mb-3">
                    <p className="text-sm text-olive-muted">{exp.duration} · {exp.location}</p>
                  </div>
                  <ul className="space-y-3 pl-[4.5rem]">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-olive">
                        <span className="text-olive-muted mt-1.5 text-xs">●</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Skills Marquee */}
        <div className="overflow-hidden py-8 border-t border-b border-border">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...skills, ...skills].map((skill, i) => (
              <span
                key={i}
                className="mx-6 text-olive-muted text-sm font-medium uppercase tracking-wider"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
