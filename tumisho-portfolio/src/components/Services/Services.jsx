import React from "react";

export const Services = () => {
  return (
    <div>
      <div id="Services">
        <div className="container px-4 py-5" id="featured-3">
          <h2 className="pb-2 border-bottom text-light">Services</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">
                Front-end Development
              </h3>
              <p>
                Front-end development is about creating visually stunning and
                user-friendly interfaces. I leverage the latest web
                technologies, including HTML5, CSS3, and JavaScript, to craft
                responsive and engaging web applications. <br />I ensure
                seamless user experiences across devices, making your website or
                application accessible to a broad audience.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">Back-end Development</h3>
              <p>
                The backbone of any robust web application is its back-end. My
                back-end development skills include building scalable, secure,
                and efficient server-side solutions. <br />I work with Node.js
                and Express.js to create RESTful APIs, ensuring smooth data
                handling, authentication, and real-time functionality for your
                application.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">
                Full-stack Development
              </h3>
              <p>
                Combining the power of both front-end and back-end development,
                my full-stack development skills provide end-to-end solutions
                for your web projects. <br /> I am able to seamlessly integrate
                user interfaces with server-side functionalities, ensuring a
                cohesive and reliable user experience.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">Database Management</h3>
              <p>
                I have expertise in working with MongoDB, a NoSQL database,
                ensuring efficient and scalable data storage for your
                applications.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">
                Authentication and Authorization
              </h3>
              <p>
                I am proficient in implementing secure authentication using JSON
                Web Tokens (JWT), enhancing the security of your applications.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">
                Form Handling with Formik
              </h3>
              <p>
                Utilizing Formik, I streamline the process of building and
                handling forms, improving the user experience in data
                collection.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">
                State Management with Redux
              </h3>
              <p>
                I have experience implementing state management in complex
                applications using Redux, ensuring a predictable and centralized
                state.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">
                Version Control with Git
              </h3>
              <p>
                Proficient in using Git for version control, I ensure
                collaboration and codebase integrity throughout the development
                process.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">GitHub Collaboration</h3>
              <p>
                I leverage GitHub for collaborative development, managing
                repositories, and contributing to open-source projects.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">
                Deployment with Heroku and Netlify
              </h3>
              <p>
                I have experience deploying web applications on platforms like
                Heroku and Netlify, ensuring your projects are accessible
                online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
