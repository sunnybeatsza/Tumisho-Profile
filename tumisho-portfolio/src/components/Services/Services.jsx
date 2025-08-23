import React from "react";

export const Services = () => {
  return (
    <div>
      <div id="Services">
        <div className="container px-4 py-5" id="featured-3">
          <h2 className="pb-2 border-bottom text-light">Services</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

             <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">CompTIA Security+ Certified</h3>
              <p>
                <a 
                  href="https://www.credly.com/badges/8fdb0b91-9084-42e4-a7e0-ee07fc120fcf/public_url" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-decoration-none text-info"
                >
                  Click to verify credential
                </a><br/>Demonstrated knowledge and skills to perform core cybersecurity functions, including identifying and mitigating threats, vulnerabilities, and attacks. Proficient in risk management, threat analysis, intrusion detection, and applying security best practices across diverse environments.
              
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">
                Front-end Development
              </h3>
              <p>
                Skilled in building visually engaging, user-friendly, and responsive interfaces. Experienced with modern web technologies including HTML5, CSS3, JavaScript, and React.js to deliver dynamic and interactive web applications.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">Back-end Development</h3>
              <p>
                Proficient in building scalable, secure, and efficient server-side solutions. Skilled in Node.js, Express.js, Java, Python, and JavaScript for developing RESTful APIs, enabling seamless data handling, authentication, and real-time application functionality.
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
                Experienced in working with MongoDB for efficient and scalable NoSQL data storage. Skilled in relational databases including SQL, SQLite, MySQL, and JDBC, with strong knowledge of Object-Relational Mapping (ORM) techniques to streamline database interactions.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">
                Authentication and Authorization
              </h3>
              <p>
                Proficient in implementing secure authentication using JSON Web Tokens (JWT) and integrating Multi-Factor Authentication (MFA) to enhance application security and protect user data.
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
                Version Control with Git
              </h3>
              <p>
                Proficient in using Git for version control, I ensure
                collaboration and codebase integrity throughout the development
                process.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">GitHub/Gitlab Collaboration</h3>
              <p>
                Skilled in using GitHub and GitLab for collaborative development, repository management, and contributing to open-source projects.
              </p>
            </div>
            <div className="feature col">
              <h3 className="fs-2 text-light-emphasis">
                Deployment with Heroku and Netlify
              </h3>
              <p>
               Experienced in deploying web applications on platforms such as Heroku and Netlify, ensuring accessibility, reliability, and smooth delivery of projects online.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
