import React from "react";

function About() {
  return (
    <>
  <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          
        </div>

        <div className="row">

          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Siddharth Patidar</h4>
                <span>Front-End Developer</span>
                
                <div className="social">
                  <a href="/"><i className="ri-twitter-fill"></i></a>
                  <a href="/"><i className="ri-facebook-fill"></i></a>
                  <a href="/"><i className="ri-instagram-fill"></i></a>
                  <a href="/"> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
              <h4>Shannee Ahirwar</h4>
                <span>Back-End Developer</span>
               
                <div className="social">
                  <a href="/"><i className="ri-twitter-fill"></i></a>
                  <a href="/"><i className="ri-facebook-fill"></i></a>
                  <a href="/"><i className="ri-instagram-fill"></i></a>
                  <a href="/"> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
              <h4>Sanyam Sethiya</h4>
                <span>Front-End Developer</span>
                <div className="social">
                  <a href="/"><i className="ri-twitter-fill"></i></a>
                  <a href="/"><i className="ri-facebook-fill"></i></a>
                  <a href="/"><i className="ri-instagram-fill"></i></a>
                  <a href="/"> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
              <h4>Satya Jain</h4>
                <span>Front-End Developer</span>
                <div className="social">
                  <a href="/"><i className="ri-twitter-fill"></i></a>
                  <a href="/"><i className="ri-facebook-fill"></i></a>
                  <a href="/"><i className="ri-instagram-fill"></i></a>
                  <a href="/"> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  );
}

export default About;
