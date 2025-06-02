import Navbar from "./components/Navbar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Suspense } from "react";

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Showcase />
            <FeatureCards />
            <Suspense fallback={<div>Loading...</div>}>
                <ExperienceSection />
                <TechStack />
                <Contact />
            </Suspense>
            <Footer />
        </>
    );
}

export default App; 