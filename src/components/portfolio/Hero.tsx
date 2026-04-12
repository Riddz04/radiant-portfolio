import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-accent/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-accent/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative max-w-7xl w-full">
        <div className="space-y-6">
          <p
            className="text-green-accent font-mono text-base md:text-lg flex items-center gap-2 animate-fade-in-up"
          >
            <Sparkles size={18} className="animate-pulse" />
            Hi, my name is
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="gradient-text">Riddhi Dhawan.</span>
          </h1>

          <h2
            className="text-slate-custom text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            I build things for the web.
          </h2>

          <p
            className="text-slate-custom text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            I'm a software engineer specializing in building exceptional digital
            experiences. Currently, I'm focused on building accessible,
            human-centered products.
          </p>

          <div
            className="flex flex-wrap gap-4 pt-8 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="#work"
              className="group relative flex items-center space-x-2 border border-green-accent text-green-accent px-8 py-4 rounded-lg font-mono overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(166_100%_70%/0.2)]"
            >
              <div className="absolute inset-0 bg-green-tint opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Check out my work</span>
              <ArrowRight
                size={20}
                className="relative group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="#contact"
              className="group flex items-center space-x-2 bg-gradient-to-r from-green-accent to-cyan-accent text-navy px-8 py-4 rounded-lg font-mono font-semibold transition-all duration-300 hover:shadow-[0_0_30px_hsl(166_100%_70%/0.3)] hover:scale-[1.02] animate-gradient bg-[length:200%_200%]"
            >
              <span>Get in touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
