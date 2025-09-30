// import repair_management from "../assets/project-images/repair-management-system.png";
// import tartland_inventory from "../assets/project-images/tartland.png";
// import retro_pizza_main from "../assets/project-images/retro-pizza-main.png";
// import retro_pizza_admin from "../assets/project-images/retro-pizza-admin.png";
import TechFixAdmin from "../assets/project-images/techfix-admin.png";
import TechFix from "../assets/project-images/techfix.png";

const missionData = [
  {
    id: "TechFix-AI",
    title: "TechFix AI",
    image: TechFix,
    description:
      "TechFix AI is an AI-powered web app designed to help beginners repair cellphones and laptops safely. It provides step-by-step repair guides, tool and part recommendations, and conversational support through an AI mentor. By combining structured repair data with intelligent chat responses, TechFix AI makes device repair more accessible, affordable, and less intimidating.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "ShadCn Ui",
      "Node.js",
      "Express",
      "Gemini / OpenAI API",
    ],
    demo: "https://techfix-ai-frontend.vercel.app",
    github: "https://github.com/adriantech-beep/techfix-ai-frontend.git",
  },
  {
    id: "TechFix-AI-Admin",
    title: "TechFix AI Admin",
    image: TechFixAdmin,
    description:
      "TechFix Admin is the management dashboard for TechFix AI. It allows administrators and staff to manage repair guides, tools, parts, and user access through a secure, role-based system. The platform ensures that repair content is accurate, organized, and scalable as TechFix AI grows.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "ShadCn Ui",
      "Cloudinary",
      "Node.js",
      "Express",
      "JWT + Google OAuth",
    ],
    demo: "https://techfix-admin-v2.vercel.app",
    github: "https://github.com/adriantech-beep/techfix-admin-v2.git",
  },
  // {
  //   id: "retro_pizza_main",
  //   title: "Retro Pizza",
  //   image: retro_pizza_main,
  //   description:
  //     "A nostalgic-themed online pizza ordering platform designed for a smooth and fun customer experience. Built with React and TailwindCSS, it allows users to browse pizza options, customize orders, and place them in just a few clicks. The frontend features a cart system, responsive design, and seamless API integration with the backend for real-time order tracking. Inspired by classic 80s arcade vibes, the interface delivers both style and functionality.",
  //   technologies: ["React", "Zustand", "Tailwind", "Node/Express", "MongoDB"],
  //   demo: "https://retro-pizza-main.vercel.app/",
  //   github: "https://github.com/adriantech-beep/retro-pizza-main.git",
  // },
  // {
  //   id: "retro_pizza_admin",
  //   title: "Retro Pizza Admin",
  //   image: retro_pizza_admin,
  //   description:
  //     "The Retro Pizza Admin Panel is a role-based management dashboard for handling orders, products, and user access within the Retro Pizza system.",
  //   technologies: [
  //     "React",
  //     "Tailwind",
  //     "Node/Express",
  //     "MongoDB",
  //     "Cloudinary",
  //   ],
  //   demo: "https://retro-pizza-admin.vercel.app/#/login",
  //   github: "https://github.com/adriantech-beep/retro-pizza-admin.git",
  // },
];

export default missionData;
