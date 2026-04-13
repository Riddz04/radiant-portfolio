import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Dev.Assist",
      subtitle: "Developer Resource Hub",
      description: "A modern web application that helps developers discover, organize, and curate the best resources from across the web.",
      tags: ["React18", "TypeScript", "Vite", "Firebase", "Tailwind CSS"],
      image: "https://res.cloudinary.com/dfyuhslyv/video/upload/v1772718463/Untitled_design_kknafg.mp4",
      isVideo: true,
      github: "https://github.com/Riddz04/dev.assist",
      external: "https://dev-assist-green.vercel.app/",
    },
    {
      title: "Career Compass",
      subtitle: "AI Career Guidance Platform",
      description: "An AI-powered platform offering personalized, unbiased career guidance by combining advanced AI with emotional intelligence.",
      tags: ["Streamlit", "AWS", "Crew.ai", "Langchain", "Flask"],
      image: "https://res.cloudinary.com/dfyuhslyv/video/upload/v1747576713/mtoefe7k4xiztuske20o.mp4",
      isVideo: true,
      github: "https://github.com/Riddz04/CAREER-COMPASS-AI",
      external: "https://www.youtube.com/watch?v=ouY-o1L28Ko",
    },
    {
      title: "Captionize",
      subtitle: "AI-Powered Captioning",
      description: "A web app that simplifies adding accurate, timestamped captions to media files using AI-powered transcription.",
      tags: ["Next.js", "Node.js", "AWS-S3", "WhisperX", "FFMPEG"],
      isVideo: false,
      github: "https://github.com/Riddz04/CaptionizeIt",
      external: "https://captionizeit.vercel.app/",
    },
    {
      title: "AI-Podcast Generator",
      subtitle: "AI Content Creation",
      description: "A web app that generates podcast episodes using AI-powered transcription and editing tools.",
      tags: ["Next.js", "React", "Express", "OpenAI API", "Elevenlabs API"],
      isVideo: false,
      github: "https://github.com/Riddz04/ai-podcast",
      external: "https://pod-ai-52ct.vercel.app/",
    },
    {
      title: "AI Calendar Booking",
      subtitle: "Conversational AI Agent",
      description: "A conversational AI agent that helps users book appointments on Google Calendar through natural language chat.",
      tags: ["FastAPI", "Streamlit", "LangGraph", "Grok API"],
      isVideo: false,
      github: "https://github.com/Riddz04/ai-please-book-it-im-tired",
      external: null,
    },
    {
      title: "TaskIt",
      subtitle: "Kanban Task Manager",
      description: "A modern Kanban-style task management app with drag-and-drop, auth, and persistent state.",
      tags: ["React", "TypeScript", "Zustand", "Firebase", "dnd-kit"],
      isVideo: false,
      github: "https://github.com/Riddz04/task_it",
      external: "https://taskit-kappa.vercel.app/",
    },
  ];

  return (
    <section id="work" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-16">
          <h2 className="section-title text-[clamp(2rem,5vw,3.5rem)]">RECENT</h2>
          <h2 className="section-title-outline text-[clamp(2rem,5vw,3.5rem)]">PROJECTS</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="glass-card group overflow-hidden">
              {/* Preview */}
              <div className="aspect-[4/3] overflow-hidden bg-dark-surface relative">
                {project.isVideo && project.image ? (
                  <video
                    src={project.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    playsInline autoPlay muted loop
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-dark-card to-dark-surface flex items-center justify-center">
                    <span className="text-4xl font-black text-white-subtle/20">{project.title[0]}</span>
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-foreground/20 backdrop-blur flex items-center justify-center text-foreground hover:bg-accent-orange transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-foreground/20 backdrop-blur flex items-center justify-center text-foreground hover:bg-accent-orange transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>
                <p className="text-white-subtle text-sm mb-3">{project.subtitle}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[0.65rem] px-2.5 py-1 rounded-full border border-dark-border text-white-subtle">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[0.65rem] px-2.5 py-1 rounded-full border border-dark-border text-white-subtle">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
