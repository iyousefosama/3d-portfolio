import Navbar from "./components/Layout/Navbar";
import Hero from "./sections/Hero";
import { Suspense, lazy } from "react";
import Loading from "./components/common/Loading";

// Lazy load non-critical sections
const Showcase = lazy(() => import("./sections/Showcase"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./components/Layout/Footer"));

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
