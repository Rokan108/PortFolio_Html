import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LightweightBackground from './components/LightweightBackground';
import ScrollToTopButton from './components/ScrollToTopButton';
import HeroSection from './sections/HeroSection';
import TargetCursor from './components/TargetCursor';

// Lazy load heavy components for better initial load
const ProjectsPreview = lazy(() => import('./sections/ProjectsPreview'));
const TechStackSection = lazy(() => import('./sections/TechStackSection'));
const AboutSection = lazy(() => import('./sections/AboutSection'));
const ServicesSection = lazy(() => import('./sections/ServicesSection'));
const WorkflowSection = lazy(() => import('./sections/WorkflowSection'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const FullProjectsPage = lazy(() => import('./pages/FullProjectsPage'));

// Loading spinner
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
  </div>
);

// Homepage layout
const HomePage = () => (
  <div className="relative min-h-screen">
    <div className="fixed inset-0 -z-10">
      <LightweightBackground />
    </div>

    <main className="relative z-10">
      {/* Hero */}
      <HeroSection />

      {/* About */}
      <Suspense fallback={<LoadingFallback />}>
        <AboutSection />
      </Suspense>

      {/* Services */}
      <Suspense fallback={<LoadingFallback />}>
        <ServicesSection />
      </Suspense>

      {/* Projects Preview */}
      <Suspense fallback={<LoadingFallback />}>
        <section id="projects">
          <ProjectsPreview />
        </section>
      </Suspense>

      {/* Tech Stack */}
      <Suspense fallback={<LoadingFallback />}>
        <section id="techstack">
          <TechStackSection />
        </section>
      </Suspense>

      {/* Workflow */}
      <Suspense fallback={<LoadingFallback />}>
        <WorkflowSection />
      </Suspense>

      {/* Contact */}
      <Suspense fallback={<LoadingFallback />}>
        <section id="contact">
          <Contact />
        </section>
      </Suspense>
    </main>
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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <FullProjectsPage />
            </Suspense>
          }
        />
      </Routes>

      <ScrollToTopButton />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
