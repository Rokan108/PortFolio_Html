import React from "react";
import { ExternalLink, Github } from "lucide-react";
import portfolio from "../assets/images/portfolio.png";
import autoscribe from "../assets/images/autoscribe.png";
import chatpotal from "../assets/images/chatpotal.png";
import speechtotext from "../assets/images/speechtotext.png";
import doyouloveme from "../assets/images/doyouloveme.png";
import invoice from "../assets/images/invoice.png";

export const projectList = [
    {
        image: portfolio,
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
        image: autoscribe,
        title: "AutoScribe",
        technologies: ["React", "FastAPI", "MongoDB"],
        developer: "Akash Gupta",
        description: "An AI meeting assistant that transcribes and summarizes meetings.",
        status: "Ongoing",
        rating: "9.6",
        live: "https://autoscribee.vercel.app/",
        github: "",
    },
    {
        image: chatpotal,
        title: "Chat Portal by Akash",
        technologies: ["React", "FastAPI", "Tailwind"],
        developer: "Akash Gupta",
        description: "A decentralized AI chat platform that supports multiple LLMs with privacy-first design.",
        status: "Completed",
        rating: "9.6",
        live: "https://chatpotalbyakash.netlify.app/",
        github: "https://github.com/akash/chatportal",
    },
    {
        image: speechtotext,
        title: "SpeechToTextJS",
        technologies: ["React", "JavaScript", "Netlify"],
        developer: "Akash Gupta",
        description: "A web application that converts spoken language into written text using browser-based speech recognition.",
        status: "Completed",
        rating: "9.2",
        live: "https://speechtotextjs.netlify.app/",
        github: "",
    },
    {
        image: doyouloveme,
        title: "DoYouLoveMeAK",
        technologies: ["React", "JavaScript", "Netlify"],
        developer: "Akash Gupta",
        description: "A simple and playful web app that lets users interact with a cute 'Do You Love Me?' prompt.",
        status: "Completed",
        rating: "9.0",
        live: "https://doyoulovemeak.netlify.app/",
        github: ""
    },
    {
        image: invoice,
        title: "Invoice Generator",
        technologies: ["React", "TailwindCSS", "jsPDF", "html2canvas"],
        developer: "Akash Gupta",
        description: "A professional invoice generator web app designed for IT service agencies and freelancers.",
        status: "Completed",
        rating: "9.5",
        live: "https://invoice-generater-two.vercel.app/",
        github: ""
    }
];

const techColors = {
    React: "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/30",
    Tailwind: "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/30",
    TailwindCSS: "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/30",
    Vite: "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/30",
    FastAPI: "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/30",
    MongoDB: "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/30",
    JavaScript: "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/30",
    Netlify: "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/30",
    jsPDF: "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/30",
    html2canvas: "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/30",
    default: "bg-[var(--color-primary)]/10 text-[var(--color-text)] border-[var(--color-primary)]/30",
};

const ProjectCard = React.memo(({
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
        <div className="project-card cursor-target w-full max-w-md bg-[var(--color-surface)] rounded-2xl overflow-hidden border-2 border-[var(--color-primary)]/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,194,63,0.4)] hover:border-[var(--color-primary)]">
            {/* Image */}
            {image && (
                <div className="w-full aspect-video overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                        width="600"
                        height="338"
                    />
                </div>
            )}

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
                {/* Title & Rating */}
                <div className="flex items-start justify-between gap-2">
                    <h2 className="text-xl font-bold text-[var(--color-text)] line-clamp-2 flex-1">
                        {title}
                    </h2>
                    <div className="flex items-center gap-1 text-[var(--color-primary)] text-sm flex-shrink-0">
                        <span>⭐</span>
                        <span className="font-semibold">{rating}</span>
                    </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => {
                        const colorClass = techColors[tech] || techColors.default;
                        return (
                            <span
                                key={index}
                                className={`px-2 py-1 text-xs font-medium border rounded-full ${colorClass}`}
                            >
                                {tech}
                            </span>
                        );
                    })}
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3 leading-relaxed">
                    {description}
                </p>

                {/* Developer + Status */}
                <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-[var(--color-surface-hover)] text-[var(--color-text)] border-[var(--color-primary)]/30">
                        👨‍💻 {developer}
                    </span>
                    <span
                        className={`px-2 py-1 text-xs font-medium border rounded-full ${status === "Completed"
                            ? "bg-green-900/30 text-green-400 border-green-800"
                            : "bg-yellow-900/30 text-yellow-400 border-yellow-800"
                            }`}
                    >
                        🚧 {status}
                    </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-2 flex-wrap">
                    {live ? (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary cursor-target flex items-center gap-2"
                        >
                            <ExternalLink size={18} />
                            Live Demo
                        </a>
                    ) : (
                        <span className="text-sm text-gray-500 italic px-3 py-2 border border-gray-300 rounded-md">
                            🚧 Project is ongoing
                        </span>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary cursor-target flex items-center gap-2"
                        >
                            <Github size={18} />
                            View Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
