import React from "react";

export const Navbar = () => {
  return (
    <div>
      <header className="nav-bar d-flex justify-content-between text-light align-content-center">
        <h1 className="m-3">MTM._</h1>
        <nav className="m-3">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
