import React from "react";

export const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <a href="index.html">
            <h1 id="main-logo">MTM._</h1>
          </a>
          <ul id="nav-list">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#About-me">About</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
