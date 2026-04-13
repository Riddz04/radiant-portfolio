import { Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-baseline gap-4 mb-4">
          <h2 className="section-title text-[clamp(2rem,4vw,3rem)]">LET'S WORK</h2>
          <h2 className="section-title-outline text-[clamp(2rem,4vw,3rem)]">TOGETHER</h2>
        </div>
      </div>

      {/* Contact Button */}
      <a
        href="mailto:riddhidhawan.work@gmail.com"
        className="inline-flex items-center gap-3 bg-accent-orange text-foreground font-bold py-4 px-8 rounded-xl hover:brightness-110 transition-all text-lg"
      >
        <Mail size={20} />
        <span>Contact Me</span>
        <ArrowRight size={20} />
      </a>
    </section>
  );
};

export default Contact;
