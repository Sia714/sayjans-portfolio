
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    handleScroll(); // Check on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className={`section-title transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0 -translate-y-4"
        }`}>
          About Me
        </h2>
        
        <div className={`mt-12 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0 translate-y-4"
        }`}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-transform hover:scale-[1.01]">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm Sayjan J Singh, a passionate developer with expertise in Full Stack and Android development. 
              Currently pursuing my B.Tech in Computer Science with a specialization in Full Stack Software Development at Lovely Professional University with a CGPA of 8.62.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              My journey in technology has equipped me with a diverse skill set spanning from frontend frameworks like React to backend technologies such as Spring Boot. I'm equally comfortable developing native Android applications using Kotlin.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I enjoy solving complex problems and have strengthened my algorithmic thinking by solving over 300 problems on platforms like LeetCode, GeeksforGeeks, and CodingNinjas. Beyond coding, I'm also passionate about giving back to the community, as demonstrated by my volunteer work with SOCH: Autism Society of Punjab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
