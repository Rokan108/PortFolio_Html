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
                bg-white/80 backdrop-blur-sm
                rounded-2xl
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
                bg-gradient-to-br from-white/50 to-transparent 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-500
                pointer-events-none
            " />

            {/* Soft glow effect on hover */}
            <div className="
                absolute -inset-[1px] 
                bg-gradient-to-br from-blue-100/40 via-purple-100/40 to-pink-100/40
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
                        bg-gradient-to-br from-gray-50 to-gray-100/50
                        rounded-xl
                        text-4xl
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
                    text-gray-800
                    group-hover:text-gray-900
                    transition-colors duration-300
                ">
                    {skillName}
                </h3>

                {/* Description */}
                <p className="
                    text-sm 
                    text-gray-600
                    leading-relaxed
                    group-hover:text-gray-700
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
                    bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
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
