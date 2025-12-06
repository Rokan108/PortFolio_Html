import React, { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ProjectCard, { projectList } from "@/components/ProjectCard";

/**
 * FullProjectsPage - Displays all projects in a grid layout
 */
const FullProjectsPage = memo(() => {
    return (
        <div className="min-h-screen bg-[var(--color-background)] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <div className="max-w-7xl mx-auto mb-8">
                <Link
                    to="/"
                    className="
            inline-flex items-center gap-2
            text-[var(--color-text-secondary)]
            hover:text-[var(--color-primary)]
            transition-colors duration-300
          "
                >
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </Link>
            </div>

            {/* Page Title */}
            <motion.div
                className="max-w-7xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text text-center mb-4">
                    All Projects
                </h1>
                <p className="text-center text-[var(--color-text-secondary)] text-base sm:text-lg max-w-2xl mx-auto">
                    A complete collection of my work — web applications, tools, and creative experiments
                </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectList.map((project, index) => (
                        <motion.div
                            key={index}
                            className="flex justify-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Count */}
            <div className="max-w-7xl mx-auto mt-12 text-center">
                <p className="text-[var(--color-text-secondary)] text-sm">
                    Showing {projectList.length} projects
                </p>
            </div>
        </div>
    );
});

FullProjectsPage.displayName = 'FullProjectsPage';

export default FullProjectsPage;
