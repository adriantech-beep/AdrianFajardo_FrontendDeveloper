import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import Logo from "../src/assets/Logo.png";
import "@fontsource/audiowide";
import { HashLink } from "react-router-hash-link";

const links = [
  { label: "Home", href: "/#hero" },
  { label: "Mission Log", href: "/#mission-log" },
  { label: "Flight Record", href: "/#flight-record" },
  { label: "Launch Sequence", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-screen px-4 ${
        isShrunk ? "py-2" : "py-4"
      } bg-transparent backdrop-blur-md border-b border-white/10 text-white z-50 transition-all duration-300`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <img
          src={Logo}
          alt="Logo"
          className={`${
            isShrunk ? "w-12" : "w-16"
          } transition-all duration-300 drop-shadow-md`}
        />

        <ul className="hidden md:flex space-x-8 font-[Audiowide] text-sm">
          {links.map((link) => (
            <Motion.li
              key={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HashLink
                smooth
                to={link.href}
                className="tracking-wide hover:text-cyan-400 transition relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-cyan-400 after:transition-all after:duration-300"
              >
                {link.label}
              </HashLink>
            </Motion.li>
          ))}
        </ul>

        <button
          className="md:hidden text-white focus:outline-none transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <Motion.span
              initial={{ rotate: -90, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="text-2xl"
            >
              ×
            </Motion.span>
          ) : (
            <Motion.span
              initial={{ rotate: 90, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -90, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="text-2xl"
            >
              ☰
            </Motion.span>
          )}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 text-center font-[Audiowide]">
          {links.map((link) => (
            <li key={link.href}>
              <HashLink
                to={link.href}
                className="block text-cyan-300 hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </HashLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
