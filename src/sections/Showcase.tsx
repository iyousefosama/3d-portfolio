"use client"

import React, { useRef } from "react"

import TitleHeader from "@/components/TitleHeader"
import { motion, useAnimation, useInView } from "framer-motion"
import ProjectCard from "@/components/ProjectCard";
import { projects } from "../../constants";

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const Showcase: React.FC = () => {
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
    <section id="projects" ref={sectionRef} className="py-20 px-4 section-padding  sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          <TitleHeader
            title="Featured Projects"
            sub="⚡ Built with cutting-edge frameworks and tools"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
