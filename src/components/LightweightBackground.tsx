import { memo } from 'react';

/**
 * Lightweight CSS-based animated background
 * Replaces heavy WebGL DarkVeil for better mobile performance
 * GPU-accelerated with minimal CPU overhead
 */
const LightweightBackground = memo(() => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Animated gradient background */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-[#0F0F1A] via-[#1A1A27] to-[#0F0F1A] animate-gradient-shift"
                style={{
                    backgroundSize: '400% 400%',
                }}
            />

            {/* Subtle overlay pattern */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(34, 211, 238, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)`,
                    animation: 'float 20s ease-in-out infinite',
                }}
            />

            {/* Noise texture for depth */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
});

LightweightBackground.displayName = 'LightweightBackground';

export default LightweightBackground;
