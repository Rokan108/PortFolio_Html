import { FC, useEffect, useState } from "react";
import ElectricBorder from "./reactbit/ElectricBorder"; // ⚡ Make sure this path is correct

interface TechStackCardProps {
  // Lucide React icon (optional)
  image?: string;          // image path (optional)
  title: string;           // Tech name
  startDate: string;       // Starting date
}

const TechStackCard: FC<TechStackCardProps> = ({ icon, image, title, startDate }) => {
  const [levels, setLevels] = useState<number[]>([]);
  const [daysSinceStart, setDaysSinceStart] = useState<number>(0);

  useEffect(() => {
    const start = new Date(startDate);
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    setDaysSinceStart(diffInDays);

    const totalLevels = Math.floor(diffInDays / 7) + 1;
    const tempLevels = Array.from({ length: totalLevels }, (_, i) => totalLevels - i);
    setLevels(tempLevels);
  }, [startDate]);

  return (
    <ElectricBorder
      color="var(--color-accent)"  // ✨ Glowing border color from global.css
      speed={1}
      chaos={0.6}
      thickness={2}
      style={{ borderRadius: 16 }}
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start rounded-xl p-4 w-full max-w-md transition-all duration-500 ease-in-out hover:scale-[1.02]">
        
        {/* Icon or Image */}
        <div className="w-16 h-16 flex-shrink-0 rounded-lg flex items-center justify-center bg-[var(--color-background)] border-2 border-[var(--color-primary)] overflow-hidden shadow-md">
          {image ? (
            <img
              src={image}
              alt={title}
              className="object-contain w-12 h-12"
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
                  className={`${
                    index === 0
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
            Learning since {new Date(startDate).toLocaleDateString()} ({daysSinceStart} days)
          </p>
        </div>
      </div>
    </ElectricBorder>
  );
};

export default TechStackCard;
