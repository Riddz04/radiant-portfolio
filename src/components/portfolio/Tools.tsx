const Tools = () => {
  const tools = [
    { name: "React", category: "Frontend Library", icon: "⚛️" },
    { name: "Next.js", category: "React Framework", icon: "▲" },
    { name: "TypeScript", category: "Programming Language", icon: "🔷" },
    { name: "Node.js", category: "Runtime", icon: "🟢" },
    { name: "Python", category: "Programming Language", icon: "🐍" },
    { name: "PostgreSQL", category: "Database", icon: "🐘" },
    { name: "Tailwind CSS", category: "CSS Framework", icon: "🎨" },
    { name: "Docker", category: "Containerization", icon: "🐳" },
    { name: "Git", category: "Version Control", icon: "📦" },
    { name: "Firebase", category: "Backend Service", icon: "🔥" },
    { name: "AWS", category: "Cloud Platform", icon: "☁️" },
    { name: "Figma", category: "Design Tool", icon: "🎯" },
  ];

  return (
    <section id="tools" className="py-20">
      {/* Section Header */}
      <div className="flex items-baseline gap-4 mb-16">
        <h2 className="section-title text-[clamp(2rem,4vw,3rem)]">PREMIUM</h2>
        <h2 className="section-title-outline text-[clamp(2rem,4vw,3rem)]">TOOLS</h2>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card p-5 text-center group cursor-default">
            <div className="text-3xl mb-3">{tool.icon}</div>
            <h4 className="text-sm font-bold text-foreground mb-1">{tool.name}</h4>
            <p className="text-[0.65rem] text-white-subtle">{tool.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
