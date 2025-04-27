
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py bg-gray-900 text-white ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <a href="#" className="text-2xl font-bold text-portfolio-purple mb-4">
            Sayjan J Singh
          </a>

          <div className="flex gap-6 mb-6">
            <a
              href="https://www.linkedin.com/in/sayjan-j-singh/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-portfolio-purple transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Sia714"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-portfolio-purple transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/Sia714"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-portfolio-purple transition-colors"
            >
              LeetCode
            </a>
            <a
              href="mailto:sayjan7777@gmail.com"
              className="hover:text-portfolio-purple transition-colors"
            >
              Email
            </a>
          </div>

          <div className="text-gray-400 flex items-center">
            <p>
              &copy; {currentYear} Sayjan J Singh. Built using React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
