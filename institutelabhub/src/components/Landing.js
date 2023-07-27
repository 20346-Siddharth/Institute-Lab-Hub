import React from "react";
import "../components/css/Landing.css"
import Team from "./landing components/Team";
import Contact from "./landing components/Contact";
import Firstview from "./landing components/Firstview";
import Footer from "./landing components/Footer";
import Faq from "./landing components/Faq";
import About from "./landing components/About";
import { createRoot } from "react-dom/client";

import Learnerlogin from "./LoginSignUpcomp/Learnerlogin";
import LearnerSignUp from "./LoginSignUpcomp/LearnerSignUp";
function Landing() {
  return (
    <>
    

   <Firstview/>
   <Faq/>
   <Team/>
   <Contact/>
   <About/>
   <Footer/>
   

   
    </>
  );
}

export default Landing;
