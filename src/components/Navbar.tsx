import React, { useEffect, useState } from "react";
import { navLinks } from "../../constants/index";
import { motion, AnimatePresence, type Variant } from "framer-motion";
import { useRef } from "react";


import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "./ui/button";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropDownRef = useRef(null);

    const dropDownVariants: { hidden: Variant; visible: Variant; } = {
        hidden: { opacity: 0, y: -60, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, bounce: 0.6, type: "spring" } },
    };

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


                <div className="lg:hidden relative">
                    <Button
                        variant={"outline"}
                        size={"icon"}
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="relative overflow-hidden"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isOpen ? (
                                <motion.div
                                    key="x"
                                    initial={{ opacity: 0, rotate: -180 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 180 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <XIcon className="w-4 h-4" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, rotate: 180 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -180 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <MenuIcon className="w-4 h-4" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Button>


                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul variants={dropDownVariants} initial="hidden" animate="visible" exit={"hidden"} ref={dropDownRef} className="absolute mx-auto right-0 mt-2 w-48 bg-white dark:bg-zinc-900 shadow-lg rounded-md z-50 py-2">
                                {navLinks.map((link, key) => (
                                    <li key={key} className="group px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-800">
                                        <a href={link.link} className="block w-full">
                                            <span>{link.name}</span>
                                            <div className="underline"></div>
                                        </a>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>

                <a href="#contact" className="contact-btn group">
                    <div className="inner ">
                        <span>Get in touch</span>
                    </div>
                </a>

            </div>
        </header>
    );
};

export default Navbar; 