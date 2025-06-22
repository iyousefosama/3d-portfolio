import React, { useRef, useEffect, useState } from "react";
import { counterItems } from "../../constants";
import { motion, useInView, animate } from "framer-motion";

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(0, value, {
            duration: 2,
            onUpdate(latest) {
                setDisplayValue(Math.floor(latest));
            },
        });

        return controls.stop; // clean up on unmount
    }, [value]);

    return (
        <span>
      {displayValue}
            {suffix}
    </span>
    );
};

const AnimatedCounters: React.FC = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });

    return (
        <div id="counters" className="padding-x-lg mt-32 mb-6">
            <div ref={containerRef} className="mx-auto grid-4-cols">
                {counterItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="flex flex-col justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/2 p-10 rounded-lg hover:brightness-125 hover:from-white/20 transition duration-300"
                    >
                        <div className="counter-number text-white text-5xl font-bold mb-2">
                            {isInView && <AnimatedCounter value={item.value} suffix={item.suffix} />}
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <div className="p-1 rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20">
                                <item.icon className={`w-6 h-6 md:w-8 md:h-8 ${item.color}`} />
                            </div>
                            <div className="text-white-50 text-lg">{item.label}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCounters;
