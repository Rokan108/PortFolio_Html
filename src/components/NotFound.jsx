import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 relative">
      {/* Background Overlay (matches your DarkVeil style) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--color-bg)] via-[var(--color-primary-light)]/10 to-white opacity-90"></div>

      {/* Glowing Border Container */}
      <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary-light)] animate-border shadow-lg max-w-lg w-full">
        <div className="bg-transparent backdrop-blur-xl rounded-3xl p-10 flex flex-col items-center justify-center text-[var(--color-text)]">
          {/* 404 Number */}
          <h1 className="text-8xl sm:text-9xl font-extrabold text-[var(--color-primary)] drop-shadow-[0_0_10px_var(--color-primary-light)]">
            404
          </h1>

          {/* Message */}
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
            Oops! Page Not Found
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-md">
            The page you’re looking for doesn’t exist or has been moved. Let’s
            get you back on track.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <Link
              to="/"
              className="px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-lg shadow-md hover:bg-[var(--color-primary-dark)] transition-all"
            >
              🏠 Go Home
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] font-medium rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all"
            >
              📬 Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
