// import { Router } from 'react-router-dom';
import './App.css';
import Add_Lab from './components/Institute/Add_Lab';
import Institute_Landing from './components/Institute/Institute_Landing';
import Landing from './components/Landing';
import Learner_Landing from './components/Learner/Learner_Landing';
import Institutelogin from './components/LoginSignUpcomp/Institutelogin';
import InstituteSignUp from './components/LoginSignUpcomp/InstituteSignUp';
import Learnerlogin from './components/LoginSignUpcomp/Learnerlogin';
import LearnerSignUp from './components/LoginSignUpcomp/LearnerSignUp';
import Firstview from './components/landing components/Firstview'
import Book_Slot from './components/Learner/Book_Slot'
import Verifyotp from './components/LoginSignUpcomp/Verifyotp';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './components/landing components/Navbar';
import Book_Slot_Form from './components/Learner/Book_Slot_Form';
import Success_Page from './components/Learner/Success_Page';
import Seebookedlabs from './components/Learner/Seebookedlabs';
import BookedLearner from './components/Institute/BookedLearner';
function App() {
  return (
    <>
     {/* <Learner_Landing/> */}
     {/* <Navbar/> */}
    <Router>
    <div>
     
      
      {/* <Institutelogin/> */}
      {/* <Learnerlogin/> */}
      {/* <LearnerSignUp/> */}
      {/* <InstituteSignUp/> */}
      {/* <Add_Lab/> */}
      {/* <Institute_Landing/> */}
     
 
      <Routes>
   <Route path="/" element={<Landing/>}/>
          {/* learner login and signup routing */}
          <Route path="/loginlearner" element={<Learnerlogin/>}/>
          <Route path="/signuplearner" element={<LearnerSignUp/>}/>

          {/* institute login and signup routing */}
          <Route path="/logininstitute" element={<Institutelogin/>}/>
          <Route path="/signupinstitute" element={<InstituteSignUp/>}/>

            {/* login to signup using register for learner*/}
          <Route path="/signuplearner" element={<LearnerSignUp/>}/>
      
            {/* login to signup using register for institute*/}
          <Route path="/signupinstitute" element={<InstituteSignUp/>}/>


            {/* Home to firstview routing*/}
          <Route path="/firstview" element={<Firstview/>}/>

            {/* Learner landing to lab details routig*/}
           <Route path="/labdetails" element={<Book_Slot/>}/>

           {/* learner login to larner landing */}
           <Route path="/learnerlanding" element={<Learner_Landing/>}/>

           {/* institute login to institute landing */}
           <Route path="/institutelanding" element={<Institute_Landing/>}/>

           {/* learner landing to view detail */}
           {/* <Route path="/viewdetail" element={<Book_Slot/>}/> */}
           <Route path="/bookslot/:labName/:description/:instituteName/:location/:fees/:_id" Component={Book_Slot} />

           {/* Add lab button routing */}
           <Route path="/addlab" Component={Add_Lab}/>

           <Route path="/verifyotp" element={<Verifyotp/>}/>

           {/* link book slot form */}
            <Route path="/bookslotform" Component={Book_Slot_Form}/>

            {/* success page */}

            <Route path="/successpage" element={<Success_Page/>}/>


            <Route path="/seebookedlabs" element={<Seebookedlabs/>}/>


            <Route path="/seebookedlearner/:_id" element={<BookedLearner/>}/>


        </Routes>
    
    </div>
    </Router>
    </>
  );
}

export default App;
