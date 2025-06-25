import React, { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../../constants/index";
import { motion, useAnimation, useInView } from "framer-motion"
const isMobile = window.innerWidth < 768;

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const cardVariants = {
  hidden: { opacity: 0, y: isMobile ? 20 : 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: isMobile ? i * 0.1 : i * 0.2,
      duration: isMobile ? 0.4 : 0.8,
      ease: "easeOut",
    },
  }),
};

const TechStack: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" }); // Trigger only once
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const controls = useAnimation()

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  return (
    <section ref={sectionRef} id="skills" className="flex-center py-20 padding-x-lg">
      <div className="w-full h-full md:px-10 px-5">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          <TitleHeader
            title="My Strengths & Contributions"
            sub="💡 Key Areas Where I Add Value"
          />
        </motion.div>

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
    </section>
  );
};

export default TechStack;
