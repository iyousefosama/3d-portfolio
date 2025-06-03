import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "../../constants/index";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isLowEndDevice = useMediaQuery({ query: '(prefers-reduced-motion)' }) || 
                         navigator.hardwareConcurrency <= 4;

  useEffect(() => {
    // Skip animations on low-end devices or when reduced motion is preferred
    if (isLowEndDevice) return;

    // Delay GSAP initialization to ensure DOM is ready
    const initGSAP = () => {
      if (!sectionRef.current) return;

      // Use context to clean up animations when component unmounts
      const ctx = gsap.context(() => {
        // Simplified animations for mobile
        const duration = isMobile ? 0.5 : 1;
        const ease = "power2.out"; // Less intensive easing

        // Timeline cards animation
        const timelineCards = gsap.utils.toArray<HTMLElement>(".timeline-card");
        timelineCards.forEach((card) => {
          if (!card) return;
          
          gsap.from(card, {
            xPercent: isMobile ? -50 : -100, // Less movement on mobile
            opacity: 0,
            duration: duration,
            ease: ease,
            scrollTrigger: {
              trigger: card,
              start: "top 90%", // Start earlier
              toggleActions: "play none none none", // Only play once
            },
          });
        });

        // Timeline animation - simpler on mobile
        const timeline = document.querySelector(".timeline");
        if (timeline && !isMobile) {
          gsap.to(timeline, {
            transformOrigin: "bottom bottom",
            ease: ease,
            scrollTrigger: {
              trigger: timeline,
              start: "top center",
              end: "70% center",
              onUpdate: (self) => {
                gsap.to(timeline, {
                  scaleY: 1 - self.progress,
                });
              },
            },
          });
        }

        // Experience text animations
        const expTexts = gsap.utils.toArray<HTMLElement>(".expText");
        expTexts.forEach((text) => {
          if (!text) return;
          
          gsap.from(text, {
            opacity: 0,
            y: isMobile ? 20 : 30, // Use y instead of xPercent for better performance
            duration: duration,
            ease: ease,
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              toggleActions: "play none none none", // Only play once
            },
          });
        });
      }, sectionRef); // Scope to section

      // Return cleanup function
      return () => ctx.revert();
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initGSAP, 100);
    return () => clearTimeout(timer);
  }, [isMobile, isLowEndDevice]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 Career Overview"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div>
                      <img
                        src={card.imgPath}
                        alt="exp-img"
                        className={"size-20"}
                        loading="lazy"
                      />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img
                          src={card.logoPath}
                          alt="logo"
                          className="size-15"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 
