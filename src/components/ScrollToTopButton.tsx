import { useEffect, useState } from "react";
import { ArrowBigUpDash } from 'lucide-react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowBigUpDash size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
