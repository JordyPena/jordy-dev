import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Nav.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GrIcons from "react-icons/gr";
function Nav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div>
        <div className="navbar">
          <button className="menu-bars" onClick={showSidebar}>
            <FaIcons.FaBars />
          </button>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/">
                <AiIcons.AiFillHome /> Home
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/projects">
                <GrIcons.GrProjects /> Projects
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/contact">
                <IoIcons.IoIosContact /> Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* ///////////////////////// */}
        <div className="name-link">
          <Link to="/">Jordy Peña</Link>
        </div>
        <div className="link-container">
          <div className="nav-link">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-link">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="nav-link">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
