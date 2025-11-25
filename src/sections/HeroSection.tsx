import { memo } from "react";
import akash from "@/assets/logo/white.svg"
import SplitText from "@/components/reactbit/SplitText";
import RotatingText from "@/components/RotatingText";

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

        {/* Animated Role with RotatingText */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-3">
          <RotatingText
            texts={roles}
            mainClassName="text-[var(--color-primary)] justify-center sm:justify-start"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
          />
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
