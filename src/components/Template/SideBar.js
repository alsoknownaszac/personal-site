import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } =
  "https://avatars.githubusercontent.com/u/77975763?s=400&u=fc0c711b116c5ad0ad64184fbca1db404b912d6d&v=4"; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Collins Amayo</h2>
        <p>
          <a href="mailto:mayo16collins@gmail.com">email@me.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Michael. I graduated from{" "}
        <a href="https://www.rolofcomputeracademy.edu.ng/">
          Rolof Computer Academy
        </a>{" "}
        and I am also a<a href="https://pti.edu.ng/">PTI</a> alumni
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
