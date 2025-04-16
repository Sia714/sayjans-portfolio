
import { useEffect, useState } from "react";
import { BookOpen, Calendar } from "lucide-react";

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

  const certifications = [
    "The Bits and Bytes of Computer Networking, Coursera-April 2024",
    "Prompt Engineering for ChatGPT, Coursera-February 2024",
    "Become a Full-Stack Web Developer, LinkedIn Learning-February 2023",
    "CyberShikshaa Fundamentals, conducted by Quick Heal Academy, Microsoft & DSCI-February 2023",
    "Python(Basic), Hackerrank-November 2022",
  ];

  const achievements = [
    "Solved 300+ problems on leetCode, GFG and CodingNinjas (Till December 2024)",
    "Awarded a Gold Badge for C language on HackerRank (July 2023)",
    "Achieved a Silver Badge for Python on HackerRank (December 2022)",
  ];

  const extraCurricular = [
    {
      title: "SOCH: Autism Society of Punjab",
      timeline: "July 2023 – August 2023",
      activities: [
        "Led community outreach efforts, designing awareness posters for the One Race Marathon (Oct 8) and a fundraising exhibition (Aug 28-29).",
        "Volunteered 30+ hours at awareness events, including marathon coordination and fundraising stalls, supporting autism awareness initiatives.",
      ],
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
    handleScroll(); // Check on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2
          className={`section-title transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0 -translate-y-4"
          }`}
        >
          Education
        </h2>

        <div
          className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
        >
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <BookOpen className="w-5 h-5 text-portfolio-purple mr-2" />
              Academic Background
            </h3>

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-semibold">
                    {edu.institution}
                    <span className="text-sm font-normal text-gray-600 dark:text-gray-400 ml-2">
                      ({edu.location})
                    </span>
                  </h4>
                  <p className="text-portfolio-purple font-medium mt-1">
                    {edu.degree}
                  </p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{edu.timeline}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {edu.score}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Certifications</h3>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                  {certifications.map((cert, index) => (
                    <li key={index} className="transition-all hover:text-portfolio-purple">
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Achievements</h3>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="transition-all hover:text-portfolio-purple">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">
                Extracurricular Activities
              </h3>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                {extraCurricular.map((activity, index) => (
                  <div key={index}>
                    <h4 className="font-semibold flex items-center justify-between">
                      <span>{activity.title}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {activity.timeline}
                      </span>
                    </h4>
                    <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                      {activity.activities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
