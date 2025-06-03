import React, {useRef} from "react";
import {counterItems} from "../../constants";
import {CountUp} from "countup.js"; // CountUp class
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounters: React.FC = () => {
    const countersRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        countersRef.current.forEach((el, index) => {
            if (!el) return;

            ScrollTrigger.create({
                trigger: el,
                start: "top 80%",
                once: true,
                onEnter: () => {
                    const countUpEl = el.querySelector(".countup") as HTMLElement | null;
                    const value = counterItems[index].value;
                    const suffix = counterItems[index].suffix || "";

                    if (countUpEl) {
                        const countUp = new CountUp(countUpEl, value, {
                            suffix: suffix,
                            duration: 2,
                        });
                        if (!countUp.error) countUp.start();
                    }
                },
            });
        });
    });

    return (
        <div id="counters" className="padding-x-lg mt-32 mb-6">
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            countersRef.current[index] = el;
                        }}
                        className="flex flex-col justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/2 p-10 rounded-lg hover:cursor-pointer hover:scale-105 transition-all duration-300"
                    >
                        <div className="counter-number text-white text-5xl font-bold mb-2">
                            <span className="countup"/>
                        </div>
                        <div className={"flex items-center gap-3 mt-3"}>
                            <div
                                className="p-1 rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20">
                                <item.icon className={`w-6 h-6 md:w-8 md:h-8 ${item.color}`}/>
                            </div>
                            <div className="text-white-50 text-lg">{item.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCounters;
