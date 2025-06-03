"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import TitleHeader from "@/components/TitleHeader"

gsap.registerPlugin(ScrollTrigger)

const Showcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const project1Ref = useRef<HTMLDivElement>(null)
  const project2Ref = useRef<HTMLDivElement>(null)
  const project3Ref = useRef<HTMLDivElement>(null)

  useGSAP(
      () => {
        if (!sectionRef.current || !titleRef.current) return

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom-=100",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        })

        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        )

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]

        projects.forEach((project, index) => {
          if (!project) return

          tl.fromTo(
              project,
              { opacity: 0, y: 60, scale: 0.95 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
              },
              `-=${index === 0 ? 0.3 : 0.6}`
          )

          const image = project.querySelector(".project-image")
          const content = project.querySelector(".project-content")

          project.addEventListener("mouseenter", () => {
            if (image) gsap.to(image, { scale: 1.05, duration: 0.3, ease: "power2.out" })
            if (content) gsap.to(content, { y: -5, duration: 0.3, ease: "power2.out" })
          })

          project.addEventListener("mouseleave", () => {
            if (image) gsap.to(image, { scale: 1, duration: 0.3, ease: "power2.out" })
            if (content) gsap.to(content, { y: 0, duration: 0.3, ease: "power2.out" })
          })
        })
      },
      { scope: sectionRef }
  )

  return (
      <section
          id="projects"
          ref={sectionRef}
          className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <TitleHeader
                title="Featured Projects"
                sub="Built with cutting-edge frameworks and tools"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Featured Project - Tomados */}
            <div ref={project1Ref} className="lg:col-span-2 group cursor-pointer">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-orange-700">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="project-image overflow-hidden">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/todo-app.jpg-zMQTVKvc6pBxpkf1sflXK2mJXZ3W0m.jpeg"
                        alt="Tomados Task Management App"
                        className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  <div className="project-content p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                        Featured
                      </Badge>
                      <Badge variant="outline">Next.js</Badge>
                      <Badge variant="outline">React</Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      Tomados - Task Management Revolution
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      A sleek, intuitive task management application built with Next.js. Features real-time collaboration,
                      productivity analytics, and a beautiful mobile-first design that helps teams stay organized and
                      focused.
                    </p>
                    <div className="flex gap-3">
                      <a href="https://tomados-todolist.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-orange-600 hover:bg-orange-700">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                      <a href="https://github.com/mishcoders/todos-list" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wolfy Bot Dashboard */}
            <div ref={project2Ref} className="group cursor-pointer">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-zinc-700 h-full">
                <div className="project-image overflow-hidden">
                  <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project4-uG9wUxsxP0qziTDfaJU3MG0Og7EnOr.png"
                      alt="Wolfy Discord Bot Dashboard"
                      className="w-full h-48 object-cover"
                  />
                </div>
                <div className="project-content p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">Discord.js</Badge>
                    <Badge variant="outline">React</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Wolfy Bot Dashboard</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                    A comprehensive Discord bot management dashboard featuring command management, server analytics, and
                    automated moderation tools.
                  </p>
                  <Button
                      variant="ghost"
                      className="w-full justify-between group-hover:bg-slate-100 dark:group-hover:bg-indigo-700"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Ticket System */}
            <div ref={project3Ref} className="group cursor-pointer">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-zinc-700 h-full">
                <div className="project-image overflow-hidden">
                  <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project5-J7XTFvA2wQlPx6OQvj80LV6jGFj0Xf.png"
                      alt="Ticket Management System"
                      className="w-full h-48 object-cover"
                  />
                </div>
                <div className="project-content p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Support Ticket System</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                    A streamlined ticket management system for support teams with real-time notifications, priority
                    handling, and team collaboration.
                  </p>
                  <a href="https://github.com/iyousefosama/tickets-app" target="_blank" rel="noopener noreferrer">
                    <Button
                        variant="ghost"
                        className="w-full justify-between group-hover:bg-slate-100 dark:group-hover:bg-indigo-700"
                    >
                      View Project
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="https://github.com/iyousefosama?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
  )
}

export default Showcase
