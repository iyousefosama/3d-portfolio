"use client"

import React from "react"
import { useRef } from "react"
import TitleHeader from "@/components/common/TitleHeader"
import ExperienceItem from "@/components/custom/ExperienceItem"
import { expCards } from "../../constants"
import { motion, useAnimation, useInView } from "framer-motion"
import { sectionTitleVariant } from "../lib/motionVariants"

const ExperienceSection: React.FC = () => {
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
        <section ref={sectionRef} id="experience" className="min-h-screen section-padding bg-black py-20 padding-x-lg overflow-hidden">
            <div className="w-full max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    animate={controls}
                    variants={sectionTitleVariant}
                >
                    <TitleHeader title="Professional Work Experience" sub="💼 Career Overview" />
                </motion.div>

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
        </section>
    )
}

export default ExperienceSection
