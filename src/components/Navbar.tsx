import React, { useEffect, useState } from "react";
import { navLinks } from "../../constants/index";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setIsScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  
    return (
        <header className={`navbar ${isScrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a href="#" className="logo">
                    Yousef osama
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map((link, key) => (
                            <li key={key} className="group">
                                <a href={link.link}>
                                    <span>{link.name}</span>
                                    <div className="underline"></div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Get in touch</span>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default Navbar; 