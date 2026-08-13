import React from "react";
import Profile2 from "../../Assets/Profile4.jpg";

export const AboutMe = () => {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center moreMargin" id="About-me">
        <img src={Profile2} alt="" className="profile-photo" />
        <h1 className="display-5 fw-bold text-body-emphasis">About me</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-3">Mohube Tumisho Makgeru</p>
          <p className="">
            I am a CompTIA Security+ certified professional with a strong foundation in cybersecurity, software development, and business operations. I’ve supported international clients through customer advisory roles focused on service delivery, renewals, documentation, and issue resolution , gaining strong analytical and communication skills. 

            <br/>
            <br/>
            Technically, I’m proficient in Java, SQL, Git, GitHub, GitLab, Python, Linux, Docker and full stack tools including JavaScript, React, Node.js, Express.js and MongoDB. I also bring experience with Agile development, REST APIs, and version control platforms, enabling me to contribute to enablement, documentation, and system optimization.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
