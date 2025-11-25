import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import akash from "../assets/logo/white.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Navbar height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMenuOpen(false);
  };

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "Projects", id: "project" },
    { label: "Skills", id: "techstack" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[var(--color-background)]/95 backdrop-blur-xl shadow-lg shadow-[var(--color-primary)]/10"
          : "bg-[var(--color-background)]/50 backdrop-blur-md"
        }`}
      style={{
        borderBottom: scrolled ? "1px solid rgba(124, 58, 237, 0.5)" : "1px solid rgba(124, 58, 237, 0.2)",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick("hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-[2px]"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(124, 58, 237, 0.3)",
                  "0 0 20px rgba(124, 58, 237, 0.6)",
                  "0 0 10px rgba(124, 58, 237, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-full h-full rounded-full bg-[var(--color-background)] flex items-center justify-center overflow-hidden">
                <img
                  src={akash}
                  alt="Akash Gupta Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg gradient-text">Akash Gupta</h1>
              <p className="text-xs text-[var(--color-text-secondary)]">Full-Stack Developer</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 bg-[var(--color-surface)]/50 backdrop-blur-sm rounded-full px-2 py-2 border border-[var(--color-primary)]/30">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="relative px-5 py-2 text-sm font-medium text-[var(--color-text)] rounded-full transition-colors duration-300 hover:text-[var(--color-primary-light)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="relative z-10">{item.label}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full opacity-0"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.6)]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Sparkles size={18} />
            <span>Hire Me!</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-primary)]/30 text-[var(--color-text)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[var(--color-surface)]/95 backdrop-blur-xl border-t border-[var(--color-primary)]/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-3">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left px-4 py-3 rounded-lg text-[var(--color-text)] font-medium transition-all duration-300 hover:bg-[var(--color-primary)]/20 hover:text-[var(--color-primary-light)]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 mt-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-semibold rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles size={18} />
                <span>Hire Me!</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
