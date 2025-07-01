import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Code2, Lightbulb, Palette, Sparkles, SmilePlus } from "lucide-react";
import {
  NavLink,
  Word,
  CounterItem,
  Ability,
  ProjectCard,
  TechStackImg,
  TechStackIcon,
  ExpCard,
  Logo,
  Social,
} from "@/lib/types";

const navLinks: NavLink[] = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words: Word[] = [
  { text: "Innovation", icon: Lightbulb, color: "text-yellow-400" },
  { text: "Excellence", icon: Sparkles, color: "text-purple-400" },
  { text: "Creativity", icon: Palette, color: "text-pink-400" },
  { text: "Solutions", icon: Code2, color: "text-blue-400" },
];

const counterItems: CounterItem[] = [
  {
    value: 5,
    suffix: "+",
    label: "Years of Experience",
    icon: Code2,
    color: "text-blue-400",
  },
  {
    value: 20,
    suffix: "+",
    label: "Satisfied Clients",
    icon: SmilePlus,
    color: "text-green-300",
  },
  {
    value: 50,
    suffix: "+",
    label: "Completed Projects",
    icon: Lightbulb,
    color: "text-yellow-400",
  },
  {
    value: 100,
    suffix: "+",
    label: "Positive Feedbacks",
    icon: Sparkles,
    color: "text-purple-400",
  },
];

const abilities: Ability[] = [
  {
    imgPath: "/images/code.png",
    title: "Clean & Efficient Code",
    desc: "Writing well-structured, optimized code that's easy to read and maintain.",
  },
  {
    imgPath: "/images/speak.png",
    title: "Collaborative Spirit",
    desc: "Working smoothly with teammates and always open to feedback and learning.",
  },
  {
    imgPath: "/images/shuttle.png",
    title: "Fast & Focused Delivery",
    desc: "Shipping projects on time without compromising quality or performance.",
  },
];

const projects: ProjectCard[] = [
  {
    title: "Tomados - Task Management Revolution",
    description:
      "A sleek, intuitive task management application built with Next.js. Features real-time collaboration, productivity analytics, and a beautiful mobile-first design that helps teams stay organized and focused.",
    demo_url: "https://tomados-todolist.vercel.app/",
    code_url: "https://github.com/mishcoders/todos-list",
    badges: [
      {
        title: "Featured",
        className:
          "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
      },
      {
        title: "Next.js",
        className: "bg-black/40 border-steel-400 text-white-50",
      },
      {
        title: "React",
        className: "bg-steel-900 border-steel-400 text-blue-400",
      },
    ],
    img: {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/todo-app.jpg-zMQTVKvc6pBxpkf1sflXK2mJXZ3W0m.jpeg",
      alt: "Tomados Task Management App",
    },
    extras_className: {
      container: "border border-slate-200 dark:border-orange-700",
      btnDemo: "bg-orange-600 hover:bg-orange-700",
      btnCode: "",
      grid: "grid md:grid-cols-2 gap-0",
      cardWrapper: "lg:col-span-2",
      isBigImage: true,
    },
  },
  {
    title: "Wolfy Bot Dashboard",
    description:
      "A comprehensive Discord bot management dashboard featuring command management, server analytics, and automated moderation tools.",
    demo_url: "https://wolfy-navy.vercel.app/",
    badges: [
      {
        title: "Next.js",
        className: "bg-black/40 border-steel-400 text-white-50",
      },
      {
        title: "Discord.js",
        className: "bg-steel-900 border-steel-400 text-[#7289da]",
      },
      {
        title: "React",
        className: "bg-steel-900 border-steel-400 text-blue-400",
      },
    ],
    img: {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project4-uG9wUxsxP0qziTDfaJU3MG0Og7EnOr.png",
      alt: "Wolfy Discord Bot Dashboard",
    },
    extras_className: {
      container: "border border-slate-200 dark:border-zinc-700 h-full",
      btnDemo: "bg-indigo-500 hover:bg-indigo-700 text-white",
      btnCode: "",
      cardWrapper: "", // default (doesn't span)
    },
  },
  {
    title: "Ticket System",
    description:
      "A robust support ticketing system with user-friendly interface and admin controls built with Node.js and MongoDB.",
    demo_url: "https://tickets-app-beryl.vercel.app/",
    code_url: "https://github.com/iyousefosama/tickets-app",
    badges: [
      {
        title: "Node.js",
        className: "bg-steel-900 border-steel-400 text-green-300",
      },
      {
        title: "MongoDB",
        className: "bg-blue-800/30 border-steel-400 text-green-600",
      },
    ],
    img: {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project5-J7XTFvA2wQlPx6OQvj80LV6jGFj0Xf.png",
      alt: "Ticket Management System",
    },
    extras_className: {
      container: "border border-slate-200 dark:border-zinc-700 h-full",
      btnDemo: "bg-zinc-600 hover:bg-zinc-700 text-white",
      btnCode: "",
      cardWrapper: "", // default (no col-span)
    },
  },
];

