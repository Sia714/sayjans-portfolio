
import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("fullstack");
  const [isVisible, setIsVisible] = useState(false);

  const fullStackProjects = [
    {
      title: "Quiz Management System",
      timeline: "March 2025 – Present",
      description:
        "Role-based web application with separate logins and dashboards for Teachers and Students.",
      features: [
        "Teachers can create quizzes, allow registered students to appear for tests, and view results.",
        "Students can register for quizzes, enroll in courses, and attempt tests.",
        "All actions are restricted to a given timeline to maintain exam integrity.",
      ],
      tech: "React, Node.js, Express.js, MongoDB, Tailwind CSS",
      link: "#",
      github: "#",
    },
    {
      title: "Banking Management System",
      timeline: "January 2025",
      description:
        "Secure banking system with account creation, transactions, and fund transfers.",
      features: [
        "Integrated Spring Data JPA and implemented custom @Query methods",
        "Optimized database queries by 25%",
      ],
      tech: "Spring Boot, MySQL, JPA, React",
      link: "#",
      github: "#",
    },
    {
      title: "Maze Solver",
      timeline: "June 2024 – July 2024",
      description:
        "Web-based maze solver using Prim's algorithm and recursive backtracking.",
      features: [
        "Integrated WASD controls and an auto-solver with 98% accuracy.",
        "Offered three difficulty levels and customizable maze sizes, ensuring a tailored user experience.",
      ],
      tech: "HTML, CSS, JavaScript, Bootstrap",
      link: "#",
      github: "#",
    },
  ];

  const androidProjects = [
    {
      title: "Portfolio App",
      timeline: "February 2025",
      description:
        "Android portfolio application showcasing skills and projects.",
      features: [
        "Implemented MVVM architecture with ViewModel, LiveData, and Repository patterns to separate concerns and improve maintainability.",
        "Integrated Firebase Firestore for real-time data storage and retrieval of certifications and user feedback.",
        "Designed intuitive, scrollable layouts using ViewBinding, ScrollView, GridLayout, and native Android components.",
        "Added dynamic image loading via ImageButton actions and clickable external links for user engagement.",
        "Included a dark mode toggle, input validation, and navigation drawer using menus and intents.",
      ],
      tech: "Kotlin, Android SDK, Firebase Firestore, MVVM, ViewBinding",
      link: "#",
      github: "#",
    },
    {
      title: "Bouquet Buying App",
      timeline: "October 2024",
      description:
        "Multi-page bouquet e-commerce app with various categories.",
      features: [
        "Built a multi-page bouquet e-commerce app, showcasing 6+ bouquet categories.",
        "Integrated smooth scrolling and optimized image loading, reducing UI lag by 30%.",
        "Enhanced UX with custom radio buttons and a gradient fade effect for product descriptions.",
      ],
      tech: "Kotlin, Android SDK",
      link: "#",
      github: "#",
    },
  ];

  const activateTab = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("projects");
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
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2
          className={`section-title transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0 -translate-y-4"
          }`}
        >
          My Projects
        </h2>

        <div
          className={`mt-8 flex justify-center transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-gray-100 dark:bg-gray-700 p-1 rounded-full inline-flex">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === "fullstack"
                  ? "bg-portfolio-purple text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              onClick={() => activateTab("fullstack")}
            >
              Full Stack
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === "android"
                  ? "bg-portfolio-purple text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              onClick={() => activateTab("android")}
            >
              Android
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activeTab === "fullstack" &&
            fullStackProjects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card transition-all duration-700 delay-${
                  (index + 1) * 100
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {project.timeline}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <span className="text-sm font-medium text-portfolio-purple">
                      Tech Stack:
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.tech}
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-portfolio-purple hover:text-portfolio-darkPurple transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-portfolio-purple hover:text-portfolio-darkPurple transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}

          {activeTab === "android" &&
            androidProjects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card transition-all duration-700 delay-${
                  (index + 1) * 100
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {project.timeline}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <span className="text-sm font-medium text-portfolio-purple">
                      Tech Stack:
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.tech}
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-portfolio-purple hover:text-portfolio-darkPurple transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-portfolio-purple hover:text-portfolio-darkPurple transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
