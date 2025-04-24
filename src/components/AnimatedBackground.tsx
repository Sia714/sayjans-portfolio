import React from 'react';

const AnimatedBackground = () => {
    return (
        <>
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-teal-200 to-orange-300 dark:from-orange-800 dark:via-teal-800 dark:to-orange-900 opacity-90 animate-gradient"></div>

            {/* Animated dots */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-black dark:bg-white opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
                        }}
                    />
                ))}
            </div>

            <style>
                {`
          @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(5px, -5px); }
            50% { transform: translate(-5px, 5px); }
            75% { transform: translate(5px, 5px); }
          }
          
          .animate-gradient {
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
          }
          
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
            </style>
        </>
    );
};

export default AnimatedBackground; 