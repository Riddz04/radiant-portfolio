import profileImg from "@/assets/photo2.jpeg";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="display-heading text-[clamp(2.5rem,6vw,5rem)]">
            Software Engineer, Builder/
          </h2>
          <span className="section-label mt-4 block">( ABOUT ME )</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-olive text-lg leading-relaxed">
              Hello! I'm Riddhi Dhawan, a software engineer based in New Delhi, India.
              I enjoy creating things that live on the internet, whether that be websites,
              applications, or anything in between.
            </p>
            <p className="text-olive text-lg leading-relaxed">
              My interest in web development started back in 2023 when I decided to try
              editing custom themes — turns out hacking together a custom layout taught
              me a lot about HTML & CSS!
            </p>
            <p className="text-olive text-lg leading-relaxed">
              Fast-forward to today, and I've had the privilege of working at multiple
              startups and organizations. My main focus these days is building accessible,
              inclusive products and digital experiences.
            </p>

            {/* Skills */}
            <div className="pt-6">
              <p className="text-foreground font-semibold mb-4">Technologies I work with:</p>
              <div className="flex flex-wrap gap-2">
                {["C++", "JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL", "Tailwind CSS", "Git", "Docker"].map(skill => (
                  <span key={skill} className="pill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden aspect-[4/5]">
              <img
                src={profileImg}
                alt="Riddhi Dhawan"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
