import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import akash from "../assets/logo/white.svg";

// Menu items
const MENU_ITEMS = [
  { label: "Home", id: "hero", path: "/" },
  { label: "Projects", id: "projects", path: "/projects" },
  { label: "Skills", id: "techstack", path: "/#techstack" },
  { label: "About", id: "about", path: "/#about" },
  { label: "Contact", id: "contact", path: "/#contact" },
] as const;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();

  // Scroll handler
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation handler
  const handleNavClick = useCallback((sectionId: string) => {
    // If on projects page, navigate home first
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMenuOpen(false);
    setActiveSection(sectionId);
  }, [location.pathname]);

  const menuItems = useMemo(() => MENU_ITEMS, []);

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[var(--color-background)]/98 backdrop-blur-2xl shadow-2xl"
          : "bg-transparent"
        }`}
      style={{
        borderBottom: scrolled
          ? "1px solid rgba(234, 194, 63, 0.3)"
          : "1px solid transparent",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavClick("hero")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-[var(--color-primary)] p-[2px] shadow-lg shadow-[var(--color-primary)]/30">
                <div className="w-full h-full rounded-full bg-[var(--color-background)] flex items-center justify-center">
                  <img
                    src={akash}
                    alt="AG"
                    className="w-7 h-7 object-contain"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold text-lg text-[var(--color-text)] tracking-tight">
                Akash Gupta
              </p>
              <p className="text-xs text-[var(--color-text-secondary)] -mt-0.5">
                Full-Stack Developer
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="relative px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-300 group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <span className="relative z-10">{item.label}</span>
                {/* Animated underline */}
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[var(--color-primary)] rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "60%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--color-primary)] rounded-full"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)]  font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,194,63,0.5)] hover:bg-[var(--color-primary-light)]"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Sparkles size={16} />
            <span>Hire Me</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[var(--color-surface-hover)] border border-[var(--color-primary)]/20 text-[var(--color-text)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden absolute w-full bg-[var(--color-background)]/98 backdrop-blur-2xl border-t border-[var(--color-primary)]/10"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 py-8 space-y-2">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left px-4 py-3.5 rounded-xl text-[var(--color-text)] font-medium transition-all duration-300 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40" />
                  {item.label}
                </motion.button>
              ))}

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 mt-4 bg-[var(--color-primary)] hover:decoration-pink-500 font-semibold rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.97 }}
              >
                <Sparkles size={18} />
                <span>Let's Work Together</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

