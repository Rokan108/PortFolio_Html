import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SkillBadgeProps {
    icon: ReactNode;
    label: string;
    category?: 'frontend' | 'backend' | 'database' | 'devtools';
}

const SkillBadge = ({ icon, label, category = 'frontend' }: SkillBadgeProps) => {
    const categoryColors = {
        frontend: {
            bg: 'bg-[var(--color-primary)]/10',
            border: 'border-[var(--color-primary)]',
            glow: 'rgba(124, 58, 237, 0.6)',
        },
        backend: {
            bg: 'bg-[var(--color-accent)]/10',
            border: 'border-[var(--color-accent)]',
            glow: 'rgba(34, 211, 238, 0.6)',
        },
        database: {
            bg: 'bg-green-500/10',
            border: 'border-green-500',
            glow: 'rgba(34, 197, 94, 0.6)',
        },
        devtools: {
            bg: 'bg-yellow-500/10',
            border: 'border-yellow-500',
            glow: 'rgba(234, 179, 8, 0.6)',
        },
    };

    const colors = categoryColors[category];

    return (
        <motion.div
            className={`
        ${colors.bg} ${colors.border}
        border-2 rounded-full px-4 py-2
        flex items-center gap-2
        font-medium text-sm
        cursor-pointer
        transition-all duration-300
      `}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: `0 0 20px ${colors.glow}`,
                transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="text-lg">{icon}</span>
            <span className="text-[var(--color-text)]">{label}</span>
        </motion.div>
    );
};

export default SkillBadge;
