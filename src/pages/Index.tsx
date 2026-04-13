import { useEffect, useState } from "react";
import Navbar from "@/components/portfolio/Navbar";
import ProfileCard from "@/components/portfolio/ProfileCard";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Tools from "@/components/portfolio/Tools";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Navbar />
      
      {/* Main two-column layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Sticky Profile Card */}
          <div className="lg:w-[340px] flex-shrink-0">
            <div className="lg:sticky lg:top-28 lg:h-[calc(100vh-8rem)] lg:flex lg:items-start">
              <ProfileCard />
            </div>
          </div>

          {/* Right: Scrollable Content */}
          <div className="flex-1 min-w-0">
            <main>
              <Hero />
              <Projects />
              <Experience />
              <Tools />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
