"use client"

import React from "react"
import { motion } from "framer-motion"
import { Sparkles, ChevronDown } from "lucide-react"
import HeroExperience from "@/components/Models/HeroModels/HeroExperience"
import Ctabutton from "@/components/Button"
import { Button } from "@/components/ui/button"

import AnimatedCounters from "@/components/AnimatedCounters"
import { scrollToElementById } from "@/lib/utils"
import { words } from "../../constants"
import ScrollSection from "@/components/custom/ScrollSection"

const Hero: React.FC = () => {
    const [currentWordIndex, setCurrentWordIndex] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    }

    const wordVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateX: -90 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 0.6,
                ease: "backOut",
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            rotateX: 90,
            transition: {
                duration: 0.4,
            },
        },
    }

    const currentWord = words[currentWordIndex]
    const IconComponent = currentWord.icon

    return (
        <section id={"hero"} className={"relative overflow-hidden"}>
                <ScrollSection />
            <div className={"hero-layout"}>
                {/* Left: Hero content */}
                <motion.header className={"flex flex-col justify-center md:w-full w-screen md:px-20 px-5"}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible">
                    <div className={"flex flex-col gap-7"}>
                        <div className={"hero-text"}>
                            {/* Badge */}
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 w-fit"
                            >
                                <Sparkles className="w-4 h-4 text-yellow-400" />
                                <span className="text-sm text-white/80 font-medium">Full-Stack Developer</span>
                            </motion.div>

                            {/* Main Headline */}
                            <motion.div variants={itemVariants} className="space-y-4">
                                <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight">
                                    <span className="text-white block">Crafting Digital</span>
                                    <div className="flex items-center gap-4 mt-2">
                                        <motion.div
                                            key={currentWordIndex}
                                            variants={wordVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="flex items-center gap-3"
                                        >
                                            <div className="p-3 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20">
                                                <IconComponent className={`w-8 h-8 md:w-10 md:h-10 ${currentWord.color}`} />
                                            </div>
                                            <span className={`${currentWord.color} font-extrabold`}>{currentWord.text}</span>
                                        </motion.div>
                                    </div>
                                    <span className="text-white block mt-2">That Transform Ideas</span>
                                </h1>
                            </motion.div>
                        </div>
                        {/* Description */}
                        <motion.p variants={itemVariants} className="text-sm md:text-xl text-white/70 leading-relaxed max-w-2xl relative z-10 pointer-events-none">
                            Passionate full-stack developer specializing in modern web technologies. I transform complex challenges
                            into elegant, scalable solutions that drive business growth.
                        </motion.p>
                        <Ctabutton text={"View my work"} className={"hidden md:block w-60 h-12 md:w-80 md:h-16"} id={"counters"} />
                        <Button className="md:hidden w-12 h-12 relative z-20 cursor-pointer" onClick={(e) => {
                            e.preventDefault(); // Stop the link from jumping instantly

                            scrollToElementById("counters");
                        }} variant={"outline"}>
                            <ChevronDown className="w-4 h-4 animate-bounce" />
                        </Button>
                    </div>
                </motion.header>
                {/* Right: Hero 3D model */}
                <figure>
                    <div className={"hero-3d-layout"}>
                        <HeroExperience />
                    </div>
                </figure>
            </div>
            <AnimatedCounters />
        </section>
    );
};

export default Hero;