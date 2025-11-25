import { useEffect, useState, useCallback, memo } from "react";
import akash from "@/assets/logo/white.svg"
import SplitText from "@/components/reactbit/SplitText";

// Move roles outside component to prevent recreation
const roles = [
  "💻 Web Developer",
  "⚡ Frontend Developer",
  "🧠 Tech Enthusiast",
  "🚀 Full-Stack Learner",
  "🎨 UI/UX Explorer",
  "🧑‍💻 React Developer",
  "🧩 Problem Solver",
];

const HeroSection = memo(() => {
  const [currentRole, setCurrentRole] = useState(0);

  // Memoized role rotation
  const rotateRole = useCallback(() => {
    setCurrentRole((prev) => (prev + 1) % roles.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(rotateRole, 2000); // Slightly slower for better readability
    return () => clearInterval(interval);
  }, [rotateRole]);

  return (
    <section id="hero"
      className="relative flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between 
                 py-16 px-6 sm:px-12 gap-8 overflow-hidden"
    >
      {/* 🧠 Left (or Top on mobile) - Introduction */}
      <div className="flex flex-col text-center sm:text-left sm:max-w-2xl">
        {/* Greeting */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-primary-light)] mb-2 leading-tight">
          <SplitText text="👋 Hello!" />
          <span className="block text-[var(--color-accent)]">I'm Akash Gupta</span>
        </h1>

        {/* Animated Role */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-3 transition-all duration-500 ease-in-out text-[var(--color-primary)]">
          <span className="relative inline-block animate-fade-in">
            {roles[currentRole]}
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-[var(--color-text)] leading-relaxed">
          I'm a passionate developer currently pursuing my{" "}
          <strong>BSc in Information Technology</strong>. I love turning creative
          ideas into beautiful, responsive, and functional web experiences. My
          focus is on building modern web applications using{" "}
          <strong>React</strong>, <strong>Node.js</strong>, and the latest web
          technologies.
        </p>
      </div>

      {/* 💠 Right (or Bottom on mobile) - Liquid Metal Logo */}
      <div className="flex justify-center items-center sm:justify-end sm:w-1/2 w-full">
        <img
          src={akash}
          alt="Akash Gupta"
          className="object-contain w-80 h-80"
          loading="eager"
          width="320"
          height="320"
        />
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
