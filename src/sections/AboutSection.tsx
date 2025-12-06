import { memo } from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Server, Database, Cloud, Smartphone } from "lucide-react";

// Skills data
const skills = [
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Git", category: "Tools" },
];

// Stats
const stats = [
    { value: "15+", label: "Projects Completed" },
    { value: "2+", label: "Years Learning" },
    { value: "10+", label: "Technologies" },
    { value: "100%", label: "Passion" },
];

// Expertise areas
const expertise = [
    { icon: Code2, title: "Frontend Development", desc: "React, TypeScript, Modern CSS" },
    { icon: Server, title: "Backend Development", desc: "Node.js, Python, APIs" },
    { icon: Database, title: "Database Design", desc: "MongoDB, PostgreSQL, Redis" },
    { icon: Cloud, title: "Cloud & DevOps", desc: "Docker, AWS, CI/CD" },
    { icon: Palette, title: "UI/UX Design", desc: "Figma, Responsive Design" },
    { icon: Smartphone, title: "Mobile Development", desc: "React Native, PWA" },
];

const AboutSection = memo(() => {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-sm text-[var(--color-primary)] font-medium tracking-wider uppercase mb-3 block">
                        About Me
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
                        <span className="text-[var(--color-text)]">Building </span>
                        <span className="text-[var(--color-primary)]">The Future</span>
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        A passionate full-stack developer with a love for creating elegant solutions to complex problems.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl text-[var(--color-text)] mb-6">My Journey</h3>
                        <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                            <p>
                                I'm currently pursuing my <strong className="text-[var(--color-text)]">BSc in Information Technology</strong>,
                                where I've cultivated a deep understanding of software development principles and modern web technologies.
                            </p>
                            <p>
                                My journey into programming started with curiosity and has evolved into a genuine passion for
                                building <strong className="text-[var(--color-text)]">scalable, user-friendly applications</strong> that
                                make a real difference.
                            </p>
                            <p>
                                I believe in writing clean, maintainable code and continuously learning new technologies to
                                stay at the forefront of web development.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="p-6 rounded-2xl bg-[var(--color-surface-hover)] border border-[var(--color-primary)]/10 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -3, borderColor: "rgba(234,194,63,0.3)" }}
                            >
                                <span className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] block mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-sm text-[var(--color-text-secondary)]">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Expertise Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl text-[var(--color-text)] text-center mb-8">
                        What I Do
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {expertise.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="p-6 rounded-2xl bg-[var(--color-surface-hover)]/50 border border-transparent hover:border-[var(--color-primary)]/20 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -4 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                                    <item.icon size={24} className="text-[var(--color-primary)]" />
                                </div>
                                <h4 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-[var(--color-text-secondary)]">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Tags */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl text-[var(--color-text)] mb-6">Technologies I Work With</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill.name}
                                className="px-4 py-2 rounded-full bg-[var(--color-surface-hover)] border border-[var(--color-primary)]/10 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30 transition-all duration-300 cursor-default"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -2 }}
                            >
                                {skill.name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
