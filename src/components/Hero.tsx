import { Github, Linkedin, Mail, FileText, Code } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-500/20 to-teal-500/20 blur-3xl transition-transform duration-700"
        style={{
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-orange-400/20 to-teal-400/20 blur-3xl transition-transform duration-500"
        style={{
          transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
        }}
      />
      <div
        className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-br from-orange-300/20 to-teal-300/20 blur-2xl transition-transform duration-300"
        style={{
          transform: `translate(${mousePosition.x - 100}px, ${mousePosition.y - 100}px)`,
        }}
      />
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 pt-16 overflow-hidden"
    >
      <InteractiveBackground />
      <div className="container mx-auto px-6 py-12 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div
            className={`md:w-1/2 mb-12 md:mb-0 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="text-xl font-medium text-black dark:text-gray-400 mb-3">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-montserrat bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent">
              Sayjan J Singh
            </h1>
            <p className="text-xl md:text-2xl font-medium text-black dark:text-gray-300 mb-6">
              Full Stack & Android Developer
            </p>
            <p className="text-black dark:text-gray-400 max-w-md mb-8">
              Passionate about creating robust, scalable applications with expertise in full-stack development,
              data structures & algorithms, and modern frameworks.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="btn-outline flex items-center gap-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a
                href="#projects"
                className="btn-outline flex items-center gap-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <Code className="w-4 h-4" />
                View Projects
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/sayjan-j-singh/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
              </a>
              <a
                href="https://github.com/Sia714"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-black dark:text-white" />
              </a>
              <a
                href="mailto:sayjan7777@gmail.com"
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-red-500" />
              </a>
              <a
                href="https://leetcode.com/u/Sia714"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                aria-label="LeetCode"
              >
                <FileText className="w-5 h-5 text-orange-500" />
              </a>
            </div>
          </div>

          <div
            className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-portfolio-purple rounded-full opacity-20 animate-pulse-light"></div>
              <div className="absolute top-4 left-4 right-4 bottom-4 bg-portfolio-lightPurple rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg animate-float">
                  <Link to="/videocv">
                    <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg ring-2 ring-green-400 hover:scale-105 transition-all duration-300">
                      <video
                        src="/public/assets/videoCV.mp4"
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover object-right"
                      />
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
