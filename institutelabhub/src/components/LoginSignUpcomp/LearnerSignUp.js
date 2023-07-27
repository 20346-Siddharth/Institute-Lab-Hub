import React from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from "react";
//import { Link, Navigate } from 'react-router-dom';
function returnHTML(phone) {
  return `
  <!DOCTYPE html>
  <Html>
  
  <head>
      <title>
          Registration Page
      </title>
      <style>
          input[type="submit"] {
              height: 30px;
              width: 100px;
          }
      </style>
  </head>
  
  <body>
      <h3>We have sent an OTP to ${phone} please verify</h3>
      <br>
      <br>
      <form action="http://localhost:4000/api/register/verifyOTP" method="post">
          <label> Phone </label>
          <input type="text" name="phone" size="15" /> <br> <br>
          <label> OTP </label>
          <input type="text" name="otp" size="15" /> <br> <br>
          <div class="btn">
              <input type="submit" value="Verify" />
          </div>
      </form>
  </body>
  
  </html>`;
}
export default function LearnerSignUp() {
//   function returnHTML(phone) {
//     return `
//     <!DOCTYPE html>
//     <Html>
    
//     <head>
//         <title>
//             Registration Page
//         </title>
//         <style>
//             input[type="submit"] {
//                 height: 30px;
//                 width: 100px;
//             }
//         </style>
//     </head>
    
//     <body>
       
//     </body>
    
//     </html>`;
// }
  // const [user,setUser]=useState({fName: '',lName:'',email:'',phone:'',DOB:'',gender:'',institute:'',course:'',year:'',password:'',repeatPassword:''});
  // let name,value;
  // const handleInputs=(e)=>{
  //   console.log(e);
  //   name=e.target.name;
  //   value=e.target.value;
  //   setUser({...user,[name]:value});
  // }
  
  // const PostLData = () =>{
       //e.preventDefault();
      // const url="http://localhost:4000/api/register"
       //const body={fName,lName,email,phone,DOB,gender,institute,course,year,password,repeatPassword}
       const [fName, setfName] = useState('');
       const [lName, setlName] = useState('');
       const [email, setEmail] = useState('');
       const [phone, setphone] = useState('');
       const [DOB, setDOB] = useState('');
       const [gender, setgender] = useState('');
       const [institute, setinstitute] = useState('');
       const [course, setcourse] = useState('');
      // const [year, setyear] = useState('');
       const [password, setPassword] = useState('');
       const [repeatPassword, setrepeatPassword] = useState('');
       const navigate=useNavigate();
       
        const handleRegister =() =>{
          const url = 'http://localhost:4000/api/register';
          const body = {fName,lName ,email,phone, DOB,gender,institute,course,password, repeatPassword};
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
            if(data.verifyOTP){
             // returnHTML(phone);
             navigate('/verifyotp');
            }
            else{
              alert("Wrong Credientials --- Check Again");
            }
           
            if (data.success) {
              console.log(data);
              navigate('/loginlearner');
            }
          })
          .catch(error => console.error(error));
      };
        
      //  const res = fetch(url,{
      //   method:"POST",
      //   body: JSON.stringify({body}),
      //   headers:{
      //           "Content-Type":"application/json"
      //   }
      // })
      //   .then(response => response.json())                   
      //   .then(data => {
      //     console.log(data);
      //     if (data.success) {
      //       navigate('/loginlearner');
      //     }
      //  else{
      //    window.alert("invalid Credientials")
      //  }
      // })
      //   };
  return (

    
    <>
      <section className="h-full">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1   ">
              <form >
                 {/* action="http://localhost:4000/api/register" method="post"> */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="firstName"
                        className="form-control form-control-lg"
                        name="fName"
                        onChange={event => setfName(event.target.value)}
                      />
                      <label className="form-label" htmlFor="firstName">
                        First Name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="lastName"
                        className="form-control form-control-lg"
                        name="lName"
                        onChange={event => setlName(event.target.value)}
                      />
                      <label className="form-label" htmlFor="lastName">
                        Last Name
                      </label>
                    </div>
                  </div>
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
                <div className="row">
                  <div className="col-md-6 mb-4 d-flex align-items-center">
                    <div className="form-outline datepicker w-100">
                      <input
                        type="date"
                        max="2010-12-31"
                        className="form-control form-control-lg"
                        id="birthdayDate"
                        name="DOB"
                        onChange={event => setDOB(event.target.value)}
                      />
                      <label htmlFor="birthdayDate" className="form-label">
                        Date of Birth
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h6 className="mb-2 pb-1">Gender: </h6>

                    
               <select id="gender" name="gender"  onChange={event => setgender(event.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select> 
                    

                    
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="institute"
                    className="form-control form-control-lg"
                    name="institute"
                    onChange={event => setinstitute(event.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example99">
                    Institute
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="course"
                        className="form-control form-control-lg"
                        name="course"
                        onChange={event => setcourse(event.target.value)}
                      />
                      <label className="form-label" htmlFor="Course">
                        Course
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    name="password"
                    onChange={event => setPassword(event.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="rpassword"
                    className="form-control form-control-lg"
                    name="repeatPassword"
                    onChange={event => setrepeatPassword(event.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Confirm Password
                  </label>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" value="submit"className="btn btn-primary btn-lg" onClick={handleRegister}
            >SignUp</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
