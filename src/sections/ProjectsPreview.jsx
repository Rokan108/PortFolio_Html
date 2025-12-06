import React, { memo } from "react";
import { Link } from "react-router-dom";
import ProjectCard, { projectList } from "@/components/ProjectCard";
import { ArrowRight } from "lucide-react";

/**
 * ProjectsPreview - Shows first 3 projects on homepage with "View All" button
 */
const ProjectsPreview = memo(() => {
    // Show only the first 3 projects
    const previewProjects = projectList.slice(0, 3);

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

            {/* Grid Layout - Only 3 projects */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {previewProjects.map((project, index) => (
                        <div key={index} className="flex justify-center">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>

            {/* View All Projects Button */}
            <div className="flex justify-center mt-12">
                <Link
                    to="/projects"
                    className="
            inline-flex items-center gap-3
            px-8 py-4
            bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)]
            text-[var(--color-background)] font-semibold
            rounded-full
            shadow-[0_0_20px_rgba(234,194,63,0.3)]
            hover:shadow-[0_0_30px_rgba(234,194,63,0.6)]
            hover:scale-105
            transition-all duration-300 ease-out
            cursor-pointer
          "
                >
                    <span>View All Projects</span>
                    <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    );
});

ProjectsPreview.displayName = 'ProjectsPreview';

export default ProjectsPreview;