const techStackImgs: TechStackImg[] = [
  { name: "Front-end Developer", imgPath: "/images/logos/react.png" },
  { name: "Backend Developer", imgPath: "/images/logos/node.png" },
  { name: "Python Developer", imgPath: "/images/logos/python.svg" },
  { name: "Creative Developer", imgPath: "/images/logos/three.png" },
  { name: "Project Manager", imgPath: "/images/logos/git.svg" },
];

const techStackIcons: TechStackIcon[] = [
  {
    name: "Front-end Developer",
    modelPath: "/models/tech/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/tech/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/tech/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Creative Developer",
    modelPath: "/models/tech/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/tech/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards: ExpCard[] = [
  {
    review:
      "Yousef osama created a clean and powerful dashboard for managing Discord servers. His attention to detail and user-focused design really makes things easy to use.",
    imgPath: "/images/logos/wolfy.jpg",
    logoPath: "/images/logos/react.png",
    iconType: "react",
    title: "Full Stack Developer – Wolfy Bot Dashboard",
    date: "Jan 2023 – Present",
    responsibilities: [
      "Designed and built a full-stack dashboard using Next.js, Express.js, MongoDB, and TailwindCSS.",
      "Integrated Discord OAuth2 for secure user authentication.",
      "Implemented dynamic guild settings, embed builders, and live data syncing with WebSockets.",
    ],
    technologies: ["Next.js", "MongoDB", "TailwindCSS", "Discord OAuth2"],
  },
  {
    review:
      "Tomados is a simple yet effective Todos app built by Yousef and a teammate. It's fast, clean, and shows a great understanding of full-stack concepts.",
    imgPath: "/images/logos/tomados-logo.png",
    logoPath: "/images/logos/node.png",
    iconType: "nodejs",
    title: "Full Stack Developer – Tomados Todos App",
    date: "May 2025 – Present",
    responsibilities: [
      "Created a real-time Todo application with multi-user support using Next.js and MongoDB.",
      "Used TypeScript to build a scalable and type-safe front-end architecture with dynamic routing.",
      "Implemented Next OAuth for seamless authentication and user-specific data storage.",
      "Focused on intuitive user experience with responsive layout and clean UI design.",
    ],
    technologies: ["Next.js", "MongoDB", "TypeScript", "Next OAuth"],
  },
  {
    review:
      "Yousef isn't limited to just web development — he constantly pushes himself by learning new tech stacks, building games, desktop apps, and exploring creative ideas beyond the browser.",
    imgPath: "/images/ok.png",
    logoPath: "/images/logos/git.svg",
    iconType: "git",
    title: "Versatile Developer – Games & Desktop Apps",
    date: "2020 – Present",
    responsibilities: [
      "Experimented with game development using Unity and JavaScript-based engines like Phaser.",
      "Built cross-platform desktop applications using Electron combined with React and TailwindCSS.",
      "Always learning — exploring C++, Java, and Python to expand skillset and apply them in real-world creative projects.",
    ],
    technologies: [
      "Unity",
      "JavaScript",
      "Godot",
      "Electron",
      "React",
      "TailwindCSS",
      "C++",
      "Java",
      "Python",
    ],
  },
];

const expLogos: Logo[] = [
  { name: "logo1", imgPath: "/images/logos/logo1.png" },
  { name: "logo2", imgPath: "/images/logos/logo2.png" },
  { name: "logo3", imgPath: "/images/logos/logo3.png" },
];

const social: Social[] = [
  {
    name: "insta",
    icon: FaInstagram,
    link: "https://www.instagram.com/iiyousefosama/",
  },
  {
    name: "x",
    icon: FaXTwitter,
    link: "https://x.com/iiyousefosama",
  },
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/iyousefosama",
  },
];

export {
  words,
  abilities,
  counterItems,
  projects,
  expCards,
  expLogos,
  social,
  techStackIcons,
  techStackImgs,
  navLinks,
};
