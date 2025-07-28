import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-cyan-500/10 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-cyan-400 font-audiowide text-lg tracking-wider">
          bugzLightYear
        </div>

        <div className="flex space-x-5">
          <a
            href="https://github.com/adriantech-beep"
            aria-label="Visit Adrian Fajardo's Github profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/adrian-fajardo-965429143/"
            aria-label="Visit Adrian Fajardo's LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:adhrianne29@gmail.com"
            className="text-white hover:text-cyan-400 transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="text-sm text-white/60">
          © {new Date().getFullYear()} Adrian Fajardo
        </div>
      </div>
    </footer>
  );
};

export default Footer;
