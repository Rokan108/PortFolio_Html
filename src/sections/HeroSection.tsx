import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import akash from "@/assets/logo/white.svg";
import RotatingText from "@/components/RotatingText";

// Roles for rotating text
const roles = [
  "Full-Stack Developer",
  "React Specialist",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Tech Explorer",
];

// Social links
const socials = [
  { icon: Github, href: "https://github.com/Rokan108", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/akash-gupta-032114286", label: "LinkedIn" },
  { icon: Mail, href: "mailto:akashgupta108ag@gmail.com", label: "Email" },
];

const HeroSection = memo(() => {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, var(--color-primary) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting tag */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
              <span className="text-sm text-[var(--color-primary)] font-medium">
                Available for opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
              <span className="text-[var(--color-text)]">Hi, I'm </span>
              <span className="text-[var(--color-primary)]">Akash Gupta</span>
            </h1>

            {/* Rotating role */}
            <div className="text-xl sm:text-2xl lg:text-3xl text-[var(--color-text-secondary)] mb-6 h-10">
              <RotatingText
                texts={roles}
                mainClassName="justify-center lg:justify-start"
                staggerFrom="first"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                rotationInterval={3000}
              />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              A passionate developer pursuing <strong className="text-[var(--color-text)]">BSc in Information Technology</strong>,
              crafting beautiful and functional web experiences with modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <motion.button
                onClick={scrollToProjects}
                className="px-8 py-3.5 bg-[var(--color-primary)] text-[var(--color-background)] font-semibold rounded-full hover:shadow-[0_0_30px_rgba(234,194,63,0.4)] transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
              </motion.button>
              <motion.a
                href="#contact"
                className="px-8 py-3.5 border-2 border-[var(--color-primary)]/50 text-[var(--color-primary)] font-semibold rounded-full hover:bg-[var(--color-primary)]/10 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socials.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[var(--color-surface-hover)] border border-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Logo/Avatar */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-[var(--color-primary)]/20 blur-3xl scale-110" />

              {/* Logo container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-transparent p-1">
                <div className="w-full h-full rounded-full bg-[var(--color-background)] flex items-center justify-center border border-[var(--color-primary)]/30">
                  <img
                    src={akash}
                    alt="Akash Gupta"
                    className="w-40 h-40 sm:w-52 sm:h-52 object-contain"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-xs text-[var(--color-text-secondary)]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={18} className="text-[var(--color-primary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;

