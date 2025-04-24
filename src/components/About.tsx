import { useEffect, useState } from "react";
import { FaReact, FaJava, FaPython, FaAndroid, FaDatabase, FaCode } from "react-icons/fa";
import { SiKotlin, SiJavascript, SiSpring, SiMongodb, SiGithub, SiHibernate, SiHtml5, SiCss3, SiTailwindcss } from "react-icons/si";
import { TbBrandCpp, TbBrandCSharp, TbApi } from "react-icons/tb";
import AnimatedBackground from "./AnimatedBackground";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C", icon: <TbBrandCSharp className="w-6 h-6" /> },
        { name: "C++", icon: <TbBrandCpp className="w-6 h-6" /> },
        { name: "Kotlin", icon: <SiKotlin className="w-6 h-6" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-6 h-6" /> },
        { name: "Java", icon: <FaJava className="w-6 h-6" /> },
        { name: "Python", icon: <FaPython className="w-6 h-6" /> },
      ],
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "React", icon: <FaReact className="w-6 h-6" /> },
        { name: "Spring Boot", icon: <SiSpring className="w-6 h-6" /> },
        { name: "Hibernate", icon: <SiHibernate className="w-6 h-6" /> },
        { name: "REST APIs", icon: <TbApi className="w-6 h-6" /> },
        { name: "Maven", icon: <FaCode className="w-6 h-6" /> },
        { name: "HTML/CSS", icon: <div className="flex gap-1"><SiHtml5 className="w-6 h-6" /><SiCss3 className="w-6 h-6" /></div> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" /> },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Android Studio", icon: <FaAndroid className="w-6 h-6" /> },
        { name: "SQL", icon: <FaDatabase className="w-6 h-6" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" /> },
        { name: "Github", icon: <SiGithub className="w-6 h-6" /> },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
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
    <section
      id="about"
      className="relative py-20 overflow-hidden"
    >
      <AnimatedBackground />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`section-title transition-all duration-700 text-black dark:text-white ${isVisible ? "opacity-100" : "opacity-0 -translate-y-4"
          }`}>
          About Me
        </h2>

        <div className={`mt-12 transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"
          }`}>
          <div className="bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-8 transition-transform hover:scale-[1.01] border border-black/20 dark:border-white/20">
            <p className="text-black dark:text-white leading-relaxed mb-6">
              I am a passionate Software Developer with expertise in Full Stack Development.
              Currently pursuing a B.Tech in Computer Science with honors in Full Stack Software
              Development at Lovely Professional University, I combine strong theoretical
              knowledge with practical implementation skills.
            </p>


            <p className="text-black dark:text-white leading-relaxed mb-6">
              My journey in technology is driven by problem-solving and creating efficient,
              scalable solutions. I've worked with various technologies across the development
              stack and have experience from internships and personal projects.
            </p>

            <p className="text-black dark:text-white leading-relaxed">
              I enjoy solving complex problems and have strengthened my algorithmic thinking by solving over 300 problems on platforms like LeetCode, GeeksforGeeks, and CodingNinjas. Beyond coding, I'm also passionate about giving back to the community, as demonstrated by my volunteer work with SOCH: Autism Society of Punjab.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className={`mt-16 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"
          }`}>
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-6 transition-all duration-700 delay-${(index + 1) * 100
                  } ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                  } border border-black/20 dark:border-white/20`}
              >
                <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 p-2 rounded-lg bg-black/10 dark:bg-black/30 hover:bg-black/20 dark:hover:bg-black/40 transition-colors"
                    >
                      <span className="text-black dark:text-white">{skill.icon}</span>
                      <span className="text-black dark:text-white">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
