import React, { useState, useEffect, useRef } from "react";
import ProjectCard, { projectList } from "@/components/ProjectCard";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);

  // Auto slide forward only (no jump back)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === projectList.length - 1 ? prev : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Adjust height dynamically based on active card
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const activeCard = container.querySelector(".active-card");
      if (activeCard) {
        container.style.height = `${activeCard.offsetHeight}px`;
      }
    }
  }, [activeIndex]);

  // Handle touch start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Handle touch end
  const handleTouchEnd = () => {
    const distance = touchEndX.current - touchStartX.current;
    if (Math.abs(distance) > 50) {
      if (distance < 0) handleNext();
      else handlePrevious();
    }
  };

  // Handle mouse drag for desktop
  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    const distance = e.clientX - dragStartX.current;
    if (Math.abs(distance) > 50) {
      if (distance < 0) handleNext();
      else handlePrevious();
    }
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === projectList.length - 1 ? prev : prev + 1
    );
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <section id="project"
      className="w-full flex flex-col items-center justify-center py-10 px-3 sm:px-6 lg:px-8 overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-8 text-center">
        My Projects
      </h2>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="relative w-full max-w-6xl flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
      >
        <div
          className="flex transition-transform duration-[900ms] ease-[cubic-bezier(0.45,0,0.55,1)]"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            width: `${projectList.length * 100}%`,
          }}
        >
          {projectList.map((project, index) => (
            <div
              key={index}
              className={`flex justify-center items-center w-full flex-shrink-0 px-2 transition-all ${
                activeIndex === index ? "active-card scale-100" : "scale-95 opacity-90"
              }`}
            >
              <div className="w-[95%] sm:w-[85%] md:w-[70%] lg:w-[55%] xl:w-[45%] flex justify-center">
                <ProjectCard {...project} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {projectList.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-[var(--color-primary)] scale-110 shadow-md shadow-[var(--color-primary-light)]"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
