import "@fontsource/orbitron/700.css";
import "@fontsource/audiowide";
import "@fontsource/rajdhani";
import { HashLink } from "react-router-hash-link";

const MissionLogDetail = ({ project }) => {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center justify-center">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="max-w-2xl h-95 rounded-xl shadow-md p-4"
            />
          ) : (
            <p className="text-gray-50 font-bold">No image to show</p>
          )}
        </div>

        <h2 className="text-3xl font-bold font-[Orbitron] text-cyan-400">
          {project.title}
        </h2>

        <p className="text-white/80 font-[rajdhani] leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-cyan-500/20 border border-cyan-400 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 🔗 Links */}
        <div className="mt-6 flex gap-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 text-[#0f172a] px-4 py-2 rounded font-semibold hover:bg-cyan-300 transition active:scale-95"
            >
              🔗 Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded font-semibold hover:bg-cyan-400 hover:text-[#0f172a] transition active:scale-95"
            >
              🛠 GitHub Repo
            </a>
          )}
        </div>
      </div>

      <div className="text-center mt-8">
        <HashLink
          to="/#mission-log"
          smooth
          className="text-cyan-400 underline hover:text-cyan-300 font-[rajdhani]"
        >
          ← Return to Mission Log
        </HashLink>
      </div>
    </section>
  );
};

export default MissionLogDetail;
