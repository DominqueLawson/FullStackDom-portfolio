import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/FSDLogo.svg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-20 top-0 left-0 w-full p-4 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/95 shadow-lg backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-auto transition-transform duration-300 hover:scale-105"
        />
        <div className="space-x-6 text-gray-300 font-medium">
          <Link
            to="about"
            smooth
            duration={600}
            className="cursor-pointer hover:text-purple-400 transition-colors"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth
            duration={600}
            className="cursor-pointer hover:text-purple-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            to="experience"
            smooth
            duration={600}
            className="cursor-pointer hover:text-purple-400 transition-colors"
          >
            Experience
          </Link>
          <Link
            to="contact"
            smooth
            duration={600}
            className="cursor-pointer hover:text-purple-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
