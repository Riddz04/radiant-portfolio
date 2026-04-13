const Experience = () => {
  const experiences = [
    {
      company: "Stealth AI Startup",
      position: "Full-Stack Developer",
      duration: "Nov 2025 – Present",
      description: "Developing a production-grade Next.js application with end-to-end functionality, integrating Supabase backend services and deploying the product MVP.",
      link: "#",
    },
    {
      company: "BlueStock Fintech",
      position: "SDE Intern",
      duration: "Nov 2025 – Dec 2025",
      description: "Worked on developing core product features for Bluestock's fintech platform, building scalable APIs and optimizing backend performance.",
      link: "#",
    },
    {
      company: "DRDO",
      position: "Summer Research Intern",
      duration: "June 2025 – July 2025",
      description: "Explored the electrical-software interface via semiconductor simulations. Conducted Monte Carlo analysis on MCT photodiodes and built a simulation dashboard.",
      link: "#",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-16">
          <h2 className="section-title text-[clamp(2rem,5vw,3.5rem)]">2+ YEARS OF</h2>
          <h2 className="section-title-outline text-[clamp(2rem,5vw,3.5rem)]">EXPERIENCE</h2>
        </div>

        {/* Experience List */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <a
              key={index}
              href={exp.link}
              className="experience-card block p-6 md:p-8 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent-orange transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-white-subtle mt-2 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
                <div className="md:text-right flex-shrink-0">
                  <p className="text-white-subtle text-sm font-medium">{exp.position}</p>
                  <p className="text-white-subtle/60 text-xs mt-1">{exp.duration}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
