"use client"

import type React from "react"
import {useRef} from "react"
import TitleHeader from "@/components/TitleHeader"
import ExperienceItem from "@/components/ExperienceItem"
import {expCards} from "../../constants"
import {motion} from "motion/react";

const ExperienceSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null)

    return (
        <section ref={sectionRef} id="experience" className="min-h-screen bg-black py-20 padding-x-lg overflow-hidden">
            <div className="w-full max-w-6xl mx-auto">
                <TitleHeader title="Professional Work Experience" sub="💼 Career Overview"/>

                <div className="mt-16">
                    {/* Experience List */}
                    <motion.div
                        className="space-x-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                    >
                      {expCards.map((card, index) => (
                          <motion.div
                              key={card.title}
                              initial={{ opacity: 0, x: -50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }} // Stagger effect
                          >
                            <ExperienceItem card={card} index={index} isLast={index === expCards.length - 1} />
                          </motion.div>
                      ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
