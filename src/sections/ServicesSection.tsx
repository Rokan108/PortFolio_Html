import { memo } from "react";
import { motion } from "framer-motion";
import { Globe, Server, Brain, Palette, Rocket, Shield } from "lucide-react";

// Services data
const services = [
    {
        icon: Globe,
        title: "Web Application Development",
        description: "Building responsive, scalable web applications with React, Next.js, and modern frameworks.",
        features: ["SPA & MPA", "Progressive Web Apps", "Responsive Design"],
    },
    // {
    //     icon: Server,
    //     title: "API Development",
    //     description: "Designing and building RESTful APIs and backend services that power your applications.",
    //     features: ["REST APIs", "GraphQL", "Microservices"],
    // },
    {
        icon: Brain,
        title: "AI Integration",
        description: "Integrating AI/ML capabilities into applications for intelligent features and automation.",
        features: ["OpenAI APIs", "LLM Integration", "Automation"],
    },
    {
        icon: Palette,
        title: "UI/UX Enhancement",
        description: "Creating beautiful, intuitive interfaces that users love to interact with.",
        features: ["Modern Design", "Animations", "Accessibility"],
    },
    // {
    //     icon: Rocket,
    //     title: "Deployment & DevOps",
    //     description: "Setting up CI/CD pipelines and deploying applications to cloud platforms.",
    //     features: ["Docker", "AWS/GCP", "CI/CD"],
    // },
    {
        icon: Shield,
        title: "Performance Optimization",
        description: "Optimizing applications for speed, SEO, and overall performance.",
        features: ["Core Web Vitals", "SEO", "Caching"],
    },
];

const ServicesSection = memo(() => {
    return (
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface-hover)]/30">
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
                        What I Offer
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
                        <span className="text-[var(--color-text)]">My </span>
                        <span className="text-[var(--color-primary)]">Services</span>
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Comprehensive development services to bring your ideas to life with modern technology and best practices.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="group p-6 rounded-2xl bg-[var(--color-background)] border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                                <service.icon size={28} className="text-[var(--color-primary)]" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">
                                {service.title}
                            </h3>
                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                                {service.description}
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2">
                                {service.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="px-3 py-1 text-xs rounded-full bg-[var(--color-surface-hover)] text-[var(--color-text-secondary)] border border-transparent group-hover:border-[var(--color-primary)]/20 transition-colors"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="text-[var(--color-text-secondary)] mb-4">
                        Interested in working together?
                    </p>
                    <motion.a
                        href="#contact"
                        className="inline-flex px-8 py-3.5 bg-[var(--color-primary)] text-[var(--color-background)] font-semibold rounded-full hover:shadow-[0_0_30px_rgba(234,194,63,0.4)] transition-all duration-300"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Let's Discuss Your Project
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;
