import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="container moreMargin2">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                Work Experience
              </a>
            </li>
          </ul>
          <p className="text-center text-light-emphasis">© 2023 MTM._ Inc</p>
        </footer>
      </div>
    </div>
  );
};
