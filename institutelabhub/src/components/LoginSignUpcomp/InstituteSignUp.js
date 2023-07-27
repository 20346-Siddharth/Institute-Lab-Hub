import React, { useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function InstituteSignUp() {
  const [instituteName, setinstituteName] = useState('');
   const [email, setEmail] = useState('');
  const [phone, setphone] = useState('');
  const [address, setaddress] = useState('');
  const [state, setstate] = useState('');
  const [pincode, setpincode] = useState('');
  const [password, setpassword] = useState('');
  const navigate=useNavigate();
  
   const handleRegister =() =>{
     const url = 'http://localhost:4000/api/instituteRegister';
     const body = {instituteName,email,phone, address,state,pincode,password};
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
       if(data.AlreadyExists){
         alert("User Already Exists");
       }
      //  if(data.verifyOTP){
      //   // returnHTML(phone);
      //   navigate('/verifyotp');
      //  }
      
      
       if (data.success) {
         console.log(data);
         navigate('/logininstitute');
       }
       else{
        alert("Wrong Credientials --- Check Again");
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
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1   ">
              <form method="POST">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="instituteName"
                    className="form-control form-control-lg"
                    name="instituteName"
                    onChange={event => setinstituteName(event.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Institute Name
                  </label>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <input
                        type="email"
                        id="emailAddress"
                        className="form-control form-control-lg"
                        name="email"
                        onChange={event => setEmail(event.target.value)}
                      />
                      <label className="form-label" htmlFor="emailAddress">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <input
                        type="tel"
                        id="phoneNumber"
                        className="form-control form-control-lg"
                        name="phone"
                        onChange={event => setphone(event.target.value)}
                      />
                      <label className="form-label" htmlFor="phoneNumber">
                        Phone Number
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="address"
                    className="form-control form-control-lg"
                    name="address"
                    onChange={event => setaddress(event.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example8">
                    Address
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="state"
                        name="state"
                        className="form-control form-control-lg"
                        onChange={event => setstate(event.target.value)}
                      />
                      <label className="form-label" htmlFor="firstName">
                        State
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="pinCode"
                        name="pincode"
                        className="form-control form-control-lg"
                        onChange={event => setpincode(event.target.value)}
                      />
                      <label className="form-label" htmlFor="lastName">
                        Pin Code
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control form-control-lg"
                    onChange={event => setpassword(event.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>

                <div className="text-center  mt-4 pt-2">
                  <button type="button" className="btn btn-primary  "onClick={handleRegister} >
                    SignUp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
