import React, { memo } from "react";
import ProjectCard, { projectList } from "@/components/ProjectCard";

const Projects = memo(() => {
  return (
    <section
      id="project"
      className="w-full py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Title */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text text-center mb-3">
          My Projects
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] text-sm sm:text-base">
          Explore my latest work and creations
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div key={index} className="flex justify-center">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
