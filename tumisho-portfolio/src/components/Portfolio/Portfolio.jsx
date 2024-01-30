import React from "react";

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
                  background:
                    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../Assets/images/josh-berquist-_4sWbzH5fp8-unsplash.jpg")',
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
                    CarFinder Pro is the ultimate app for conveniently locating
                    your vehicle in crowded parking lots, busy city streets, or
                    unfamiliar places.
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
                  background:
                    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../Assets/images/nika-benedictova-iQs9l_9ZSuM-unsplash.jpg")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    To-do List
                  </h3>
                  <p className="text-light text-center">
                    WeatherNow is your go-to app for reliable weather forecasts
                    and essential meteorological data.
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
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{
                  background:
                    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("../Assets/images/elizabeth-french-6Z9BQKksmbE-unsplash.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Car Inventory
                  </h3>
                  <p className="text-light text-center">
                    The "Recipes" app is a handy tool for managing your meal
                    orders and exploring new recipes based on ingredients.
                  </p>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <button className="btn btn-dark rounded-pill">
                        <a
                          href="https://github.com/sunnybeatsza/Car-Inventory"
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
                  background:
                    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("../Assets/images/elizabeth-french-6Z9BQKksmbE-unsplash.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Weather App
                  </h3>
                  <p className="text-light text-center">
                    The "Recipes" app is a handy tool for managing your meal
                    orders and exploring new recipes based on ingredients.
                  </p>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <button className="btn btn-dark rounded-pill">
                        <a
                          href="https://github.com/sunnybeatsza"
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
                  background:
                    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("../Assets/images/elizabeth-french-6Z9BQKksmbE-unsplash.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Recipes App
                  </h3>
                  <p className="text-light text-center">
                    The "Recipes" app is a handy tool for managing your meal
                    orders and exploring new recipes based on ingredients.
                  </p>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <button className="btn btn-dark rounded-pill">
                        <a
                          href="https://github.com/sunnybeatsza/Recipe-App"
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
                  background:
                    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("../Assets/images/elizabeth-french-6Z9BQKksmbE-unsplash.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Background Generator
                  </h3>
                  <p className="text-light text-center">
                    The "Recipes" app is a handy tool for managing your meal
                    orders and exploring new recipes based on ingredients.
                  </p>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <button className="btn btn-dark rounded-pill">
                        <a
                          href="https://github.com/sunnybeatsza/Background-Generator"
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
