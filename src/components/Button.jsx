import { motion as Motion } from "framer-motion";

const Button = ({text = "Scroll", className = "", id = ""}) => {
    return (
        <Motion.a
            onClick={(e) => {
                e.preventDefault(); // Stop the link from jumping instantly

                const target = document.getElementById(id); // Find the section with ID "counter"

                // Only scroll if we found the section and an ID is passed in
                // taht prevents the contact button from scrolling to the top
                if (target && id) {
                    const offset = window.innerHeight * 0.15; // Leave a bit of space at the top

                    // Calculate how far down the page we need to scroll
                    const top =
                        target.getBoundingClientRect().top + window.pageYOffset - offset;

                    // Scroll smoothly to that position
                    window.scrollTo({top, behavior: "smooth"});
                }
            }}
            className={`cta-wrapper ${className}`}
            role="button"
            tabIndex={0}
            initial={{scale: 0}}
            animate={{scale: 1, transition: {duration: 1, type: "spring", bounceDamping: 10, bounceStiffness: 100}}}
            whileHover={{scale: 0.95}}
        >
            <div className="cta-button group">
                <div className="bg-circle"/>
                <p className="text font-semibold">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/icons/arrow-down.svg" alt="arrow-down"/>
                </div>
            </div>
        </Motion.a>
    );
};

export default Button;
