import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../../constants/index";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};

const TechStack: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" }); // Trigger only once

  return (
    <div id="skills" className="flex-center padding-x-lg">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Strengths & Contributions"
          sub="💡 Key Areas Where I Add Value"
        />
        <div ref={ref} className="tech-grid">
          {techStackImgs.map((techStackIcon, index) => (
            <motion.div
              key={index}
              className="card-border tech-card overflow-hidden rounded-md bg-gradient-to-br from-zinc-900/10 to-zinc-900/5 backdrop-blur-sm border border-white/10 shadow-cyan-600/20 shadow-2xl transition-all duration-300 will-change-transform hover:scale-110 hover:shadow-yellow-600/20"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index} // Used to apply stagger
            >
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <motion.img
                    src={techStackIcon.imgPath}
                    alt={techStackIcon.name}
                    whileHover={{ rotate: 360 }}
                  />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
