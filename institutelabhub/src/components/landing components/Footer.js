import React from "react";

function Footer() {
  return (
    <>
   <footer id="footer">



<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact">
        <h3>Acropolis</h3>
        <p>
         Mangliya Bypass <br/>
          Indore, MP 452010<br/>
          India<br/><br/>
          <strong>Phone:</strong> +1 5589 55488 55<br/>
          <strong>Email:</strong> acropolis@acropolis.in<br/>
        </p>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="/">About us</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="/">Services</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="/">Terms of service</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="/">Privacy policy</a></li>
        </ul>
      </div>

      

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Social Networks</h4>
        <p>Feel free to contact us anytime with below links</p>
        <div className="social-links mt-3">
          <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="/" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

    </div>
  </div>
</div>

<div className="container footer-bottom clearfix">
  <div className="copyright">
    &copy; Copyright <strong><span>InstituteLabHub</span></strong>. All Rights Reserved
  </div>
  
</div>
</footer>
</>
  );
}

export default Footer;
