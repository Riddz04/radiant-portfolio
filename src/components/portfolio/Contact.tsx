import { ArrowUpRight, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="dark-section py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Large CTA Text */}
        <div className="text-center mb-12">
          <p className="text-cream/40 text-lg mb-6">
            Your design is a masterpiece waiting to become alive.
          </p>
          <h2 className="display-heading-light text-[clamp(2.5rem,7vw,6rem)] leading-[1.05]">
            Let's Make it
            <br />
            happen
          </h2>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <a
            href="mailto:riddhidhawan.work@gmail.com"
            className="group inline-flex items-center gap-3 bg-cream text-dark px-10 py-5 rounded-full font-semibold text-lg hover:bg-cream-dark transition-colors"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-cream/10 pt-8">
          <div className="flex items-center gap-3">
            <Globe size={16} className="text-cream/40" />
            <div>
              <p className="text-xs text-cream/40 uppercase tracking-wider">Working Globally</p>
              <p className="text-cream/60 text-sm">Available for opportunities</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs text-cream/40 uppercase tracking-wider">For Further Inquiries</p>
            <a
              href="mailto:riddhidhawan.work@gmail.com"
              className="text-cream/60 hover:text-cream transition-colors text-sm"
            >
              ↳ riddhidhawan.work@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
