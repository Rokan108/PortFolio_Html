import { FC, useEffect, useState     } from "react";

interface TechStackCardProps {     // 👈 Lucide React icon (optional)
  image?: string;       // 👈 image path or imported logo (optional)
  title: string;        // e.g., "React.js"
  startDate: string;    // date when you started learning
}

const TechStackCard: FC<TechStackCardProps> = ({ icon, image, title, startDate }) => {
  const [levels, setLevels] = useState<number[]>([]);
  const [daysSinceStart, setDaysSinceStart] = useState<number>(0);

  useEffect(() => {
    const start = new Date(startDate);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    setDaysSinceStart(diffInDays);

    const totalLevels = Math.floor(diffInDays / 7) + 1;
    const tempLevels = Array.from({ length: totalLevels }, (_, i) => totalLevels - i);
    setLevels(tempLevels);
  }, [startDate]);

  return (
    <div className="flex items-start bg-[var(--color-surface)] rounded-xl p-4 shadow-lg hover:shadow-[0_0_15px_var(--color-primary-light)] transition-all duration-300 ease-in-out w-full max-w-md">
      {/* Icon or Image */}
      <div className="w-16 h-16 flex-shrink-0 rounded-lg flex items-center justify-center bg-[var(--color-background)] border-2 border-[var(--color-primary)] overflow-hidden">
        {icon ? (
          <div className="text-[var(--color-accent)] text-3xl">{icon}</div>
        ) : image ? (
          <img
            src={image}
            alt={title}
            className="object-contain w-12 h-12"
          />
        ) : (
          <div className="text-gray-400 text-sm italic">No Logo</div>
        )}
      </div>

      {/* Right Side */}
      <div className="ml-4 flex flex-col justify-between text-[var(--color-text)] w-full">
        <h2 className="font-semibold text-lg text-[var(--color-primary-light)] truncate">
          {title}
        </h2>

        <div className="mt-2 space-y-1 text-sm">
          {levels.slice(0, 3).map((lvl, index) => (
            <div key={index} className="flex justify-between">
              <span
                className={`${
                  index === 0 ? "font-bold text-[var(--color-accent)]" : "text-gray-400"
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
  );
};

export default TechStackCard;
