import { useState } from "react";
import { Github, Instagram, Sun, Moon,Linkedin  } from "lucide-react";
import akash from "../assets/logo/white.svg";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Toggle dark/light mode (updates root CSS vars)
//   useEffect(() => {
//     const root = document.documentElement;
//     if (darkMode) {
//       root.style.setProperty("--color-background", "#0F0F1A");
//       root.style.setProperty("--color-surface", "#1F1F2E");
//       root.style.setProperty("--color-text", "#F3F4F6");
//     } else {
//       root.style.setProperty("--color-background", "#F8FAFC");
//       root.style.setProperty("--color-surface", "#FFFFFF");
//       root.style.setProperty("--color-text", "#0F0F1A");
//     }
//   }, [darkMode]);

  return (
    <footer className="bg-(--color-surface) text-(--color-text) py-6 border-t border-(--color-primary-dark)">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-4">

        {/* Top Row - Social Icons & Text */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full space-y-4 sm:space-y-0">
          {/* Left: Logo & Icons */}
          <div className="flex items-center space-x-4">
            {/* Social icons */}
            <a href="https://linkedin.com/in/akash-gupta-032114286" target="_blank" className="hover:text-(--color-accent) transition">
                <Linkedin size={30}/>
            </a>
            <a
              href="https://github.com/Rokan108"
              target="_blank"
              className="hover:text-(--color-accent) transition"
            >
              <Github size={30} />
            </a>
            <a
              href="https://www.instagram.com/akashguptaa__108/"
              target="_blank"
              className="hover:text-(--color-accent) transition"
            >
              <Instagram size={30} />
            </a>
          </div>

          {/* Center: Copyright */}
          <div className="text-sm text-center">
            © All Rights Reserved
          </div>

          {/* Right: Light/Dark toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn-primary flex items-center space-x-2"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>

        {/* Bottom Logo Centered */}
        <div className="mt-6">
          <img
            src={akash}
            alt="Logo Center"
            className="w-20 h-20 mx-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
