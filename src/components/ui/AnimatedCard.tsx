import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
    children: ReactNode;
    delay?: number;
    glowColor?: 'purple' | 'cyan';
    hoverScale?: number;
    className?: string;
}

const AnimatedCard = ({
    children,
    delay = 0,
    glowColor = 'purple',
    hoverScale = 1.03,
    className = '',
}: AnimatedCardProps) => {
    const glowColors = {
        purple: 'rgba(124, 58, 237, 0.5)',
        cyan: 'rgba(34, 211, 238, 0.5)',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{
                scale: hoverScale,
                boxShadow: `0 0 25px ${glowColors[glowColor]}`,
                transition: { duration: 0.3 },
            }}
            className={`bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-primary)]/20 transition-all ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedCard;
