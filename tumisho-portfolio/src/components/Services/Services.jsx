import React from "react";

export const Services = () => {
  return (
    <div>
      <div id="Services">
        <div className="container px-4 py-5" id="featured-3">
          <h2 className="pb-2 border-bottom text-light">Services</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">Front-end </h3>
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
              <h3 className="fs-2 text-light-emphasis">Back-end</h3>
              <p>
                The backbone of any robust web application is its back-end.My
                back-end development skills include building scalable, secure,
                and efficient server-side solutions. <br />I work with Node.js
                and Express.js to create RESTful APIs, ensuring smooth data
                handling, authentication, and real-time functionality for your
                application.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">Full-stack</h3>
              <p>
                Combining the power of both front-end and back-end
                development,my full-stack development skills provide end-to-end
                solutions for your web projects. <br /> I am able to seamlessly
                integrate user interfaces with server-side functionalities,
                ensuring a cohesive and reliable user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
