import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    message: "",
    isError: false,
    isSubmitted: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("contact");
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would send the form data to a server
    console.log("Form submitted:", formData);
    // For demonstration, we'll simulate a successful submission
    setFormStatus({
      message: "Thank you for your message! I'll get back to you soon.",
      isError: false,
      isSubmitted: true,
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`section-title transition-all duration-700 text-black dark:text-white ${isVisible ? "opacity-100" : "opacity-0 -translate-y-4"
          }`}>
          Contact
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
          >
            <div className="bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-black/20 dark:border-white/20">
              <h3 className="text-xl font-semibold mb-6 text-black dark:text-white">Get In Touch</h3>
              <p className="text-black dark:text-white mb-8">
                Feel free to reach out if you have any questions or if you'd
                like to discuss potential opportunities. I'm always open to new
                challenges!
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-black dark:text-white mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-black dark:text-white">Email</h4>
                    <a
                      href="mailto:sayjan7777@gmail.com"
                      className="text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors"
                    >
                      sayjan7777@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-black dark:text-white mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-black dark:text-white">Phone</h4>
                    <a
                      href="tel:+919877542077"
                      className="text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors"
                    >
                      +91-9877542077
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-black dark:text-white mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-black dark:text-white">Location</h4>
                    <p className="text-black dark:text-white">
                      Punjab, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-3 text-black dark:text-white">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/sayjan-j-singh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/10 dark:bg-black/30 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-black/20 dark:border-white/20"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5 text-black dark:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Sia714"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/10 dark:bg-black/30 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-black/20 dark:border-white/20"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-5 h-5 text-black dark:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                  <a
                    href="https://leetcode.com/u/Sia714"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/10 dark:bg-black/30 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-black/20 dark:border-white/20"
                    aria-label="LeetCode"
                  >
                    <svg
                      className="w-5 h-5 text-black dark:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
          >
            <div className="bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-black/20 dark:border-white/20">
              <h3 className="text-xl font-semibold mb-6 text-black dark:text-white">Send a Message</h3>

              {formStatus.isSubmitted ? (
                <div
                  className={`p-4 rounded-lg mb-6 ${formStatus.isError
                    ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    }`}
                >
                  {formStatus.message}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-black dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-black/20 dark:border-white/20 bg-white/10 dark:bg-black/30 text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-black dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-black/20 dark:border-white/20 bg-white/10 dark:bg-black/30 text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
                      placeholder="Your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-black dark:text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-md border border-black/20 dark:border-white/20 bg-white/10 dark:bg-black/30 text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-purple-900 dark:bg-purple-600 text-white hover:bg-purple-800 dark:hover:bg-purple-800 transition-colors"
>
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
