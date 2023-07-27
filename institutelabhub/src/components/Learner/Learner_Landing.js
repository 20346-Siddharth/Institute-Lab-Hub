import '../css/Learner.css'
import Lab_Card_Learner from './Lab_Card_Learner'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Booked_Lab from './Booked_Lab'
import { Link } from 'react-router-dom';
// const fetchData = () => {
//   return fetch("localhost:3000/learnerlanding")
//         .then((response) => response.json())
//         // .then((data) => setUser(data));
// }
export default function Learner_Landing() {
 // const url="http://localhost:4000/api/getAllLabs"
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('http://localhost:4000/api/getAllLabs');
      setData(result.data);
      //document.cookie = `labId=${data._id}; path=/`;
    }
    fetchData();
  }, []);

  const [selectedValue, setSelectedValue] = useState('Search by Institute');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  }
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
   // props.onSearch(searchTerm);
  };
 // const [resultlab, setresultlab] = useState('');
const search=()=>{
  const url = 'http://localhost:4000/api/searchLab'

  const data={
    "searchText": searchTerm,
        "searchBy": selectedValue
  }
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
        .then((res) => {
          console.log(data);
         // showData(data);
         setData(res);
        })
        .catch((error) => console.error(error));
}




  return (
    <>
    {/* Header */}
   
    {/* <Navbar/> */}
    
    <div className="header pt-4 bg-gradient-to-r from-sky-600 to-indigo-600 ">
        <div>
          <div className="headerList">
            <div className="headerListItem active">
              <span>InstituteLabHub</span>
            </div>
             <button  >
              <Link to='/seebookedlabs'>Booked Labs</Link> 
             
            {/* <span>Booked Labs</span> */}
            </button>
          </div>
          <div>
            
              <h1 className="headerTitle">
                Find perfect laboratory according to your needs
              </h1>
              <p className="headerDesc">
                We provide best laboaratory appointment service. Please select a
                lab below and proceed !
              </p>
            
            </div>
           
           
            <div>

              <div className='row p-2 border-2 border-yellow-300 mb-4 bg-blue-500'>
                <div className='col'>
                  
      <label htmlFor="dropdown" >Search By:</label>
      <select id="dropdown"  className='dropdowncss'value={selectedValue} onChange={handleChange}>
        <option value="Search by Institute" >Search by Institute</option>
        <option value="Search by Location">Search by Location</option>
        <option value="Search by Lab">Search by Lab</option>
      </select>
      </div>
      <div className='col'>
        <div className="row">
          <div className="col">
      <form className='dropdowncss' onSubmit={handleSearchSubmit}>
      <input type="text" className='dropdowncss w-58' value={searchTerm} onChange={handleInputChange} placeholder="Search..." />
      
    </form>
    </div>
    <div className=" col p-0">
      <button type="submit"  onClick={search} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-16 border-2 border-white'>Search</button>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
              <br />
              
    {/* Labs */}

    <div className="container grid grid-cols-2 gap-4 px-10">
  
        <Lab_Card_Learner data={data} />
    
    
    </div>

    {/* Footer */}
    <footer
  className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
  <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
    © 2023 Copyright:
    <a
      className="text-neutral-800 dark:text-neutral-400"
      href="https://tailwind-elements.com/"
      >InstituteLabHub</a
    >
  </div>
   </footer>
    </>
  )
}