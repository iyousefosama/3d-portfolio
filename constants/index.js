const navLinks = [
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

const words = [
  { text: "Ideas", imgPath: "/images/icons/ideas.svg" },
  { text: "Concepts", imgPath: "/images/icons/concepts.svg" },
  { text: "Designs", imgPath: "/images/icons/designs.svg" },
  { text: "Code", imgPath: "/images/icons/code.svg" },
  { text: "Ideas", imgPath: "/images/icons/ideas.svg" },
  { text: "Concepts", imgPath: "/images/icons/concepts.svg" },
  { text: "Designs", imgPath: "/images/icons/designs.svg" },
  { text: "Code", imgPath: "/images/icons/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Satisfied Clients" },
  { value: 50, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const abilities = [
  {
    imgPath: "/images/code.png",
    title: "Clean & Efficient Code",
    desc: "Writing well-structured, optimized code that’s easy to read and maintain.",
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

const techStackImgs = [
  { name: "Front-end Developer", imgPath: "/images/logos/react.png" },
  { name: "Backend Developer", imgPath: "/images/logos/node.png" },
  { name: "Python Developer", imgPath: "/images/logos/python.svg" },
  { name: "Creative Developer", imgPath: "/images/logos/three.png" },
  { name: "Project Manager", imgPath: "/images/logos/git.svg" },
];

const techStackIcons = [
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

const expCards = [
  {
    review: "Yousef osama created a clean and powerful dashboard for managing Discord servers. His attention to detail and user-focused design really makes things easy to use.",
    imgPath: "/images/logos/wolfy.jpg",
    logoPath: "/images/logos/react.png",
    title: "Full Stack Developer – Wolfy Bot Dashboard",
    date: "Jan 2024 – Present",
    responsibilities: [
      "Designed and built a full-stack dashboard using Next.js, Express.js, MongoDB, and TailwindCSS.",
      "Integrated Discord OAuth2 for secure user authentication.",
      "Implemented dynamic guild settings, embed builders, and live data syncing with WebSockets.",
    ],
  },
  {
    review: "Tomados is a simple yet effective Todos app built by Yousef and a teammate. It’s fast, clean, and shows a great understanding of full-stack concepts.",
    imgPath: "/images/logos/tomados-logo.png",
    logoPath: "/images/logos/node.png",
    title: "Full Stack Developer – Tomados Todos App",
    date: "May 2024 – Present",
    responsibilities: [
      "Built a collaborative Todos app with Next.js (App Router), MongoDB, and TypeScript.",
      "Used React Query for efficient state and server-side data management.",
      "Implemented GitHub OAuth login and dynamic user-based data storage.",
    ],
  },
  {
    review: "Yousef isn’t limited to just web development — he constantly pushes himself by learning new tech stacks, building games, desktop apps, and exploring creative ideas beyond the browser.",
    imgPath: "/images/ok.png",
    logoPath: "/images/logos/git.svg",
    title: "Versatile Developer – Games & Desktop Apps",
    date: "2023 – Present",
    responsibilities: [
      "Experimented with game development using Unity and JavaScript-based engines like Phaser.",
      "Built cross-platform desktop applications using Electron combined with React and TailwindCSS.",
      "Always learning — exploring C++, Java, and Python to expand skillset and apply them in real-world creative projects.",
    ],
  }
];


const expLogos = [
  { name: "logo1", imgPath: "/images/logos/logo1.png" },
  { name: "logo2", imgPath: "/images/logos/logo2.png" },
  { name: "logo3", imgPath: "/images/logos/logo3.png" },
];

const social = [
  {
    name: "insta",
    imgPath: "/images/social/insta.png",
    link: "https://www.instagram.com/iiyousefosama/",
  },
  {
    name: "x",
    imgPath: "/images/social/x.png",
    link: "https://x.com/iiyousefosama",
  },
  {
    name: "Github",
    imgPath: "/images/logos/github.png",
    link: "https://github.com/iyousefosama",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  social,
  techStackIcons,
  techStackImgs,
  navLinks,
};

