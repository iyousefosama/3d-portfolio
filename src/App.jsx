import Navbar from "./components/Navbar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Hero from "./sections/Hero.jsx";
import Showcase from "./sections/Showcase.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

function App() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Showcase/>
            <FeatureCards/>
            <ExperienceSection/>
            <TechStack />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
