import React, { useEffect, useState } from 'react';
import Lab_Card_Institute from './Lab_Card_Institute'
//import Search_Item from './Search_Item'
import '../css/Institute.css'
import { Link } from "react-router-dom";

export default function Institute_Landing(props) {
  const [labs, setLabs] = useState([]);
  const [info, setinfo] = useState([]);
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  const url="http://localhost:4000/api/institute/myInfo"
  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token })
    })
    .then(response => response.json())
    .then(val => setinfo(val));
  }, [token]);
  useEffect(() => {
    fetch('http://localhost:4000/api/institute/seeMyLabs', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token })
    })
    .then(response => response.json())
    .then(data => setLabs(data));
  }, [token]);
  return (
    
    <>
    
    <div>
      <div className='flex justify-start h-40 w-full text-center text-neutral-50 dark:bg-transparent text-xl bg-gradient-to-r from-sky-600 to-indigo-600'>
      <h1 className='ml-2 mt-2 '>InstituteLabHub</h1>
      <h1 className='ml-96 mt-16 text-5xl font-serif underline decoration-solid decoration-2 underline-offset-8 '>Institute Details</h1>
      </div>
     
      {/* <Header type="list" /> */}
      <div className="listContainer bg-slate-200">
        <div className="listWrapper pt-8">
          <div className="listSearch">
            <h1 className="lsTitle text-2xl">Personal Details</h1>
            <div className="lsItem">
              <h1>{info.instituteName}</h1>
              <h1>{info.email}</h1>
              <h1>{info.phone}</h1>
            </div>
            <br />
            <hr />
            
            <div className="lsItem">
              <h1 className=' lsTitle text-2xl'>Address</h1>
              <h1>{info.address}</h1>
              <h1>{info.state}</h1>
              <h1>{info.pincode}</h1>
              
              
              <div className="lsOptions">
                
              </div>
            </div>
            <button><Link to="/addlab">Add Lab</Link></button>
          </div>
          <div className="listResult ">
          {/* {labs.map(lab => (
          <Lab_Card_Institute key={lab.id} data={lab} />
        ))} */}
        <Lab_Card_Institute data={labs}/>
            {/* <Search_Item />
            <Search_Item />
            <Search_Item />
            <Search_Item />
            <Search_Item />
            <Search_Item /> */}
            {/* <Lab_Card_Institute/>
            <Lab_Card_Institute/>
            <Lab_Card_Institute/>
            <Lab_Card_Institute/> */}
          </div>
        </div>
      </div>
    </div>
    
    <div className="container footer-bottom text-center clearfix">
  <div className="copyright bg-blue-600 flex h-12 justify-center">
    &copy; Copyright <strong><span>InstituteLabHub</span></strong>. All Rights Reserved
  </div>
  
</div>  
    </>
  )
}