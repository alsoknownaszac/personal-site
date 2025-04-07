import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

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
        Hi There!. My name is Collins. alsoknownaszac, theletterz are my alias.
        <br />I graduated from{" "}
        <a href="https://www.rolofcomputeracademy.edu.ng/">
          Rolof Computer Academy
        </a>{" "}
        and I am also a <a href="https://pti.edu.ng/">PTI</a> alumni.
        <br />
        Fun fact: Once I discover something I find exciting, I tend to get
        completely obsessed with it.
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
        &copy; collins amayo <Link to="/">alsoknownaszac.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
