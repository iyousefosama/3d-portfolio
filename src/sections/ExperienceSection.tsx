"use client"

import type React from "react"
import { useRef } from "react"
import TitleHeader from "@/components/TitleHeader"
import ExperienceItem from "@/components/ExperienceItem"
import { expCards } from "../../constants"

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} id="experience" className="min-h-screen bg-black py-20 padding-x-lg overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <TitleHeader title="Professional Work Experience" sub="💼 Career Overview" />

        <div className="mt-16">
          {/* Experience List */}
          <div className="space-y-0">
            {expCards.map((card, index) => (
              <ExperienceItem key={card.title} card={card} index={index} isLast={index === expCards.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
