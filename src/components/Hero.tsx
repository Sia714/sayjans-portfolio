
import { Github, Linkedin, Mail, FileText, Code } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div
            className={`md:w-1/2 mb-12 md:mb-0 transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-xl font-medium text-portfolio-purple mb-3">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-montserrat">
              Sayjan J Singh
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
              Full Stack & Android Developer
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
              Passionate about creating elegant solutions through clean code and innovative design.
              Building web and mobile applications with modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="btn-primary flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a
                href="#projects"
                className="btn-outline flex items-center gap-2"
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
                <Github className="w-5 h-5 text-gray-800 dark:text-white" />
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
            className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-portfolio-purple rounded-full opacity-20 animate-pulse-light"></div>
              <div className="absolute top-4 left-4 right-4 bottom-4 bg-portfolio-lightPurple rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg animate-float">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                    <svg
                      className="w-32 h-32 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
