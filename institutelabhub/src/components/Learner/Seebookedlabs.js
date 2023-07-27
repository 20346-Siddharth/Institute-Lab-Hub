
import React,{useState} from 'react'
import Booked_Lab from './Booked_Lab';
export default function Seebookedlabs() {
    const[booklabs,setbooklabs]=useState();
    const bookedlabs=()=>{
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        fetch('http://localhost:4000/api/learner/seeBookedLabs', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: token }),
        })
        .then((response) => response.json())
              .then((bookedlab) => {
                console.log(bookedlab);
               // showData(data);
               setbooklabs(bookedlab);
              //  <Booked_Lab data={booklabs}/>
              })
              .catch((error) => console.error(error));
      }
  return (
   <>
   {/* <h1>HIII</h1> */}
   <button onClick={bookedlabs}>Booked Labs</button>
   
   <Booked_Lab data={booklabs}/>
   </>
  )
}
