import React from 'react';
import { words } from "../../constants/index";
import Button from "../components/Button";
import HeroExperience from "../components/Models/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounters from "../components/AnimatedCounters";

const Hero: React.FC = () => {
    useGSAP(() => {
        gsap.fromTo(".hero-text h1", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
        });
    });

    return (
        <section id={"hero"} className={"relative overflow-hidden"}>
            <div className={"hero-layout"}>
                {/* Left: Hero content */}
                <header className={"flex flex-col justify-center md:w-full w-screen md:px-20 px-5"}>
                    <div className={"flex flex-col gap-7"}>
                        <div className={"hero-text"}>
                            <h1>
                                Shaping
                                <span className={"slide"}>
                                    <span className={"wrapper"}>
                                        {words.map((word, key) => (
                                            <span className={"flex items-center gap-1 md:gap-3 pb-2"} key={key}>
                                                <img src={word.imgPath} alt={word.text} className={"size-8 md:size-10 xl:size-12 p-1 md:p-2 rounded-full bg-white-50 icon-animate"} />
                                                <span className={"text text-white-50 underline"}>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>
                                into real projects
                            </h1>
                            <h1>
                                that Deliver Results
                            </h1>
                        </div>
                        <p className={"relative z-10 pointer-events-none text-white-50 md:text-xl"}>
                            Hello, I'm yousef, a developer based in Egypt with a passion for javascript!
                        </p>
                        <Button text={"Work section"} className={"w-60 h-12 md:w-80 md:h-16"} id={"counters"} />
                    </div>
                </header>
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