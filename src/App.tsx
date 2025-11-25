import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import LightweightBackground from './components/LightweightBackground';
import ScrollToTopButton from './components/ScrollToTopButton';
import HeroSection from './sections/HeroSection';
import TargetCursor from './components/TargetCursor';

// Lazy load heavy components for better initial load
const Projects = lazy(() => import('./sections/Projects'));
const TechStackSection = lazy(() => import('./sections/TechStackSection'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Simple loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => {
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <Navbar />
      <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fixed inset-0 -z-10">
          <LightweightBackground />
        </div>
        <main className="relative z-10 flex flex-col justify-items-center justify-center py-24 space-y-6">
          <section id='hero'>
            <HeroSection />
          </section>

          <Suspense fallback={<LoadingFallback />}>
            <section id='projects'>
              <Projects />
            </section>
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <TechStackSection />
          </Suspense>

          <Suspense fallback={<LoadingFallback />}>
            <section id='contact'>
              <Contact />
            </section>
          </Suspense>
        </main>
      </div>
      <ScrollToTopButton />
      <Suspense fallback={null}>
        <section id="footer">
          <Footer />
        </section>
      </Suspense>
    </>
  );
};

export default App;
