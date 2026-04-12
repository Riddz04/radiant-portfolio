import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Dev.Assist",
      description:
        "A modern web application that helps developers discover, organize, and curate the best resources from across the web, tailored to their specific project needs.",
      video: "https://res.cloudinary.com/dfyuhslyv/video/upload/v1772718463/Untitled_design_kknafg.mp4",
      tags: ["React18", "TypeScript", "Vite", "Radix UI", "Firebase", "React Router", "Tailwind CSS", "Vercel"],
      github: "https://github.com/Riddz04/dev.assist",
      external: "https://dev-assist-green.vercel.app/",
    },
    {
      title: "Career Compass",
      description:
        "An AI-powered platform built for the Amdocs Gen AI Hackathon 2024-2025, offering personalized, unbiased career guidance by combining advanced AI with emotional intelligence.",
      video: "https://res.cloudinary.com/dfyuhslyv/video/upload/v1747576713/mtoefe7k4xiztuske20o.mp4",
      tags: ["Streamlit", "AWS", "Crew.ai", "Langchain", "Flask", "Grok API"],
      github: "https://github.com/Riddz04/CAREER-COMPASS-AI",
      external: "https://www.youtube.com/watch?v=ouY-o1L28Ko",
    },
  ];

  const otherProjects = [
    {
      title: "Captionize",
      description: "A web app that simplifies adding accurate, timestamped captions to media files using AI-powered transcription.",
      tags: ["Next.js", "Node.js", "AWS-S3", "WhisperX", "FFMPEG", "Tailwind CSS"],
      github: "https://github.com/Riddz04/CaptionizeIt",
      external: "https://captionizeit.vercel.app/",
    },
    {
      title: "AI-Podcast Generator",
      description: "A web app that generates podcast episodes using AI-powered transcription and editing tools.",
      tags: ["Next.js", "React", "Express", "OpenAI API", "Elevenlabs API"],
      github: "https://github.com/Riddz04/ai-podcast",
      external: "https://pod-ai-52ct.vercel.app/",
    },
    {
      title: "AI Calendar Booking",
      description: "A conversational AI agent that helps users book appointments on Google Calendar through natural language chat.",
      tags: ["FastAPI", "Streamlit", "LangGraph", "Grok API", "Google Calendar API"],
      github: "https://github.com/Riddz04/ai-please-book-it-im-tired",
      external: null,
    },
    {
      title: "Pig-Fiesta",
      description: "A fun dice game where pigs, luck, and strategy collide! Modern web-based version of the classic Pig dice game.",
      tags: ["HTML", "Tailwind", "Node.js", "Socket.io", "JavaScript"],
      github: "https://github.com/Riddz04/Pig-Fiesta",
      external: "https://pig-fiesta.vercel.app/",
    },
    {
      title: "AI-Summarise-it",
      description: "A web app that summarizes text using AI-powered summarization tools.",
      tags: ["Next.js", "OpenAI API", "Tailwind CSS", "Elevenlabs API", "TypeScript"],
      github: "https://github.com/Riddz04/AI-Summarise-it-for-me",
      external: "https://summarise-it-six.vercel.app/",
    },
    {
      title: "TaskIt — Task Board",
      description: "A modern Kanban-style task management app with drag-and-drop, auth, and persistent state.",
      tags: ["React", "TypeScript", "Zustand", "Firebase", "dnd-kit"],
      github: "https://github.com/Riddz04/task_it",
      external: "https://taskit-kappa.vercel.app/",
    },
  ];

  return (
    <section id="work" className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading" data-number="03.">Some Things I've Built</h2>

        {/* Featured */}
        <div className="space-y-32 mb-32">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? "md:text-right" : ""}`}
            >
              <div className={`md:col-span-7 relative group ${index % 2 === 1 ? "md:col-start-6" : ""}`}>
                <a href={project.external} target="_blank" rel="noopener noreferrer" className="block relative rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-accent/20 to-cyan-accent/10 group-hover:opacity-0 transition-opacity duration-500 z-10" />
                  <video
                    src={project.video}
                    aria-label={project.title}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    playsInline autoPlay muted loop
                  />
                </a>
              </div>

              <div className={`md:col-span-6 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : "md:col-start-7"} relative z-10`}>
                <p className="text-green-accent font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-slate-lightest text-2xl md:text-3xl font-bold mb-6">
                  <a href={project.external} target="_blank" rel="noopener noreferrer" className="hover:text-green-accent transition-colors">
                    {project.title}
                  </a>
                </h3>

                <div className="glass-card p-6 mb-6 hover:transform-none">
                  <p className="text-slate-light leading-relaxed">{project.description}</p>
                </div>

                <ul className={`flex flex-wrap gap-3 font-mono text-xs text-slate-custom mb-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                  {project.tags.map((tag) => (
                    <li key={tag} className="bg-navy-light/60 px-3 py-1 rounded-full border border-navy-lightest/50 hover:border-green-accent/30 transition-colors">{tag}</li>
                  ))}
                </ul>

                <div className={`flex space-x-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-lightest hover:text-green-accent transition-colors hover:scale-110 transform">
                      <Github size={22} />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-slate-lightest hover:text-green-accent transition-colors hover:scale-110 transform">
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-slate-lightest text-2xl font-bold mb-12 text-center">
          Other Noteworthy Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((project, index) => (
            <div key={index} className="glass-card p-7 group glow-border">
              <div className="flex justify-between items-start mb-6">
                <Folder className="text-green-accent group-hover:scale-110 transition-transform" size={40} />
                <div className="flex space-x-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-lightest hover:text-green-accent transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-slate-lightest hover:text-green-accent transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="text-slate-lightest text-lg font-semibold mb-3 group-hover:text-green-accent transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-custom text-sm mb-6 leading-relaxed">{project.description}</p>

              <ul className="flex flex-wrap gap-2 font-mono text-xs text-slate-custom">
                {project.tags.map((tag) => (
                  <li key={tag} className="bg-navy/50 px-2 py-0.5 rounded">{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
