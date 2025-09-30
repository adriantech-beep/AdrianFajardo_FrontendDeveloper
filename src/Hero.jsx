import HeroWave from "./HeroWave";
import IdentityBlock from "./IdentityBlock";
import Starfield from "./StarField";
import "@fontsource/orbitron/700.css";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen px-6 bg-gradient-to-b from-[#0f172a] via-[#0c1c2b] to-black text-white flex flex-col items-center justify-center"
    >
      <Starfield />

      <div className="z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-[Orbitron] tracking-wide">
          Adrian Fajardo
        </h1>

        <IdentityBlock />
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center z-10">
          <a
            href="https://drive.google.com/file/d/1UqYXB4LM5O5CaipL5V8gn9OO-8fJcQOI/view?usp=drive_link"
            download
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-md transition shadow-lg"
            aria-label="Download Adrian Fajardo's Resume"
          >
            Download CV
          </a>

          <div className="flex gap-5 text-white mt-4 sm:mt-0">
            <a
              href="https://github.com/adriantech-beep"
              aria-label="Visit Adrian Fajardo's Github profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-fajardo-965429143/"
              aria-label="Visit Adrian Fajardo's LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:adhrianne29@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>

      <HeroWave />
    </section>
  );
};

export default Hero;
