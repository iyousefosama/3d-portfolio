"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { type ProjectCard } from "@/lib/types";

const projectVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { ease: "easeOut", duration: 0.8 } },
};

const ProjectCard = ({
    title,
    description,
    demo_url,
    code_url,
    badges,
    img,
    extras_className = {},
    delay = 0.1,
}: ProjectCard) => {
    const projectRef = useRef(null);
    const isInView = useInView(projectRef, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={projectRef}
            initial="hidden"
            animate={controls}
            variants={projectVariants}
            transition={{ delay }}
            whileHover="hover"
            className={extras_className.cardWrapper || ""}
        >
            <motion.div
                className={`bg-white dark:bg-zinc-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden  ${extras_className.container ?? ""}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ willChange: "transform" }}
            >
                <div className={`${extras_className.grid ?? ""}`}>
                    <motion.div
                        className={`project-image overflow-hidden ${extras_className.image ?? ""}`}
                        style={{
                            backfaceVisibility: "hidden",
                            transformStyle: "preserve-3d",
                            willChange: "transform",
                        }}
                    >
                        <img
                            loading="lazy"
                            src={img.src}
                            alt={img.alt}
                            className={extras_className.isBigImage ? "w-full h-full object-cover min-h-[300px]" : "w-full h-48 object-cover"}
                        />
                    </motion.div>
                    <motion.div
                        className={`project-content p-8 flex flex-col justify-center ${extras_className.content ?? ""}`}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            {badges.map((badge, index) => (
                                <Badge className={badge.className} key={index}>
                                    {badge.title}
                                </Badge>
                            ))}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{description}</p>
                        <div className="flex gap-3 flex-wrap">
                            {demo_url && (
                                <a href={demo_url} target="_blank" rel="noopener noreferrer">
                                    <Button className={extras_className.btnDemo ?? "bg-orange-600 hover:bg-orange-700"}>
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Live Demo
                                    </Button>
                                </a>
                            )}
                            {code_url && (
                                <a href={code_url} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className={extras_className.btnCode}>
                                        <Github className="w-4 h-4 mr-2" />
                                        Code
                                    </Button>
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
