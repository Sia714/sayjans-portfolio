import { Briefcase, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      title: "SDE Intern",
      company: "Magna Opus Software Services Pvt. Ltd.",
      duration: "December 2024 - January 2025",
      description: [
        "Assisted in software development projects, debugging & testing modules.",
        "Worked on database queries & optimizations in MySQL.",
        "Gained exposure to full-stack development workflows.",
      ],
    },
    {
      title: "Training Program",
      company: "LinuxSocials",
      duration: "June 2024 - July 2024",
      description: [
        "Completed training in Data Structures and Algorithms (DSA).",
        "Practiced problem-solving using C++/Java/Python.",
        "Enhanced logical thinking and competitive programming skills.",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("experience");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`section-title transition-all duration-700 text-black dark:text-white ${isVisible ? "opacity-100" : "opacity-0 -translate-y-4"
          }`}>
          Experience
        </h2>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-1 bg-purple-900 dark:bg-portfolio-purple transform md:translate-x-[-50%] rounded-full hidden md:block"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`mb-12 relative transition-all duration-700 delay-${index * 200
                } ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                }`}
            >
              <div
                className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"
                  }`}
              >
                <div className="bg-white/10 dark:bg-black/30 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-black/20 dark:border-white/20">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-5 h-5 text-black dark:text-white mr-2" />
                    <h3 className="text-xl font-semibold text-black dark:text-white">{exp.title}</h3>
                  </div>
                  <p className="text-black dark:text-white font-medium mb-2">
                    {exp.company}
                  </p>
                  <div className="flex items-center text-black/80 dark:text-white/80 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-black dark:text-white">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Timeline dot */}
              <div className="absolute top-6 left-0 md:left-1/2 w-5 h-5 rounded-full bg-purple-900 dark:bg-portfolio-purple border-4 border-white dark:border-gray-800 transform md:translate-x-[-50%] hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
