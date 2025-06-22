"use client"

import React, { useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import TitleHeader from "@/components/TitleHeader"

const projectVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { ease: "easeOut", duration: 0.8 } },
}

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
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          <TitleHeader
            title="Featured Projects"
            sub="Built with cutting-edge frameworks and tools"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Featured Project - Tomados */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={projectVariants}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 group"
            whileHover="hover"
          >
            <motion.div
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-orange-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ willChange: "transform" }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <motion.div
                  className="project-image overflow-hidden"
                  // Removed nested scale hover to fix flicker
                  style={{
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                  }}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/todo-app.jpg-zMQTVKvc6pBxpkf1sflXK2mJXZ3W0m.jpeg"
                    alt="Tomados Task Management App"
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                </motion.div>
                <motion.div
                  className="project-content p-8 flex flex-col justify-center"
                // Removed nested y hover to avoid conflicts
                >
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
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Wolfy Bot Dashboard */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={projectVariants}
            transition={{ delay: 0.3 }}
            className="group"
            whileHover="hover"
          >
            <motion.div
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-zinc-700 h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ willChange: "transform" }}
            >
              <motion.div
                className="project-image overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project4-uG9wUxsxP0qziTDfaJU3MG0Og7EnOr.png"
                  alt="Wolfy Discord Bot Dashboard"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div
                className="project-content p-6"
              // Removed nested y hover
              >
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">Discord.js</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">React</Badge>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Wolfy Bot Dashboard</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                  A comprehensive Discord bot management dashboard featuring command management, server analytics, and
                  automated moderation tools.
                </p>
                <a href="https://wolfy-navy.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-indigo-500 hover:bg-indigo-700 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Ticket System */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={projectVariants}
            transition={{ delay: 0.5 }}
            className="group"
            whileHover="hover"
          >
            <motion.div
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-zinc-700 h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ willChange: "transform" }}
            >
              <motion.div
                className="project-image overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project5-J7XTFvA2wQlPx6OQvj80LV6jGFj0Xf.png"
                  alt="Ticket Management System"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div
                className="project-content p-6"
              // Removed nested y hover
              >
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Ticket System</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                  A robust support ticketing system with user-friendly interface and admin controls built with Node.js and MongoDB.
                </p>
                <div className="flex gap-3">
                  <a href="https://tickets-app-beryl.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-zinc-600 hover:bg-zinc-700 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                  <a href="https://github.com/iyousefosama/tickets-app" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
