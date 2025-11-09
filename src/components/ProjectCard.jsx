import React from "react";
import NotFound from "./NotFound";
import { ExternalLink, Github } from "lucide-react";
export const projectList = [
    {
        image: "src/assets/images/portfolio.png",
        title: "Portfolio Website",
        technologies: ["React", "Tailwind", "Vite"],
        developer: "Akash Gupta",
        description: "A personal portfolio showcasing my projects, skills, and contact info.",
        status: "Completed",
        rating: "9.2",
        live: "https://akashgupta108.vercel.app/",
        github: "",
    },
    {
        image: "src/assets/images/autoscribe.png",
        title: "AutoScribe",
        technologies: ["React", "FastAPI", "MongoDB"],
        developer: "Akash Gupta",
        description:
            "An AI meeting assistant that transcribes and summarizes meetings.",
        status: "Ongoing",
        rating: "9.6",
        live: "",
        github: "",
    },
    {
        image: "src/assets/images/chatpotal.png",
        title: "Chat Portal by Akash",
        technologies: ["React", "FastAPI", "Tailwind"],
        developer: "Akash Gupta",
        description:
            "A decentralized AI chat platform that supports multiple LLMs with privacy-first design.",
        status: "Completed",
        rating: "9.6",
        live: "https://chatpotalbyakash.netlify.app/",
        github: "https://github.com/akash/chatportal",
    },
    {
        image: "src/assets/images/speechtotext.png",
        title: "SpeechToTextJS",
        technologies: ["React", "JavaScript", "Netlify"],
        developer: "Akash Gupta",
        description: "A web application that converts spoken language into written text using browser-based speech recognition. The tool leverages React for a smooth user interface and offers fast, real-time transcription for various use cases including accessibility and productivity.",
        status: "Completed",
        rating: "9.2",
        live: "https://speechtotextjs.netlify.app/",
        github: "",
    },
    {
        image: "src/assets/images/doyouloveme.png",
        title: "DoYouLoveMeAK",
        technologies: ["React", "JavaScript", "Netlify"],
        developer: "Akash Gupta",
        description: "A simple and playful web app that lets users interact with a cute 'Do You Love Me?' prompt. The user-friendly interface creates a lighthearted experience built with React, and is freely accessible as a Netlify static site.",
        status: "Completed",
        rating: "9.0",
        live: "https://doyoulovemeak.netlify.app/",
        github: ""
    },
];

const techColors = {
    React: "bg-blue-100 text-blue-600 border-blue-400",
    Tailwind: "bg-sky-100 text-sky-600 border-sky-400",
    Vite: "bg-yellow-100 text-yellow-600 border-yellow-400",
    FastAPI: "bg-emerald-100 text-emerald-600 border-emerald-400",
    MongoDB: "bg-green-100 text-green-600 border-green-400",
    default: "bg-gray-100 text-gray-600 border-gray-400",
};

const ProjectCard = ({
    image,
    title,
    technologies,
    developer,
    description,
    status,
    rating,
    live,
    github,
}) => {
    return (
        <div className="relative group w-full max-w-[600px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] flex-shrink-0 rounded-2xl p-[2px] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary-light)] animate-border">
            {/* Inner Layer */}
            <div className="bg-transparent rounded-2xl p-4 sm:p-6 flex flex-col gap-4 justify-between transition-transform duration-500 group-hover:scale-[1.02] backdrop-blur-md">
                {/* Image */}
                {image && (
                    <div className="w-full aspect-video rounded-xl overflow-hidden border border-[var(--color-primary-light)]">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    </div>
                )}

                {/* Content */}
                <div className="flex flex-col gap-3 text-gray-800">
                    {/* Title */}
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {title}
                    </h2>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => {
                            const colorClass = techColors[tech] || techColors.default;
                            return (
                                <span
                                    key={index}
                                    className={`px-2 py-1 text-xs sm:text-sm font-medium border rounded-full ${colorClass}`}
                                >
                                    {tech}
                                </span>
                            );
                        })}
                    </div>

                    {/* Desktop Details */}
                    <div className="hidden md:block">
                        {/* ⭐ Rating */}
                        <div className="flex items-center gap-1 text-yellow-500 text-sm mt-2">
                            <span>⭐</span>
                            <span className="font-semibold">{rating}</span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                            {description}
                        </p>

                        {/* Developer + Status */}
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-gray-100 text-gray-700 border-gray-400">
                                👨‍💻 {developer}
                            </span>
                            <span
                                className={`px-2 py-1 text-xs font-medium border rounded-full ${status === "Completed"
                                    ? "bg-green-100 text-green-700 border-green-400"
                                    : "bg-yellow-100 text-yellow-700 border-yellow-400"
                                    }`}
                            >
                                🚧 {status}
                            </span>
                        </div>
                    </div>

                    {/* Buttons - Visible on All Devices */}
                    <div className="flex gap-3 mt-3 flex-wrap">
                        {live ? (
                            <a
                                href={live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center gap-2"
                            >
                                <ExternalLink size={18} />
                                Live Demo
                            </a>
                        ) : (
                            <span className="text-sm text-gray-500 italic px-3 py-2 border border-gray-300 rounded-md">
                                🚧 Project is ongoing
                            </span>
                        )}
                        {github ? (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center gap-2"
                            >
                                <Github size={18} />
                                View Code
                            </a>
                        ) : (
                            <span className="text-sm text-gray-500 italic px-3 py-2 border border-gray-300 rounded-md">
                                🔒 Private Repository
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
