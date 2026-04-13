import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:riddhidhawan.work@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-baseline justify-center gap-4 mb-4">
            <h2 className="section-title text-[clamp(2rem,5vw,3.5rem)]">LET'S WORK</h2>
            <h2 className="section-title-outline text-[clamp(2rem,5vw,3.5rem)]">TOGETHER</h2>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-white-subtle text-xs uppercase tracking-widest mb-2 font-semibold">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-dark-surface border border-dark-border rounded-xl px-5 py-4 text-foreground placeholder:text-white-subtle/40 focus:outline-none focus:border-accent-orange transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-white-subtle text-xs uppercase tracking-widest mb-2 font-semibold">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-dark-surface border border-dark-border rounded-xl px-5 py-4 text-foreground placeholder:text-white-subtle/40 focus:outline-none focus:border-accent-orange transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-white-subtle text-xs uppercase tracking-widest mb-2 font-semibold">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full bg-dark-surface border border-dark-border rounded-xl px-5 py-4 text-foreground placeholder:text-white-subtle/40 focus:outline-none focus:border-accent-orange transition-colors resize-none"
              placeholder="Tell me about your project..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent-orange text-foreground font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 hover:brightness-110 transition-all text-lg"
          >
            <span>Submit</span>
            <ArrowRight size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
