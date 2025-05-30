import React from 'react';
import { words } from "../../constants";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";

function Hero() {
    let num = 0;

    return (
        <section id={"hero"} className={"relative overflow-hidden"}>
            <div className={"absolute top-0 left-0 z-10"}>
                <img src={"/images/bg.png"} alt={"background"} />
            </div>

            <div className={"hero-layout"}>
                {/* Left: Hero content */}
                <header className={"flex flex-col justify-center md:w-full w-screen md:px-20 px-5"}>
                    <div className={"flex flex-col gap-7"}>
                        <div className={"hero-text"}>
                            <h1>
                                Shaping
                                <span className={"slide"}>
                                    <span className={"wrapper"}>
                                        {words.map(word => (
                                            <span className={"flex items-center gap-1 md:gap-3 pb-2"} key={word.text + num++}>
                                                <img src={word.imgPath} alt={word.text} className={"size-8 md:size-10 xl:size-12 p-1 md:p-2 rounded-full bg-white-50"}/>
                                                <span className={"text"}>{word.text}</span>
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
                        <Button text={"See my work"} className={"w-60 h-12 md:w-80 h-16"} id={"button"} />
                    </div>
                </header>
                {/* Right: Hero 3D model */}
                <figure>
                    <div className={"hero-3d-layout"}>
                        <HeroExperience />
                    </div>
                </figure>
            </div>
        </section>
    );
}

export default Hero;