import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null);
  const project3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((project, index) => {
      if (!project) return;
      
      gsap.fromTo(
        project,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
          },
        }
      );
    });

    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
        }
      );
    }
  }, []);

  return (
    <section id={"projects"} ref={sectionRef} className={"app-showcase overflow-hidden"}>
      <div className={"w-full"}>
        <div className={"showcaselayout"}>
          {/* Left: First project */}
          <div className={"first-project-wrapper"} ref={project1Ref}>
            <div className={"image-wrapper"}>
              <img
                src={"/images/projects/todo-app.jpg"}
                alt={"Tomadoes todos list app"}
              />
            </div>
            <div className={"text-content"}>
              <h2>
                A sleek, intuitive task management application built with
                Next.js.
              </h2>
              <p className={"text-white-50 md:text-xl"}>
                It helps you organize tasks, stay focused, and boost
                productivity with a clean, modern interface.
              </p>
            </div>
          </div>
          {/* Right: Other projects */}
          <div className={"project-list-wrapper overflow-hidden"}>
            <div className={"project"} ref={project2Ref}>
              <div className={"image-wrapper bg-beach-2"}>
                <img
                  src={"/images/projects/project4.png"}
                  alt={"Wolfy dashboard"}
                />
              </div>
              <h2>A modern looking dashboard for discord bot</h2>
            </div>
            <div className={"project"} ref={project3Ref}>
              <div className={"image-wrapper bg-beach-3"}>
                <img
                  src={"/images/projects/project5.png"}
                  alt={"Ticket web application"}
                />
              </div>
              <h2>A ticket system for support teams</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase; 