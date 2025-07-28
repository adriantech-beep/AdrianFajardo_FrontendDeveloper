import { motion as Motion } from "framer-motion";
import "@fontsource/orbitron/700.css";
import { Link } from "react-router-dom";
import missionData from "../src/mission_data/mission_data";

const MissionLog = () => {
  return (
    <section id="mission-log" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-[Orbitron] text-cyan-400 mb-8 text-center">
          Mission Log
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {missionData.map((mission, i) => (
            <Motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#1e293b] p-6 rounded-xl shadow-lg border border-cyan-500/10 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-audiowide text-cyan-300 mb-2">
                {mission.title}
              </h3>
              <p className="text-sm text-white/80 mb-4">
                {mission.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-cyan-400">
                {mission.technologies.map((tag) => (
                  <span
                    key={tag}
                    className="bg-cyan-400/10 px-2 py-1 rounded-md border border-cyan-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <Link
                  to={`/mission/${mission.id}`}
                  className="text-cyan-400 hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionLog;
