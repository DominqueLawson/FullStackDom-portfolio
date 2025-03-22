import { Link } from "react-scroll";
import logo from "../assets/FSDLogo.svg";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" />
        <div className="space-x-4">
          <Link to="about" smooth className="cursor-pointer">About</Link>
          <Link to="projects" smooth className="cursor-pointer">Projects</Link>
          <Link to="experience" smooth className="cursor-pointer">Experience</Link>
          <Link to="contact" smooth className="cursor-pointer">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
