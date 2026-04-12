import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 lg:px-12 flex items-center relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="max-w-3xl mx-auto text-center w-full relative">
        <h2 className="section-heading justify-center" data-number="04.">Get In Touch</h2>

        <div className="space-y-6 mt-12">
          <p className="text-slate-custom text-lg leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <p className="text-slate-lightest text-xl">
            Feel free to reach out if you want to collaborate on a project, need help with web development, or just want to connect.
          </p>

          <div className="pt-8">
            <a
              href="mailto:riddhidhawan.work@gmail.com"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-accent to-cyan-accent text-navy px-10 py-4 rounded-xl font-mono text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_40px_hsl(166_100%_70%/0.3)] hover:scale-[1.03] animate-gradient bg-[length:200%_200%]"
            >
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
