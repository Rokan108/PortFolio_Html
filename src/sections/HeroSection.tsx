import { useEffect, useState } from "react";
import LiquidMetal from "../components/new/LiquidMetal"; // 👈 your existing component

const roles = [
  "💻 Web Developer",
  "⚡ Frontend Developer",
  "🧠 Tech Enthusiast",
  "🚀 Full-Stack Learner",
  "🎨 UI/UX Explorer",
  "🧑‍💻 React Developer",
  "🧩 Problem Solver",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 1000); // ⏱ change every 1.0 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col  py-16 px-6 sm:px-12 overflow-hidden">
      {/* Halo / Liquid Metal */}
      <div className="absolute bottom-2.5 right-0 flex justify-center opacity-100 -z-10">
        <LiquidMetal />
      </div>

      {/* Greeting */}
      <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-primary-light)] mb-2 leading-tight">
        👋 Hello!{" "}
        <span className="block text-[var(--color-accent)]">I’m Akash Gupta</span>
      </h1>

      {/* Animated Role */}
      <h2 className="text-2xl sm:text-3xl font-semibold mt-3 transition-all duration-500 ease-in-out text-[var(--color-primary)]">
        <span className="relative inline-block animate-fade-in">
          {roles[currentRole]}
        </span>
      </h2>

      {/* Description */}
      <p className="mt-6 text-base sm:text-lg text-[var(--color-text)] max-w-2xl leading-relaxed">
        I’m a passionate developer currently pursuing my{" "}
        <strong>BSc in Information Technology</strong>. I love turning creative
        ideas into beautiful, responsive, and functional web experiences. My
        focus is on building modern web applications using{" "}
        <strong>React</strong>, <strong>Node.js</strong>, and the latest web
        technologies.
      </p>
    </section>
  );
};

export default HeroSection;
