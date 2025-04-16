
import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "C++", "Kotlin", "JavaScript", "Java", "Python"],
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        "React",
        "Bootstrap",
        "Spring Boot (JPA, JDBC, MySQL)",
        "Hibernate",
        "REST APIs",
        "Maven",
        "HTML/CSS",
        "Tailwind CSS",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: ["Android Studio", "SQL", "MongoDB", "Github"],
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem-Solving Skills",
        "Team Player",
        "Project Management",
        "Adaptability",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2
          className={`section-title transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0 -translate-y-4"
          }`}
        >
          My Skills
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg p-6 transition-all duration-700 delay-${
                (index + 1) * 100
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 text-portfolio-purple">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge transition-all hover:bg-portfolio-purple hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
