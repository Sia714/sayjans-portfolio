import { useEffect, useState } from "react";
import { BookOpen, Calendar } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  const educationData = [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "B.Tech- CSE (Hons.) Full Stack Software Development",
      timeline: "Since August 2022",
      score: "CGPA: 8.62",
    },
    {
      institution: "Apeejay School",
      location: "Jalandhar, Punjab, India",
      degree: "Intermediate",
      timeline: "April 2020 - March 2022",
      score: "Percentage: 87.6%",
    },
    {
      institution: "Apeejay School",
      location: "Jalandhar, Punjab, India",
      degree: "Matriculation",
      timeline: "April 2018 - March 2020",
      score: "Percentage: 91.6%",
    },
  ];

  const achievements = [
    {
      text: "Solved 300+ problems on leetCode, GFG and CodingNinjas (Till December 2024)",
      badge: null
    },
    {
      text: "Awarded a Gold Badge for C language on HackerRank (July 2023)",
      badge: "/public/assets/cg.png"
    },
    {
      text: "Achieved a Silver Badge for Python on HackerRank (December 2022)",
      badge: "/public/assets/ps.png"
    },
  ];




  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("education");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };


    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="education" className="relative py-20 overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`section-title transition-all duration-700 text-black dark:text-white ${isVisible ? "opacity-100" : "opacity-0 -translate-y-4"
          }`}>
          Education
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-700 delay-200">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center text-black dark:text-white">
              <BookOpen className="w-5 h-5 text-black dark:text-white mr-2" />
              Academic Background
            </h3>

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-black/20 dark:border-white/20"
                >
                  <h4 className="text-lg font-semibold text-black dark:text-white">
                    {edu.institution}
                    <span className="text-sm font-normal text-black/80 dark:text-white/80 ml-2">
                      ({edu.location})
                    </span>
                  </h4>
                  <p className="text-black dark:text-white font-medium mt-1">
                    {edu.degree}
                  </p>
                  <div className="flex items-center text-black/80 dark:text-white/80 mt-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{edu.timeline}</span>
                  </div>
                  <p className="text-black dark:text-white mt-2">
                    {edu.score}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-black dark:text-white">Achievements</h3>
              <div className="bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-lg shadow-md p-6 border border-black/20 dark:border-white/20">
                <ul className="space-y-3 text-black dark:text-white">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3 transition-all hover:text-black/80 dark:hover:text-white/80">
                      {achievement.badge && (
                        <img
                          src={achievement.badge}
                          alt="Badge"
                          className="w-8 h-8 object-contain"
                        />
                      )}
                      <span>{achievement.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
