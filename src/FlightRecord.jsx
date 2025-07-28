import { motion as Motion } from "framer-motion";
import ProfileImage from "../src/assets/adrianF.png";
import Astronaut from "../src/assets/astronaut-peek.png";
import "@fontsource/audiowide";
import "@fontsource/rajdhani/400.css";
import "@fontsource/rajdhani/500.css";
import "@fontsource/orbitron/700.css";

const skills = [
  { name: "Html", icon: <i class="devicon-html5-plain colored"></i> },
  { name: "Css", icon: <i class="devicon-css3-plain colored"></i> },
  {
    name: "JavaScript",
    icon: <i class="devicon-javascript-plain colored"></i>,
  },
  { name: "React", icon: <i class="devicon-react-original colored"></i> },
  {
    name: "Tailwind CSS",
    icon: <i class="devicon-tailwindcss-original colored"></i>,
  },
  { name: "MongoDB", icon: <i class="devicon-mongodb-plain colored"></i> },
  {
    name: "Node/Express",
    icon: <i class="devicon-express-original colored"></i>,
  },
  { name: "Git", icon: <i class="devicon-git-plain colored"></i> },
];

const FlightRecord = () => {
  return (
    <section
      id="flight-record"
      className="py-24 bg-[#0c1c2b] text-white border-t border-cyan-400/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-[Orbitron] text-3xl font-orbitron text-center text-cyan-400 mb-12">
          Flight Record
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center z-20"
          >
            <div className="relative w-52 h-52 rounded-full overflow-visible ring-4 ring-cyan-400/40 shadow-lg">
              <img
                src={Astronaut}
                alt="Peeking astronaut"
                className="absolute top-0 -left-11 w-20 animate-float z-30"
              />

              <img
                src={ProfileImage}
                alt="Adrian Fajardo"
                className="w-full h-full object-cover rounded-full"
              />

              <div className="absolute inset-0 rounded-full animate-pulse ring-4 ring-cyan-400/20 z-0" />
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-[Audiowide] text-white mb-2">
              Adrian Fajardo
            </h3>
            <p className="text-cyan-400 font-mono text-sm mb-4">
              Front-End Developer · Baguio City
            </p>
            <p className="font-[rajdhani] text-white/80 leading-relaxed mb-6">
              I’m a front-end developer focused on turning ideas into intuitive,
              responsive web interfaces. I work with modern tools like React,
              Tailwind, and Framer Motion to build clean, accessible, and
              animated user experiences. I enjoy building tools that solve real
              problems—whether it’s a custom dashboard, a production tracking
              system, or a creative portfolio. Every detail matters. I’m
              currently open to new opportunities — freelance, remote, or
              full-time work. If you’re looking for someone who blends clean
              design with solid code, let’s connect.
            </p>

            <div>
              <h4 className="text-cyan-300 text-sm uppercase tracking-wide mb-2">
                Core Systems
              </h4>
              <div className="flex flex-wrap gap-2 text-sm">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-0.5 bg-cyan-400/10 border border-cyan-300/20 text-cyan-300 px-3 py-1 rounded-full"
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlightRecord;
