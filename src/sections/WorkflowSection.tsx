import { memo } from "react";
import { motion } from "framer-motion";
import { Lightbulb, PenTool, Code, TestTube, Rocket, RefreshCw } from "lucide-react";

// Workflow steps
const steps = [
    {
        icon: Lightbulb,
        title: "Discovery",
        description: "Understanding your requirements, goals, and vision for the project.",
        color: "#EAC23F",
    },
    {
        icon: PenTool,
        title: "Design",
        description: "Creating wireframes and visual designs that align with your brand.",
        color: "#EAC23F",
    },
    {
        icon: Code,
        title: "Development",
        description: "Building the application with clean, maintainable code.",
        color: "#EAC23F",
    },
    {
        icon: TestTube,
        title: "Testing",
        description: "Rigorous testing to ensure quality and reliability.",
        color: "#EAC23F",
    },
    {
        icon: Rocket,
        title: "Deployment",
        description: "Launching your application to production environments.",
        color: "#EAC23F",
    },
    {
        icon: RefreshCw,
        title: "Iterate",
        description: "Continuous improvement based on feedback and analytics.",
        color: "#EAC23F",
    },
];

const WorkflowSection = memo(() => {
    return (
        <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8">
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
                        How I Work
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
                        <span className="text-[var(--color-text)]">My </span>
                        <span className="text-[var(--color-primary)]">Process</span>
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        A structured approach to building successful digital products from concept to launch.
                    </p>
                </motion.div>

                {/* Workflow Steps */}
                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent -translate-y-1/2" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                className="relative text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {/* Step Number */}
                                <motion.div
                                    className="relative mx-auto mb-4 w-16 h-16 rounded-2xl bg-[var(--color-surface-hover)] border border-[var(--color-primary)]/20 flex items-center justify-center group cursor-default"
                                    whileHover={{
                                        scale: 1.1,
                                        borderColor: "rgba(234,194,63,0.5)",
                                        backgroundColor: "rgba(234,194,63,0.1)"
                                    }}
                                >
                                    <step.icon size={28} className="text-[var(--color-primary)]" />
                                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-primary)] text-[var(--color-background)] text-xs font-bold flex items-center justify-center">
                                        {index + 1}
                                    </span>
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

WorkflowSection.displayName = "WorkflowSection";

export default WorkflowSection;
