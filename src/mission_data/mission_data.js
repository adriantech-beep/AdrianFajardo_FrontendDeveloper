import repair_management from "../assets/project-images/repair-management-system.png";
import tartland_inventory from "../assets/project-images/tartland.png";

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
      "A custom-built web application designed to help small-scale food manufacturers track raw material usage, monitor daily production output, and manage inventory levels in real time..",
    technologies: ["React", "Tailwind", "Node/Express", "MongoDB"],
    demo: "https://tartland-inventory-system.vercel.app/",
    github: "https://github.com/adriantech-beep/tartland-inventory-system.git",
  },
];

export default missionData;
