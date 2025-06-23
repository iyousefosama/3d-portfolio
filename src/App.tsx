import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import { Suspense, lazy } from "react";

// Lazy load non-critical sections
const Showcase = lazy(() => import("./sections/Showcase"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

// Simple loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<Loading />}>
        <Showcase />
        <FeatureCards />
        <ExperienceSection />
        <TechStack />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App; 
