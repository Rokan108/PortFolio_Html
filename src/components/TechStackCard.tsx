import { type FC, useEffect, useState, useMemo, memo } from "react";
import ElectricBorder from "./reactbit/ElectricBorder";

interface TechStackCardProps {
  image?: string;
  title: string;
  startDate: string;
}

const TechStackCard: FC<TechStackCardProps> = memo(({ image, title, startDate }) => {
  const [levels, setLevels] = useState<number[]>([]);
  const [daysSinceStart, setDaysSinceStart] = useState<number>(0);

  // Memoize date calculations
  const dateInfo = useMemo(() => {
    const start = new Date(startDate);
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    const totalLevels = Math.floor(diffInDays / 7) + 1;
    const tempLevels = Array.from({ length: totalLevels }, (_, i) => totalLevels - i);

    return {
      days: diffInDays,
      levels: tempLevels,
      formattedDate: start.toLocaleDateString()
    };
  }, [startDate]);

  useEffect(() => {
    setDaysSinceStart(dateInfo.days);
    setLevels(dateInfo.levels);
  }, [dateInfo]);

  return (
    <ElectricBorder
      color="var(--color-accent)"
      speed={1}
      chaos={0.6}
      thickness={2}
      style={{ borderRadius: 16 }}
    >
      <div className="tech-card flex flex-col sm:flex-row items-center sm:items-start rounded-xl p-4 w-full max-w-md transition-all duration-500 ease-in-out hover:scale-[1.02]">

        {/* Icon or Image */}
        <div className="w-16 h-16 flex-shrink-0 rounded-lg flex items-center justify-center bg-[var(--color-background)] border-2 border-[var(--color-primary)] overflow-hidden shadow-md">
          {image ? (
            <img
              src={image}
              alt={title}
              className="object-contain w-12 h-12"
              loading="lazy"
              width="48"
              height="48"
            />
          ) : (
            <div className="text-gray-400 text-sm italic">No Logo</div>
          )}
        </div>

        {/* Details */}
        <div className="sm:ml-4 flex flex-col justify-between text-[var(--color-text)] w-full text-center sm:text-left mt-3 sm:mt-0">
          <h2 className="font-semibold text-lg text-[var(--color-primary-light)] truncate">
            {title}
          </h2>

          {/* Levels */}
          <div className="mt-2 space-y-1 text-sm">
            {levels.slice(0, 3).map((lvl, index) => (
              <div key={index} className="flex justify-between text-[var(--color-text-secondary)]">
                <span
                  className={`${index === 0
                      ? "font-bold text-[var(--color-accent)]"
                      : "text-gray-400"
                    }`}
                >
                  Level {lvl}
                </span>
                <span className="text-gray-500">
                  {index === 0 ? "Active" : `${(index + 1) * 7} days ago`}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Learning since {dateInfo.formattedDate} ({daysSinceStart} days)
          </p>
        </div>
      </div>
    </ElectricBorder>
  );
});

TechStackCard.displayName = 'TechStackCard';

export default TechStackCard;

