import { useEffect, useState } from "react";

const InteractiveBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
                className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-500/20 to-teal-500/20 blur-3xl transition-transform duration-700"
                style={{
                    transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
                }}
            />
            <div
                className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-orange-400/20 to-teal-400/20 blur-3xl transition-transform duration-500"
                style={{
                    transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
                }}
            />
            <div
                className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-br from-orange-300/20 to-teal-300/20 blur-2xl transition-transform duration-300"
                style={{
                    transform: `translate(${mousePosition.x - 100}px, ${mousePosition.y - 100}px)`,
                }}
            />
        </div>
    );
};

const VideoCV = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-orange-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
            <InteractiveBackground />
            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-black dark:text-white">
                        Video CV
                    </h1>
                    <p className="text-center text-black/80 dark:text-white/80 mb-12 max-w-2xl mx-auto">
                        Watch my video CV to learn more about my journey, skills, and aspirations in the tech industry.
                    </p>
                </div>

                <div className={`flex items-center justify-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                    <div className="bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-black/20 dark:border-white/20">
                        <video
                            src="/assets/videoCV.mp4"
                            controls
                            className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    <p className="text-black/80 dark:text-white/80">
                        Feel free to reach out if you'd like to discuss potential opportunities!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoCV;