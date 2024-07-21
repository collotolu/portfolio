import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="bg-blue-500 h-[7vh] flex items-center">
      <div className="flex items-center justify-between mx-auto w-[90%]">
        <div className="flex gap-4 text-white">
          <FaInstagram /> <FaXTwitter />
          <CiLinkedin />
          <FaGithub />
        </div>

        <div className="">
          <ul className="flex gap-4 cursor-pointer text-white ">
            <Link to="/about">
              {" "}
              <li className="hover:underline underline-offset-5 transition translate-x-1">
                About
              </li>
            </Link>
            <Link to="">
              <li className="hover:underline underline-offset-5 transition translate-x-1">
                Contact
              </li>
            </Link>
            <Link to="/projects">
              <li className="hover:underline underline-offset-5 transition translate-x-1">
                Projects
              </li>
            </Link>
            <Link to="/resume">
              <li className="hover:underline underline-offset-5 transition translate-x-1">
                Resume
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
