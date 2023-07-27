import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Lab_Card_Institute=(props)=> {

  return (
    <>
    {props.data && props.data.map((item) =>(
      <div className="searchItem" key={item._id}>
    <img
      src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
      alt=""
      className="siImg"
    />
    <div className="siDesc">
      <h1 className="siTitle">{item.labName}</h1>
      <span className="siDistance">{item.description}</span>
      <span className="siTaxiOp">Verified</span>
      <span className="siSubtitle">
        Institute -  {item.instituteName}
      </span>
      <span className="siFeatures">
        Location - {item.location}
      </span>
      
    </div>
    <div className="siDetails">
      <div className="siRating">
        <span> </span>
        <span> </span>
        {/* <button> </button> */}
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">{item.fees}</span>
        <span className="siTaxOp">Inclusive of all taxes</span>
        <button className="siCheckButton" >
          
          <Link to={`/seebookedlearner/${item._id}`}>Booked Learners</Link>
          {/* Booked Learners */}
          </button>
      </div>
    </div>
  </div>
    
     ) )}
      </>
  );
}

export default Lab_Card_Institute;