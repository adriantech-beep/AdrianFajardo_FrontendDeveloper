import repair_management from "../assets/project-images/repair-management-system.png";
import tartland_inventory from "../assets/project-images/tartland.png";
import retro_pizza_main from "../assets/project-images/retro-pizza-main.png";
import retro_pizza_admin from "../assets/project-images/retro-pizza-admin.png";

const missionData = [
  {
    id: "repair-system",
    title: "Repair Management System",
    image: repair_management,
    description:
      "A system that helps technicians manage and track equipment repairs, work orders, and reports.",
    technologies: ["React", "Styled-Components", "DaisyUi", "Supabase"],
    demo: "https://repair-management-system.vercel.app",
    github: "https://github.com/adriantech-beep/repair-management-system.git",
  },
  {
    id: "tartland_inventory",
    title: "Tartland Inventory System",
    image: tartland_inventory,
    description:
      "A custom-built web application designed to help small-scale food manufacturers track raw material usage, monitor daily production output, and manage inventory levels in real time.",
    technologies: ["React", "Tailwind", "Node/Express", "MongoDB"],
    demo: "https://tartland-inventory-system.vercel.app/",
    github: "https://github.com/adriantech-beep/tartland-inventory-system.git",
  },
  {
    id: "retro_pizza_main",
    title: "Retro Pizza",
    image: retro_pizza_main,
    description:
      "A nostalgic-themed online pizza ordering platform designed for a smooth and fun customer experience. Built with React and TailwindCSS, it allows users to browse pizza options, customize orders, and place them in just a few clicks. The frontend features a cart system, responsive design, and seamless API integration with the backend for real-time order tracking. Inspired by classic 80s arcade vibes, the interface delivers both style and functionality.",
    technologies: ["React", "Zustand", "Tailwind", "Node/Express", "MongoDB"],
    demo: "https://retro-pizza-main.vercel.app/",
    github: "https://github.com/adriantech-beep/retro-pizza-main.git",
  },
  {
    id: "retro_pizza_admin",
    title: "Retro Pizza Admin",
    image: retro_pizza_admin,
    description:
      "The Retro Pizza Admin Panel is a role-based management dashboard for handling orders, products, and user access within the Retro Pizza system.",
    technologies: [
      "React",
      "Tailwind",
      "Node/Express",
      "MongoDB",
      "Cloudinary",
    ],
    demo: "https://retro-pizza-admin.vercel.app/#/login",
    github: "https://github.com/adriantech-beep/retro-pizza-admin.git",
  },
];

export default missionData;
