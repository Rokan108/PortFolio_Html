import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SkillCardProps {
    icon: ReactNode;
    skillName: string;
    description: string;
    delay?: number;
}

const SkillCard = ({ icon, skillName, description, delay = 0 }: SkillCardProps) => {
    return (
        <motion.div
            className="
                relative group
                bg-[#1F1C19]/80 backdrop-blur-sm
                border border-[var(--color-primary)]/20
                p-6
                shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                transition-all duration-500 ease-out
                cursor-pointer
                overflow-hidden
            "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
        >
            {/* Subtle gradient overlay on hover */}
            <div className="
                absolute inset-0 
                bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-500
                pointer-events-none
            " />

            {/* Soft glow effect on hover */}
            <div className="
                absolute -inset-[1px] 
                bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-primary)]/10 to-transparent
                rounded-2xl
                opacity-0 group-hover:opacity-100
                blur-xl
                transition-opacity duration-500
                -z-10
            " />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                {/* Icon Container */}
                <motion.div
                    className="
                        w-16 h-16
                        flex items-center justify-center
                        bg-[var(--color-surface-hover)]
                        border border-[var(--color-primary)]/10
                        rounded-xl
                        text-4xl
                        text-[var(--color-primary)]
                        shadow-sm
                        group-hover:shadow-md
                        transition-shadow duration-300
                    "
                    whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                    }}
                >
                    {icon}
                </motion.div>

                {/* Skill Name */}
                <h3 className="
                    text-lg font-semibold 
                    text-[var(--color-text)]
                    group-hover:text-[var(--color-primary)]
                    transition-colors duration-300
                ">
                    {skillName}
                </h3>

                {/* Description */}
                <p className="
                    text-sm 
                    text-[var(--color-text-secondary)]
                    leading-relaxed
                    group-hover:text-[var(--color-text)]
                    transition-colors duration-300
                ">
                    {description}
                </p>
            </div>

            {/* Bottom accent line */}
            <motion.div
                className="
                    absolute bottom-0 left-0 right-0
                    h-[2px]
                    bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary)]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                "
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
            />
        </motion.div>
    );
};

export default SkillCard;
