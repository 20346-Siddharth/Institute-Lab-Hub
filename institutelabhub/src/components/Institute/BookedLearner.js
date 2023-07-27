import React,{useState,useEffect} from 'react'
import Seebookedlearners from './Seebookedlearners';
import { useParams } from 'react-router-dom';
export default function BookedLearner() {
    const { _id } = useParams();
    document.cookie = `labId=${_id}; path=/`;
    const [learners,setlearners] = useState();
   
    const seelearners=()=>{
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        const labId = document.cookie.replace(/(?:(?:^|.*;\s*)labId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
     fetch('http://localhost:4000/api//institute/labs/bookedLearners', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({
             token: token,
             labId: labId
         })
     })
     .then(response => response.json())
     .then(data => {
       console.log(data);
       setlearners(data);
   })
   .catch(error => console.error(error));
    }
  
  return (
    <>

    <button onClick={seelearners}> See the learners </button>
    
    { learners && <Seebookedlearners data={learners.bookings}/>}
    
    </>
  )
}
