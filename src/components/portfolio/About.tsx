import { Code2, Palette, Rocket, Users } from "lucide-react";
import profileImg from "@/assets/photo2.jpeg";
import activityImage from "@/assets/github-activity.png";

const About = () => {
  const skills = [
    "C++", "JavaScript (ES6+)", "TypeScript", "React", "Node.js",
    "Python", "PostgreSQL", "Tailwind CSS", "Git", "Unit Testing",
    "GTM", "Google Analytics", "Microservices",
  ];

  const highlights = [
    { icon: Code2, title: "Clean Code", description: "Maintainable & scalable solutions" },
    { icon: Palette, title: "Design", description: "Beautiful user experiences" },
    { icon: Rocket, title: "Performance", description: "Speed & efficiency first" },
    { icon: Users, title: "Collaboration", description: "Seamless teamwork" },
  ];

  return (
    <div>
      {/* GitHub Activity */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <h3 className="text-2xl font-bold text-slate-lightest mb-6 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-accent animate-pulse" />
          GitHub Activity
        </h3>
        <div className="glass-card p-4 overflow-hidden">
          <img
            src={activityImage}
            alt="GitHub activity"
            className="w-full h-auto object-cover rounded-md"
            loading="lazy"
          />
        </div>
      </div>

      {/* About */}
      <section id="about" className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading" data-number="01.">About Me</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div className="text-slate-custom space-y-4 text-lg leading-relaxed">
                <p>
                  Hello! I'm Riddhi Dhawan, a software engineer based in New Delhi, India.
                  I enjoy creating things that live on the internet, whether that be websites,
                  applications, or anything in between.
                </p>
                <p>
                  My interest in web development started back in 2023 when I decided to try
                  editing custom themes — turns out hacking together a custom layout taught
                  me a lot about HTML & CSS!
                </p>
                <p>
                  Fast-forward to today, and I've had the privilege of working at{" "}
                  <a href="#" className="link-underline">DRDO</a>. My main focus these days
                  is building accessible, inclusive products and digital experiences.
                </p>
              </div>

              <div>
                <p className="text-slate-custom mb-4 font-medium">Technologies I work with:</p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-center space-x-2 text-slate-custom font-mono text-sm group">
                      <span className="text-green-accent group-hover:scale-125 transition-transform">▹</span>
                      <span className="group-hover:text-slate-lightest transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-green-accent/20 to-cyan-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative w-64 h-64 rounded-xl overflow-hidden border-2 border-green-accent/50 group-hover:border-green-accent transition-colors duration-300 animate-pulse-glow">
                  <img
                    src={profileImg}
                    alt="Riddhi Dhawan"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass-card p-6 text-center group cursor-default">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-tint mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-green-accent" />
                  </div>
                  <h4 className="text-slate-lightest font-semibold mb-1">{item.title}</h4>
                  <p className="text-slate-custom text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
