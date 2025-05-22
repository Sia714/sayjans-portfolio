import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("webDev");
  const [isVisible, setIsVisible] = useState(false);

  const webDevProjects = [
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
      link: "https://quiz-system-psi.vercel.app/",
      github: "https://github.com/Sia714/quiz_system",
    },
    {
      title: "Portfolio Website",
      timeline: "April 2025",
      description:
        "A sleek portfolio website built with React, Tailwind CSS, and Vite, showcasing projects, skills, and contact info with smooth animations and responsive design.",
      features: [
        "Implemented a clean UI using Tailwind CSS for responsive and modern styling.",
        "Utilized Vite for super fast development and optimized build process.",
        "Incorporated dynamic project tabs with smooth transitions and animated backgrounds.",
        "Built reusable React components to keep the codebase modular and maintainable.",
        "Added dark mode toggle for user preference and better accessibility.",
      ],
      tech: "React, Tailwind CSS, JavaScript, Vite",
      link: "https://sayjan-portfolio.vercel.app/",
      github: "https://github.com/Sia714/portfolio-website",
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
      github: "https://github.com/Sia714/Banking-management-system",
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
      github: "https://github.com/Sia714/Maze-solver",
    },
    ,
    {
      title: "Ready, Set, Banquet!",
      timeline: "November 2022 – December 2022",
      description:
        "A front-end restaurant website showcasing menu items, contact details, and booking functionality.",
      features: [
        "Developed APIs to ensure smooth integration between front-end and back-end systems.",
        "Designed UI to highlight restaurant features, menu, and active discounts.",
        "Enabled responsive design for seamless cross-device navigation and mobile compatibility.",
      ],
      tech: "HTML, CSS, JavaScript, Bootstrap",
      link: "#",
      github: "https://github.com/Sia714/Ready-Set-Banquet",
    },

  ];

  const androidProjects = [
    {
      title: "Portfolio App",
      timeline: "February 2025",
      description:
        "Android portfolio application showcasing skills and projects.",
      features: [
        "Integrated Firebase Firestore for real-time data storage and retrieval of certifications and user feedback.",
        "Added dynamic image loading via ImageButton actions and clickable external links for user engagement.",
        "Included a dark mode toggle, input validation, and navigation drawer using menus and intents.",
      ],
      tech: "Kotlin, Android SDK, Firebase Firestore, MVVM, ViewBinding",
      link: "#",
      github: "https://github.com/Sia714/PortfolioApp",
    }, {
      title: "WorkGrow",
      timeline: "March 2024 – April 2024",
      description: "An educational app that connects students with learning resources to boost academic and career growth.",
      features: [
        "Implemented user authentication and real-time chat functionality.",
        "Integrated a dashboard with learning progress tracking and quiz assessments.",
        "Designed intuitive UI with collapsible course sections, topic filtering, and mentor availability indicators.",
      ],
      tech: "Kotlin, Firebase, Android SDK",
      link: "#",
      github: "https://github.com/Sia714/WorkGrow",
    },
    {
      title: "DataFunnel",
      timeline: "April 2025",
      description:
        "Responsive full-stack data visualization dashboard that reads and processes sales funnel data using a custom backend.",
      features: [
        "Built a Node.js API to serve structured JSON data from a local file.",
        "Created interactive funnel metrics and win-rate visualizations using React and MUI.",
        "Used D3.js-inspired styling and responsive layout for optimal cross-device experience.",
      ],
      tech: "Node.js, React.js, Material UI (MUI), JSON",
      link: "#",
      github: "https://github.com/Sia714/DataFunnel",
    },
    {
      title: "Two-Way Pagination App",
      timeline: "February 2024",
      description:
        "Android app showcasing two-way pagination that fetches data as the user scrolls up or down, following the MVVM pattern.",
      features: [
        "Integrated bidirectional data fetching with top and bottom progress bars.",
        "Followed MVVM architecture with clean separation of model, view, and viewmodel.",
        "Added search functionality to filter displayed results in real-time.",
      ],
      tech: "Kotlin, Android SDK, MVVM",
      link: "#",
      github: "https://github.com/Sia714/Two-way-pagination",
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
      github: "https://github.com/Sia714/Android/tree/da0dfdda45acb3aab398fffdcc11ba4813996c3b/FlowerShop",
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`section-title transition-all duration-700 text-black dark:text-white ${isVisible ? "opacity-100" : "opacity-0 -translate-y-4"
          }`}>
          Projects
        </h2>

        <div className="mt-8 flex justify-center transition-all duration-700 delay-200">
          <div className="bg-white/10 dark:bg-black/30 p-1 rounded-full inline-flex border border-black/20 dark:border-white/20">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeTab === "webDev"
                ? "bg-purple-900 dark:bg-portfolio-purple text-white dark:text-black"
                : "text-black hover:bg-black/20 dark:text-white dark:hover:bg-white/20"
                }`}
              onClick={() => activateTab("webDev")}
            >
              Web Projects
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeTab === "android"
                ? "bg-purple-900 dark:bg-portfolio-purple text-white dark:text-black"
                : "text-black hover:bg-black/20 dark:text-white dark:hover:bg-white/20"
                }`}
              onClick={() => activateTab("android")}
            >
              Android
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activeTab === "webDev" &&
            webDevProjects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-black/20 dark:border-white/20 hover:scale-[1.01] transition-all duration-700 delay-${(index + 1) * 100
                  } ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                  }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-black dark:text-white">{project.title}</h3>
                  <span className="text-sm text-black/80 dark:text-white/80">
                    {project.timeline}
                  </span>
                </div>
                <p className="text-black dark:text-white mb-4">
                  {project.description}
                </p>
                <ul className="list-disc pl-5 mb-4 text-black dark:text-white space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="mb-4">
                  <span className="text-sm font-medium text-black dark:text-white">
                    Tech Stack:
                  </span>
                  <p className="text-sm text-black/80 dark:text-white/80">
                    {project.tech}
                  </p>
                </div>
                <div className="flex space-x-4">
                  {project.link!="#"?    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                     className="flex items-center gap-2 px-4 py-2 bg-black/10 dark:bg-black/40 rounded-lg text-black dark:text-white hover:bg-black/20 dark:hover:bg-black/70 transition-colors border border-black/20 dark:border-white/20 hover:border-black/30 dark:hover:border-white/30"
                   >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>:" "}
                     
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black/10 dark:bg-black/40 rounded-lg text-black dark:text-white hover:bg-black/20 dark:hover:bg-black/70 transition-colors border border-black/20 dark:border-white/20 hover:border-black/30 dark:hover:border-white/30"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                </div>
              </div>
            ))}

          {activeTab === "android" &&
            androidProjects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-black/20 dark:border-white/20 hover:scale-[1.01] transition-all duration-700 delay-${(index + 1) * 100
                  } ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                  }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-black dark:text-white">{project.title}</h3>
                  <span className="text-sm text-black/80 dark:text-white/80">
                    {project.timeline}
                  </span>
                </div>
                <p className="text-black dark:text-white mb-4">
                  {project.description}
                </p>
                <ul className="list-disc pl-5 mb-4 text-black dark:text-white space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="mb-4">
                  <span className="text-sm font-medium text-black dark:text-white">
                    Tech Stack:
                  </span>
                  <p className="text-sm text-black/80 dark:text-white/80">
                    {project.tech}
                  </p>
                </div>
                <div className="flex space-x-4">
                  {project.link!="#"?    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                     className="flex items-center gap-2 px-4 py-2 bg-black/10 dark:bg-black/40 rounded-lg text-black dark:text-white hover:bg-black/20 dark:hover:bg-black/70 transition-colors border border-black/20 dark:border-white/20 hover:border-black/30 dark:hover:border-white/30"
                   >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>:" "}
                     
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black/10 dark:bg-black/40 rounded-lg text-black dark:text-white hover:bg-black/20 dark:hover:bg-black/70 transition-colors border border-black/20 dark:border-white/20 hover:border-black/30 dark:hover:border-white/30"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                  
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
