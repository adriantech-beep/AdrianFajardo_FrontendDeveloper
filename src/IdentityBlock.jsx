import { motion as Motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Star } from "lucide-react"; // optional icon
import "@fontsource/audiowide";

const IdentityBlock = () => {
  return (
    <Motion.div
      className="text-center mt-10 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-center items-center gap-2 text-sm tracking-widest text-white/60 uppercase mb-2">
        <Star className="w-4 h-4 text-cyan-400" />
        Mission Role
      </div>

      <div className="relative inline-block">
        <Motion.h2
          className="relative z-10 text-3xl font-audiowide text-cyan-400"
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <Typewriter
            words={[
              "Front-End Developer",
              "Full Stack MERN Developer",
              "React Specialist",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
            className="font-[Audiowide]"
          />
        </Motion.h2>
      </div>
    </Motion.div>
  );
};

export default IdentityBlock;
