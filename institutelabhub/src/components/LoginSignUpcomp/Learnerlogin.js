import React from "react";
import "../css/LoginSignUp.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
//import { useHistory } from 'react-router-dom';

function Learnerlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
    const url = 'http://localhost:4000/api/login';
    const body = { email, password };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          document.cookie = `token=${data.token};  path=/`;
          navigate('/learnerlanding');
        }
        else if(data.not_exist){
          alert("User Not Exists")
        }
        else{
          alert("Invalid Credientials")
        }
      })
      .catch(error => console.error(error));
  };
 
  return (
    <>
  <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 p-4 ">
        <form >
                   
          <div className="form-outline mb-4 ">
            <input type="email" id="email" className="form-control form-control-lg"
              placeholder="Enter a valid email address" name="email"  onChange={event => setEmail(event.target.value)} />
            <label className="form-label" htmlFor="form3Example3">Email address</label>
          </div>

         
          <div className="form-outline mb-3">
            <input type="password" id="password" className="form-control form-control-lg"
              placeholder="Enter password" name="password"  onChange={event => setPassword(event.target.value)}/>
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
           
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="/" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" value="submit"className="btn btn-primary " onClick={handleLogin}
            >
              {/* <Link to="/learnerlanding">Login</Link> */}
              Login
              </button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signuplearner"
                className="link-danger">Register</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>
    </>
  );
}

export default Learnerlogin;
