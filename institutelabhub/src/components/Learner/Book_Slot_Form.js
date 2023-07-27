import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Book_Slot_Form() {
  const labId = document.cookie.replace(/(?:(?:^|.*;\s*)labId\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  const [fName,setfname] = useState('');
  const [lName,setlname] = useState('');
  const [email,setemail] = useState('');
  const [phone,setphone] = useState('');
  const [gender,setgender] = useState('');
  const [labname,setlabname] = useState('');
  const [fees,setfees] = useState('');
  const [available,setavailable] = useState('');
  const [date,setdate] = useState('');

  const Data = {
    'labId': labId
}
fetch('http://localhost:4000/api/getLab', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
})
    .then((response) => response.json())
    .then((data) => {
        //console.log(data);
        setlabname(data.labName);
        setfees(`${data.fees}`);
        setavailable(data.available)
        setdate(data.date)
        // document.getElementById('labName').innerHTML = data.labName;
        // document.getElementById('fees').innerHTML = `Fees: ${data.fees}`;
    })
    .catch((error) => console.error(error));

    const bookslot =()=>{
      const url = "http://localhost:4000/api/bookLab";
       
       
       const data ={fName,lName,email,phone,gender,labId,token}

      fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
           // console.log(data);
            if (data.success == true) {
                alert('You may have received booking confirmation message to your registered E-mail ID')
            }else{
                alert('Failed')
            }
        })
        .catch((error) => console.error(error));

    }
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-slate-300">
        <div
          id="form"
          className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-90"
        >
          <form action="">
            <h2 className="text-blue-700 text-3xl font-semibold my-2 text-center ">
              Book Slot
            </h2>
            {/* full name */}
            <div id="fullName" className="flex flex-row">
              {/* first name */}
              <div id="firstName" className="w-1/2 mr-1">
                <label htmlFor="fname" className="text-sm">
                  First Name
                </label>
                <br />
                <input
                  type="text"
                  name="fName"
                  id="fname"
                  className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
                  onChange={event => setfname(event.target.value)}
                />
              </div>
              {/* last name */}
              <div id="lastName" className="w-1/2 mr-1">
                <label htmlFor="lname" className="text-sm">
                  Last Name
                </label>
                <br />
                <input
                  type="text"
                  name="lName"
                  id="lname"
                  className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
                  onChange={event => setlname(event.target.value)}
                />
              </div>
            </div>
            {/* email */}
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <br />
            <input
              type="emial"
              name="email"
              id="email"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              onChange={event => setemail(event.target.value)}
            />
            {/* mobile */}
            <label htmlFor="mobile" className="text-sm">
              Mobile
            </label>
            <br />
            <input
            
              type="tel"
              name="phone"
              id="mobile"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              onChange={event => setphone(event.target.value)}
            />
            {/* date */}
            <label htmlFor="confirmPassword" className="text-sm">
              Date
            </label>
            <br />
            <input
            disabled
              type="text"
              name=""
              placeholder="10/04/2023"
              id="date"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              value={date}
            />
            {/* radio buttons for gender */}
            <div id="gender" className="text-sm mb-2"onChange={event => setgender(event.target.value)}>
              <p className="mt-2">Gender</p>
              <input
                type="radio"
                name="gender"
                id="male"
                className="text-sm mx-1"
                defaultChecked=""
                // onChange={event => setgender(event.target.value)}
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                id="female"
                className="text-sm mx-1"
                // onChange={event => setgender(event.target.value)}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                name="gender"
                id="other"
                className="text-sm mx-1"
                value='female'                onChange={event => setgender(event.target.value)}
              />
              <label htmlFor="other" 
              //  onChange={event => setgender(event.target.value)}
               >Other</label>
            </div>
        
            {/* time slot */}

            <label htmlFor="timeslot" className="text-sm">
              Time Slot
            </label>
            <br />
            <input
            disabled
              type="number"
              name=""
              placeholder="Time Slot Available"
              id="timeslot"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              value={available}
            />
            <br />
            {/* cost */}
            <label htmlFor="timeslot" className="text-sm">
              Total cost 
            </label>
            <br />
            <input
             disabled
              type="text"
              name=""
              id="cost"
              className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              placeholder="$35"

              value={fees}
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
            <input type="button" className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm" placeholder="Submit" value='Submit' onClick={bookslot}/>
            {/* <Link to='/successpage'>Submit</Link> */}
            
            <br />
            
          </form>
        </div>
      </div>
    </>
  );
}
