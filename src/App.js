import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/log-in/Login';
import SignUp from './Components/sign-up/Sign-Up';
import LandingPage from './Components/Landing_Page/Landing_Page';
import Navbar from "./Components/Navbar/Navbar";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App () {
  return (
      <div className="App"> 
        <BrowserRouter>
            <Navbar />
            <Popup trigger={<button>Book Consultation</button>} position="right center">
            <div>Popup Content Here!</div>
            </Popup>
              <Routes>
                {/*Both 'Path' and 'element' refers to the respective function components */}
                <Route path="/LandingPage" element ={<LandingPage />} /> 
                <Route path='/SignUp' element ={<SignUp />} />
                <Route path='/Login' element ={<Login />} />
                <Route path='/InstantConsultation' element ={<InstantConsultation />} />
              </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;
