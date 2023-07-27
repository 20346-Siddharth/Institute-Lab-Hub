//import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from "react";
import {   useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function Add_Lab() {
  // const {val}=useParams();
  // const token={val}
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  const [labName, setlabName] = useState('');
  const [description, setdescription] = useState('');
  const [instituteName, setinstituteName] = useState('');
  const [location, setlocation] = useState('');
  const [available, setavailable] = useState('');
  const [availableSeats, setavailableseats] = useState('');
  const [fees, setfees] = useState('');
  const [country, setcountry] = useState('');
  const [date, setdate] = useState('');
  const navigate=useNavigate();
  const handleLab =() =>{
    //const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    const url = 'http://localhost:4000/api/addLab';
    const body = {labName,description,instituteName,location,available,availableSeats, fees,country,date,token};
    //const variable = props.location.state.token;
    fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
        
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
     
      if (data.success) {
        console.log(data);
        alert("Lab Added Successfully")
        navigate('/institutelanding');
      }
      else{
        console.log(data)
       alert("Wrong Credientials --- Check Again");
     }
    })
    .catch(error => console.error(error));
};
  return (
    <>
<div className="flex justify-center items-center h-fit bg-slate-300">
        <div
          id="form"
          className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-3/6 h-full mt-16 mb-16"
        >
          <form action="">
            <h2 className="text-blue-700 text-3xl font-semibold my-2 text-center ">
            ADD LABORATORY
            </h2>
            <br />
            {/* full name */}
            <label htmlFor="labname" className="text-sm" >
              Laboratory Name
            </label>
            <br />
            <input
              required
              type="text"
              name="labName"
              id="labname"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              onChange={event => setlabName(event.target.value)}
            />

            {/* Institute Name */}
            <label htmlFor="institutename" className="text-sm">
            Institute Name
            </label>
            <br />
            <input
              required
              type="text"
              name="instituteName"
              id="institutename"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              onChange={event => setinstituteName(event.target.value)}
            />
            {/* Country */}
            <label htmlFor="country" className="text-sm">
            Country
            </label>
            <br />
            <input
              required
              type="text"
              name="country"
              id="country"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              onChange={event => setcountry(event.target.value)}
            />
              
           





            {/* Address */}
            <label htmlFor="address" className="text-sm">
             Address
            </label>
            <br />
            <input
            required
              type="text"
              name="location"
              id="address"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              onChange={event => setlocation(event.target.value)}
            />


            {/* Description */}
            <label htmlFor="description" className="text-sm"  onChange={event => setdescription(event.target.value)}>
            Description
            </label>
            <br />
            <textarea required name="description" id="description" rows="3" className="h-24 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
            onChange={event => setdescription(event.target.value)}></textarea>
            <br />

            {/* date of lab available */}
            <label htmlFor="date" className="text-sm">
              Available Date 
            </label>
            <br />
            <input
            required
              type="date"
              name="date"
              id="date"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              onChange={event => setdate(event.target.value)}
            />
            <br />
            {/* Time Slot of Lab available */}
            <label htmlFor="timeslot" className="text-sm">
              Available Time Slot 
            </label>
            <br />
            <input
            required
              type="text"
              name="available"
              id="timeslot"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              onChange={event => setavailable(event.target.value)}
            />
            <br />
            {/*Number of Seats Available available */}
            <label htmlFor="availableseats" className="text-sm">
              Available Seats
            </label>
            <br />
            <input
            required
              type="number"
              name="availableSeats"
              id="availableseats"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              onChange={event => setavailableseats(event.target.value)}
            />
            <br />
            {/* cost */}
            <label htmlFor="cost" className="text-sm">
              Cost per Hour 
            </label>
            <br />
            <input
            required
              type="text"
              name="fees"
              id="cost"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              onChange={event => setfees(event.target.value)}
            />
            <br />
            <br />
            {/* Sign up / submit button */}
            
            {/* <input
              type="submit"
              name=""
              id="signUp"
              className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm"
            /> */}
            <button className="bg-blue-700 w-24 h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm ml-80" onClick={handleLab}>Add</button>
            <br />
            
          </form>
        </div>
      </div>
    </>
  );
}
