import { type FC, useMemo, memo } from "react";
import { motion } from 'framer-motion';

interface TechStackCardProps {
  image?: string;
  title: string;
  startDate: string;
  delay?: number;
}

const TechStackCard: FC<TechStackCardProps> = memo(({ image, title, startDate, delay = 0 }) => {
  // Memoize date calculations
  const dateInfo = useMemo(() => {
    const start = new Date(startDate);
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    const totalLevels = Math.floor(diffInDays / 7) + 1;
    const currentLevel = totalLevels;

    return {
      days: diffInDays,
      currentLevel,
      formattedDate: start.toLocaleDateString()
    };
  }, [startDate]);

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
        w-full max-w-md
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
            w-20 h-20
            flex items-center justify-center
            bg-[var(--color-surface-hover)]
            border border-[var(--color-primary)]/10
            shadow-sm
            group-hover:shadow-md
            transition-shadow duration-300
            overflow-hidden
          "
          whileHover={{
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5 }
          }}
        >
          {image ? (
            <img
              src={image}
              alt={title}
              className="object-contain w-14 h-14"
              loading="lazy"
              width="56"
              height="56"
            />
          ) : (
            <div className="text-gray-400 text-sm italic">No Logo</div>
          )}
        </motion.div>

        {/* Tech Name */}
        <h3 className="
          text-xl font-semibold 
          text-[var(--color-text)]
          group-hover:text-[var(--color-primary)]
          transition-colors duration-300
        ">
          {title}
        </h3>

        {/* Level Badge */}
        <div className=" cursor-target
          inline-flex items-center gap-2
          px-4 py-2
          bg-[var(--color-primary)]/10
          rounded-full
          border border-[var(--color-primary)]/30
        ">
          <span className="text-sm font-medium text-[var(--color-primary)]">
            Level {dateInfo.currentLevel}
          </span>
          <span className="text-xs text-[var(--color-primary)]/60">•</span>
          <span className="text-xs text-[var(--color-primary)]/80">Active</span>
        </div>

        {/* Learning Duration */}
        <div className="
          text-sm text-[var(--color-text-secondary)]
          leading-relaxed
          group-hover:text-[var(--color-text)]
          transition-colors duration-300
        ">
          <p className="font-medium">Learning since {dateInfo.formattedDate}</p>
          <p className="text-xs text-[var(--color-text-secondary)]/70 mt-1">{dateInfo.days} days of experience</p>
        </div>
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
});

TechStackCard.displayName = 'TechStackCard';

export default TechStackCard;
