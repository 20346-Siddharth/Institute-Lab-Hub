import React, {useState}from "react";
import Learnerlogin from "../LoginSignUpcomp/Learnerlogin";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

// import React from "react";
//


function Login() {

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (event) => {
    setSelectedUser(event.target.value);
  };

  return (
    <>
 
      <Navbar/>
  <section id="hero" className="d-flex align-items-center">
 
<div className="container">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 md-50" data-aos="fade-up" data-aos-delay="200">
      <h1>Institute Lab Hub</h1>
      <h2>Web application to share institute workshopes and labs for experimental study</h2>
      <div className="row">
     <h2>Continue As</h2>
     <div>
      <select onChange={handleUserSelect}>
        <option value="">Select user category</option>
        <option value="learner">Learner</option>
        <option value="institute">Institute</option>
      </select>
      {selectedUser === "learner" && (
        <div>
          {/* <button>Login as learner</button>
          <button>Sign up as learner</button> */}
           <Link to="/loginlearner" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-12  ">Login</Link>
        <Link to="/signuplearner" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-12 mx-4">SignUp</Link>
        </div>
      )}
      {selectedUser === "institute" && (
        <div>
           <Link to="/logininstitute" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-12 ">Login</Link>
        <Link to="/signupinstitute" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-12 mx-4">SignUp</Link>
        </div>
      )}
    </div>
      </div>
      {/* <div className="d-flex justify-content-center justify-content-lg-start cloumn">
        
        <Link to="/loginlearner" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-12  ">Login</Link>
        <Link to="/signuplearner" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-12 mx-4">SignUp</Link>
        
        <Link to="/logininstitute" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-12 ">Login</Link>
        <Link to="/signupinstitute" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-12 mx-4">SignUp</Link>
        
      </div> */}
     
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
      <img src="https://unsplash.com/s/photos/solid-background" className="img-fluid animated" alt=""/>
    </div>
  </div>
</div>

</section> 

    </>
  );
}

export default Login;
