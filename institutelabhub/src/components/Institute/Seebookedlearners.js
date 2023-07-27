import React ,{useState}from 'react'
import "../css/Learner.css"
import ReactDOM from "react-dom";

import { Link } from 'react-router-dom';



const Seebookedlearners = (props) => {



  return (
<>
    {Array.isArray(props.data) && props.data.map((item) => (
      //<li key={item.id}>{item.name}</li>
      
    <div className="searchItem" key={item.bookingId} >
    
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Learner-Name:{item.name}</h1>
        <span className="siDistance" >Booking-Id:{item.bookingId}</span>
        <span className="siTaxiOp">Verified</span>
        <span className="siSubtitle">
          Email - {item.email}
        </span>
        <span className="siFeatures">
          Phone - {item.phone}
        </span>
        <span className="siCancelOp"></span>
        <span className="siCancelOpSubtitle">
          {/* Institute Name -{item.instituteName} */}
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          {/* <span>Location-{item.location}</span> */}
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          {/* <span className="siPrice" >{item.fees}</span> */}
          {/* <span className="siTaxOp">Institute ID-{item.instituteId}</span> */}
          <button className="siCheckButton" >
        
          
            
            </button>
        
        </div>
      </div>
    
    </div>
     ))}
     
    </>
  );
};

export default Seebookedlearners;