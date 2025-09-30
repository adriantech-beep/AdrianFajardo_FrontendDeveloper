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
  {
    id: "TechFix-AI-Backend",
    title: "TechFix AI Backend",
    image: "",
    description:
      "TechFix Backend is the core API service powering both TechFix AI and TechFix Admin. Built with Node.js and Express, it provides secure authentication, role-based access control, guide management, and media upload services. The backend ensures reliable data flow between the frontend apps, the database, and external services.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB (Mongoose ORM)",
      "JWT + bcrypt.js",
      "Cloudinary for image uploads",
      "Render (backend hosting)",
    ],
    demo: "https://techfix-ai-backend.onrender.com",
    github: "https://github.com/adriantech-beep/techfix-ai-backend.git",
  },
];

export default missionData;
