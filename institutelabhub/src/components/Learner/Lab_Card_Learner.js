import React ,{useState}from 'react'
import "../css/Learner.css"
import ReactDOM from "react-dom";
import Learner_Landing from './Learner_Landing';
import { Link } from 'react-router-dom';
import Book_Slot from './Book_Slot';


const Lab_Card_Learner = (props) => {
 
  // const bookslot =()=>{
  //  // window.alert("Request for Booking slot is accepted")
  //  <Book_Slot title='item.labName'/>
  // }
  // const bookslot = (labName,description,instituteName,location,fees) => {
    
  //     const title = labName;
  //     const descriptio = description;
  //     const institute = instituteName;
  //     const locatio = location;
  //     const price = fees;
  //     <Book_Slot title={title} institute={institute} location={locatio} price={price} description={descriptio}/>
    
  // };
  // const bookslot = (labName,description,instituteName,location,fees) => {
  //   return () => {
  //     const title = labName;
  //     const descriptio = description;
  //     const institute = instituteName;
  //     const locatio = location;
  //     const price = fees;
  //     ReactDOM.render(<Book_Slot title={title} institute={institute} location={locatio} price={price} description={descriptio}/>, document.getElementById("root"));
  //   };
  // };
  const [showDetails, setShowDetails] = useState(false);
  const [selectedLab, setSelectedLab] = useState(null);

  const bookslot = (lab) => {
    setShowDetails(true);
    setSelectedLab(lab);
  };

  const hideDetails = () => {
    setShowDetails(false);
  };

  // document.cookie = `labId=${item._id};  path=/`;
  return (
<>
    {props.data && props.data.map((item) => (
      //<li key={item.id}>{item.name}</li>
      
    <div className="searchItem" key={item._id} >
    
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.labName}</h1>
        <span className="siDistance" >{item.description}</span>
        <span className="siTaxiOp">Verified</span>
        <span className="siSubtitle">
          Institute - {item.instituteName}
        </span>
        <span className="siFeatures">
          Location - {item.location}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice" >{item.fees}</span>
          <span className="siTaxOp">Inclusive of all taxes</span>
          <button className="siCheckButton" >
          {/* <button className="siCheckButton" onClick={bookslot(item.labName,item.description,item.instituteName,item.location,item.fees)}> */}
          <Link to={`/bookslot/${item.labName}/${item.description}/${item.instituteName}/${item.location}/${item.fees}/${item._id}`}>view details</Link>
            
            </button>
          {/* <button className="siCheckButton">
            <Link to="/bookslotform"> Book Slot</Link>
           
            </button> */}
        </div>
      </div>
      {/* {document.cookie = `labId=${item._id}; path=/`} */}
    </div>
     ))}
     {/* {showDetails && (
        <div className="overlay" onClick={hideDetails}>
          <div className="detailsPopup" onClick={(e) => e.stopPropagation()}>
            <Book_Slot
              title={selectedLab.labName}
              institute={selectedLab.instituteName}
              location={selectedLab.location}
              price={selectedLab.fees}
              description={selectedLab.description}
            />
          
             </div>
        </div>
     )} */}
    </>
  );
};

export default Lab_Card_Learner;