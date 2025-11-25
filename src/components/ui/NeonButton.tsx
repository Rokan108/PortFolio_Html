import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface NeonButtonProps {
    text: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    Icon?: LucideIcon;
    className?: string;
    href?: string;
}

const NeonButton = ({
    text,
    onClick,
    variant = 'primary',
    Icon,
    className = '',
    href,
}: NeonButtonProps) => {
    const variants = {
        primary: 'bg-[var(--color-primary)] text-white border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]',
        secondary: 'bg-[var(--color-accent)] text-[var(--color-background)] border-2 border-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]',
        outline: 'bg-transparent text-[var(--color-accent)] border-2 border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]',
    };

    const ButtonComponent = motion.button;
    const LinkComponent = motion.a;

    const Component = href ? LinkComponent : ButtonComponent;

    const props = href
        ? { href, target: '_blank', rel: 'noopener noreferrer' }
        : { onClick, type: 'button' as const };

    return (
        <Component
            {...props}
            className={`
        px-6 py-3 rounded-lg font-semibold
        flex items-center gap-2 justify-center
        transition-all duration-300
        ${variants[variant]}
        ${className}
      `}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {Icon && <Icon size={18} />}
            <span>{text}</span>
        </Component>
    );
};

export default NeonButton;
