import React from "react";
import MusicPhoto from "../../Assets/leo-wieling-bG8U3kaZltE-unsplash.jpg";
import TodoListPhoto from "../../Assets/marissa-grootes-ck0i9Dnjtj0-unsplash.jpg";
import CarInventoryPhoto from "../../Assets/josh-berquist-_4sWbzH5fp8-unsplash.jpg";
import WeatherPhoto from "../../Assets/nika-benedictova-iQs9l_9ZSuM-unsplash.jpg";
import RecipePhoto from "../../Assets/elizabeth-french-6Z9BQKksmbE-unsplash.jpg";
import BackgroundPhoto from "../../Assets/luke-chesser-B_oL3jEt5L4-unsplash.jpg";

export const Portfolio = () => {
  return (
    <div>
      <div id="Portfolio">
        <div className="container px-4 py-5 moreMargin" id="custom-cards">
          <h2 className="pb-2 border-bottom text-light">Portfolio</h2>
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${MusicPhoto})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Muso.com
                  </h3>
                  <p className="text-light text-center">
                    Muso is a dynamic application that harnesses the power of
                    Express, React, and Node.js, combined with the iTunes search
                    API, to create a seamless and immersive music experience.
                    This app is designed to be your ultimate music companion,
                    offering a feature-rich platform that allows users to
                    discover, explore, and enjoy their favorite tunes
                    effortlessly.
                  </p>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <button className="btn btn-dark rounded-pill">
                        <a
                          href="https://github.com/sunnybeatsza/ITunes-App"
                          target="_blank"
                        >
                          <i className="bi bi-github" />
                        </a>
                      </button>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#calendar3" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${TodoListPhoto})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    ReactToDo
                  </h3>
                  <p className="text-light text-center">
                    ReactToDo is a dynamic and user-friendly To-Do List
                    application built with React, designed to streamline your
                    daily tasks and enhance your productivity. The app provides
                    a clean and intuitive interface that allows users to easily
                    add, edit, and mark tasks as complete.
                  </p>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <button className="btn btn-dark rounded-pill">
                        <a
                          href="https://github.com/sunnybeatsza/TodoList"
                          target="_blank"
                        >
                          <i className="bi bi-github" />
                        </a>
                      </button>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#calendar3" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
