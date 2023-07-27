import React from 'react'

export default function About() {
  return (
    <>
      <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              We, the students of Acropolis Institute of technology and research have tried to solve the SIH problem which is as:
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> Learners of different institute can access resources of other institute</li>
              <li><i className="ri-check-double-line"></i> Dilute the gap between learners and avaibility of resources</li>
              <li><i className="ri-check-double-line"></i> Overcome the disadvantage of online studies i.e. practical knowledge</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Our team includes Sanyam Sethiya: Front-end Developer,Satya Jain: Front-end Developer, Shannee Ahirwar: Back-end developer and Siddharth Patidar: Front-end Developer which are pursuing B.Tech in Computer Science and Engineering form Acropolis Institute of Technology and Research. 
            </p>
            <a href="/" className="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}
