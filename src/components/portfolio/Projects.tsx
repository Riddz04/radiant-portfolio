import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      number: "01",
      title: "Dev.Assist",
      subtitle: "Developer Resource Hub",
      description:
        "A modern web application that helps developers discover, organize, and curate the best resources from across the web, tailored to their specific project needs.",
      tags: ["React18", "TypeScript", "Vite", "Firebase", "Tailwind CSS"],
      video: "https://res.cloudinary.com/dfyuhslyv/video/upload/v1772718463/Untitled_design_kknafg.mp4",
      github: "https://github.com/Riddz04/dev.assist",
      external: "https://dev-assist-green.vercel.app/",
    },
    {
      number: "02",
      title: "Career Compass",
      subtitle: "AI Career Guidance Platform",
      description:
        "An AI-powered platform built for the Amdocs Gen AI Hackathon 2024-2025, offering personalized, unbiased career guidance by combining advanced AI with emotional intelligence.",
      tags: ["Streamlit", "AWS", "Crew.ai", "Langchain", "Flask"],
      video: "https://res.cloudinary.com/dfyuhslyv/video/upload/v1747576713/mtoefe7k4xiztuske20o.mp4",
      github: "https://github.com/Riddz04/CAREER-COMPASS-AI",
      external: "https://www.youtube.com/watch?v=ouY-o1L28Ko",
    },
    {
      number: "03",
      title: "Captionize",
      subtitle: "AI-Powered Captioning",
      description:
        "A web app that simplifies adding accurate, timestamped captions to media files using AI-powered transcription.",
      tags: ["Next.js", "Node.js", "AWS-S3", "WhisperX", "FFMPEG"],
      github: "https://github.com/Riddz04/CaptionizeIt",
      external: "https://captionizeit.vercel.app/",
    },
    {
      number: "04",
      title: "AI-Podcast Generator",
      subtitle: "AI Content Creation",
      description:
        "A web app that generates podcast episodes using AI-powered transcription and editing tools.",
      tags: ["Next.js", "React", "Express", "OpenAI API", "Elevenlabs API"],
      github: "https://github.com/Riddz04/ai-podcast",
      external: "https://pod-ai-52ct.vercel.app/",
    },
    {
      number: "05",
      title: "AI Calendar Booking",
      subtitle: "Conversational AI Agent",
      description:
        "A conversational AI agent that helps users book appointments on Google Calendar through natural language chat.",
      tags: ["FastAPI", "Streamlit", "LangGraph", "Grok API"],
      github: "https://github.com/Riddz04/ai-please-book-it-im-tired",
      external: null,
    },
    {
      number: "06",
      title: "TaskIt",
      subtitle: "Kanban Task Manager",
      description:
        "A modern Kanban-style task management app with drag-and-drop, auth, and persistent state.",
      tags: ["React", "TypeScript", "Zustand", "Firebase", "dnd-kit"],
      github: "https://github.com/Riddz04/task_it",
      external: "https://taskit-kappa.vercel.app/",
    },
  ];

  return (
    <section id="work" className="dark-section py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="display-heading-light text-[clamp(2.5rem,6vw,5rem)]">
            Selected Works/
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4">
            <span className="text-xs tracking-[0.15em] uppercase text-cream/40">
              ( {projects.length} PROJECTS )
            </span>
            <p className="text-cream/50 text-lg max-w-xl">
              Featured projects that have been meticulously crafted with passion and purpose.
            </p>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-cream/10 rounded-lg overflow-hidden hover:border-cream/25 transition-colors"
            >
              <button
                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                className="w-full text-left"
              >
                <div className="flex items-start gap-6 md:gap-12 p-6 md:p-8">
                  {/* Number */}
                  <span className="text-[clamp(2rem,5vw,4rem)] font-black text-cream/15 leading-none flex-shrink-0">
                    {project.number}.
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-cream/40 text-sm mb-1">{project.subtitle}</p>
                    <h3 className="text-cream text-2xl md:text-3xl font-bold">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="pill-tag-light text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <div className="flex-shrink-0 pt-2">
                    {expandedProject === index ? (
                      <ChevronUp size={20} className="text-cream/40" />
                    ) : (
                      <ChevronDown size={20} className="text-cream/40" />
                    )}
                  </div>
                </div>
              </button>

              {expandedProject === index && (
                <div className="px-6 md:px-8 pb-8 animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-8 pl-0 md:pl-[calc(clamp(2rem,5vw,4rem)+3rem)]">
                    {/* Video/Preview */}
                    {project.video && (
                      <div className="rounded-lg overflow-hidden">
                        <video
                          src={project.video}
                          className="w-full h-64 object-cover"
                          playsInline autoPlay muted loop
                        />
                      </div>
                    )}

                    {/* Details */}
                    <div className="space-y-4">
                      <p className="text-cream/60 leading-relaxed">{project.description}</p>
                      <div className="flex gap-4 pt-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-cream/50 hover:text-cream transition-colors text-sm"
                          >
                            <Github size={18} />
                            <span>Source</span>
                          </a>
                        )}
                        {project.external && (
                          <a
                            href={project.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-cream/50 hover:text-cream transition-colors text-sm"
                          >
                            <ExternalLink size={18} />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
