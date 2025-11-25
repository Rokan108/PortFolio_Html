import { motion } from 'framer-motion';

interface SectionDividerProps {
    icon?: string;
    className?: string;
}

const SectionDivider = ({ icon, className = '' }: SectionDividerProps) => {
    return (
        <motion.div
            className={`relative flex items-center justify-center my-12 ${className}`}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            {/* Left line */}
            <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-[var(--color-accent)]" />

            {/* Center icon */}
            {icon && (
                <motion.div
                    className="mx-4 text-2xl"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {icon}
                </motion.div>
            )}

            {/* Right line */}
            <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-[var(--color-accent)] to-[var(--color-primary)]" />
        </motion.div>
    );
};

export default SectionDivider;
