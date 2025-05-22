import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const Certifications = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showAll, setShowAll] = useState(false);

    const topCertifications = [
        {
            title: "Introduction to MongoDB for Students",
            provider: "MongoDB",
            date: "July 2024",
            description: "Fundamentals of MongoDB database management and NoSQL concepts",
            image: "/assets/mongo.jpg",
            credentialUrl: "https://learn.mongodb.com/c/3FzEhdwJSju_NWUMU1d06A"
        },

        {
            title: "Prompt Engineering for ChatGPT",
            provider: "Coursera",
            date: "February 2024",
            description: "Advanced techniques in AI prompt engineering",
            image: "/assets/prompt.png",
            credentialUrl: "https://ibb.co/7dRK8bh4"
        }, {
            title: "Become a Full-Stack Web Developer",
            provider: "LinkedIn Learning",
            date: "February 2023",
            description: "Complete full-stack development training",
            image: "/assets/full.png",
            credentialUrl: "https://www.linkedin.com/learning/certificates/dc461a4001a051ccc94b4516c4629c7c4aea1860fbe8fc006ccf64b8c3d2a709"
        },
        {
            title: "CyberShikshaa Fundamentals",
            provider: "Quick Heal Academy, Microsoft & DSCI",
            date: "February 2023",
            description: "Cybersecurity fundamentals and best practices",
            image: "/assets/csec.png",
            credentialUrl: "https://ibb.co/Y7kxDySR"
        },
        {
            title: "Python (Basic)",
            provider: "HackerRank",
            date: "November 2022",
            description: "Python programming fundamentals",
            image: "/assets/py.png",
            credentialUrl: "https://www.hackerrank.com/certificates/6b5769533377"
        }
    ];

    const allCertifications = [
        {
            title: "Introduction to MongoDB for Students",
            provider: "MongoDB",
            date: "July 2024",
            description: "Fundamentals of MongoDB database management and NoSQL concepts",
            image: "/assets/mongo.jpg",
            credentialUrl: "https://learn.mongodb.com/c/3FzEhdwJSju_NWUMU1d06A"
        }, {
            title: "Computer Architecture And Computer Organization Masterclass",
            provider: "Udemy",
            date: "November 2023",
            description: "Comprehensive understanding of computer architecture and organization principles",
            image: "/assets/cod.jpg",
            credentialUrl: "https://www.udemy.com/certificate/UC-4f5cb46f-81ca-41be-bc26-19e69e0fd588/"
        },
        {
            title: "ChatGPT for Beginners: Save time with Microsoft Excel",
            provider: "Coursera",
            date: "April 2024",
            description: "Learn to leverage ChatGPT for Excel automation and efficiency",
            credentialUrl: "#"
        },
        {
            title: "Prompt Engineering for ChatGPT",
            provider: "Coursera",
            date: "February 2024",
            description: "Advanced techniques in AI prompt engineering",
            image: "/assets/prompt.png",
            credentialUrl: "https://ibb.co/7dRK8bh4"
        },
        {
            title: "Introduction to Large Language Models",
            provider: "Coursera",
            date: "January 2024",
            description: "Fundamentals of large language models and their applications",
            credentialUrl: "#"
        },
        {
            title: "Introduction to Generative AI",
            provider: "Coursera",
            date: "January 2024",
            description: "Understanding the basics of generative AI technologies",
            credentialUrl: "#"
        },
        {
            title: "Become a Full-Stack Web Developer",
            provider: "LinkedIn Learning",
            date: "February 2023",
            description: "Complete full-stack development training",
            credentialUrl: "https://www.linkedin.com/learning/certificates/dc461a4001a051ccc94b4516c4629c7c4aea1860fbe8fc006ccf64b8c3d2a709"
        }, {
            title: "The Bits and Bytes of Computer Networking",
            provider: "Coursera",
            date: "April 2024",
            description: "Comprehensive understanding of computer networking fundamentals",
            credentialUrl: "#"
        },

        {
            title: "CyberShikshaa Fundamentals",
            provider: "Quick Heal Academy, Microsoft & DSCI",
            date: "February 2023",
            description: "Cybersecurity fundamentals and best practices",
            credentialUrl: "https://ibb.co/Y7kxDySR"
        },
        {
            title: "Python (Basic)",
            provider: "HackerRank",
            date: "November 2022",
            description: "Python programming fundamentals",
            credentialUrl: "https://www.hackerrank.com/certificates/6b5769533377"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    };

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("certifications");
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
        <section id="certifications" className="relative py-20 overflow-hidden">
            <AnimatedBackground />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex items-center justify-between mb-8">
                    <h2 className={`section-title transition-all duration-700 text-black dark:text-white ${isVisible ? "opacity-100" : "opacity-0 -translate-y-4"
                        }`}>
                        Certifications <button
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center gap-2 text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors text-sm"
                        >({showAll ? (
                            <>
                                <span>Hide All</span>
                                <ChevronUp className="w-4 h-4" />
                            </>
                        ) : (
                            <>
                                <span>View All</span>
                                <ChevronDown className="w-4 h-4" />
                            </>
                        )})
                        </button>
                    </h2>

                </div>

                {!showAll && (
                    <div
                        className={`mt-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"
                            }`}
                    >
                        <Slider {...settings}>
                            {topCertifications.map((cert, index) => (
                                <div key={index} className="px-4">
                                    <div className="bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-lg shadow-lg p-6 flex h-full border border-black/20 dark:border-white/20">
                                        <div className="w-48 h-auto rounded-lg overflow-hidden mr-6">
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="w-full h-full object-cover object-center"
                                                loading="lazy"
                                            />
                                        </div>

                                        <div className="flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center mb-2">
                                                    <Award className="w-6 h-6 text-black dark:text-white mr-2" />
                                                    <h3 className="text-xl font-semibold text-black dark:text-white">{cert.title}</h3>
                                                </div>

                                                <div className="text-black/80 dark:text-white/80 mb-1">
                                                    {cert.provider}
                                                </div>
                                                <div className="text-black/80 dark:text-white/80 mb-2">
                                                    {cert.date}
                                                </div>
                                                <p className="text-black dark:text-white mb-3">
                                                    {cert.description}
                                                </p>
                                            </div>

                                            <a
                                                href={cert.credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-black/10 dark:bg-black/40 rounded-lg text-black dark:text-white hover:bg-black/20 dark:hover:bg-black/60 transition-colors border border-black/20 dark:border-white/20 hover:border-black/30 dark:hover:border-white/30"
                                            >
                                                <span className="text-sm font-medium">View Credential</span>
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}

                {showAll && (
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {allCertifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-black/20 dark:border-white/20"
                            >
                                <div className="flex items-center mb-2">
                                    <Award className="w-6 h-6 text-black dark:text-white mr-2" />
                                    <h3 className="text-xl font-semibold text-black dark:text-white">{cert.title}</h3>
                                </div>
                                <div className="text-black/80 dark:text-white/80 mb-1">
                                    {cert.provider}
                                </div>
                                <div className="text-black/80 dark:text-white/80 mb-2">
                                    {cert.date}
                                </div>
                                <p className="text-black dark:text-white mb-3">
                                    {cert.description}
                                </p>
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-black/10 dark:bg-black/40 rounded-lg text-black dark:text-white hover:bg-black/20 dark:hover:bg-black/50 transition-colors border border-black/20 dark:border-white/20 hover:border-black/30 dark:hover:border-white/30"
                                >
                                    <span className="text-sm font-medium">View Credential</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Certifications; 