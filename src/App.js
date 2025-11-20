import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/log-in/Login';
import SignUp from './Components/sign-up/Sign-Up';
import LandingPage from './Components/Landing_Page/Landing_Page';
import Navbar from "./Components/Navbar/Navbar";

function App () {
  return (
      <div className="App"> 
        <BrowserRouter>
            <Navbar />
              <Routes>
                {/*Both 'Path' and 'element' refers to the respective function components */}
                <Route path="/LandingPage" element ={<LandingPage />} /> 
                <Route path='/SignUp' element ={<SignUp />} />
                <Route path='/Login' element ={<Login />} />
              </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;
