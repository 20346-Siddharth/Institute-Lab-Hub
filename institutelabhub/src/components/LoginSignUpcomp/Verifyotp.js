import React from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Verifyotp(){
    const [phone, setphone] = useState('');
    const [otp, setotp] = useState('');
    const navigate=useNavigate();
    const VerifyOTP =()=>{
        const url1='http://localhost:4000/api/register/verifyOTP';
        const body={phone,otp};
        fetch(url1,{
          method:'POST',
          body:JSON.stringify(body),
          headers:{
            'Content-Type': 'application/json'
          }

        })
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            if(data.success){
                navigate('/loginlearner');
            }
            else{
                alert("Check Credientials again");
            }
        })
       }
   return(
    
    <>
         
        <br/>
        <br/>
        <form >
        <h3>Enter phone number</h3>
            {/* <label> Phone </label> */}
           
            <input type="text" name="phone"  className="form-control form-control-lg" onChange={event => setphone(event.target.value)}/> <br/> <br/>
            <h3>We have sent an OTP to ${phone} please verify</h3>
            <label> OTP </label>
            <input type="text" name="otp" size="15"  className="form-control form-control-lg" onChange={event => setotp(event.target.value)} /> <br/> <br/>
            <div className="btn">
                <button type="button" value="submit" onClick={VerifyOTP} > Verify</button>
            </div>
        </form>

    </>
   )
}