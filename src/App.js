import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./Home";
import Office_Information from './pages/Office_Information/Office_Information';
import Login_Screen from './pages/Login_Screen/Login_Screen';
import Token from './pages/Token/Token'
import Password_Reset from './pages/Password_Reset/Password_Reset';
import Create_Account from './pages/Create_Account/Create_Account'
import Home_Screen from './pages/Home_Screen/Home_Screen'
import Create_Office from './pages/Create_Office/Create_Office'
import Admin_Information from './pages/Admin_Information/Admin_Information'
import Create_Administrator from './pages/Create_Administrator/Create_Administrator'
import Edit_Administrator from './pages/Edit_Administrator/Edit_Administrator'

import HelpAndSupport from './pages/HelpAndSupport/HelpAndSupport'
import Account from "./pages/Account/Account"
import Notifications from "./pages/Notifications/Notifications"
import About from "./pages/About/About"
import Categories from "./pages/Categories/Categories"
import Password_Recovery from "./pages/Password_Recovery/Password_Recovery";
import Edit_Office from "./pages/Edit_Office/Edit_Office"

function App() {
  return (
    <div className="App">
      <div>
      <Home/>
      </div>
      <div>
      <Navbar/>
      </div>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home_Screen/>}/>
          <Route path="/Create_Account" element={<Create_Account/>}/>
          <Route path="/Admin_Information" element={<Admin_Information/>}/>
          <Route path="/Password_Recovery" element={<Password_Recovery/>}/>
          <Route path="/Password_Reset" element={<Password_Reset/>}/>
          <Route path="/Create_Office" element={<Create_Office/>}/>
          <Route path="/Edit_Office" element={<Edit_Office/>}/>
          <Route path="/Create_Administrator" element={<Create_Administrator/>}/>
          <Route path="/Home_Screen" element={<Home_Screen/>}/>
          <Route path="/Login_Screen" element={<Login_Screen/>}/>
          <Route path="/Token" element={<Token/>}/>
          <Route path='Edit_Administrator' element={<Edit_Administrator/>}/>
          <Route path="/Office_Information" element={<Office_Information/>}/>
          <Route path="/Account" element={<Account/>}/>
          <Route path="/Notifications" element={<Notifications/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/HelpAndSupport" element={<HelpAndSupport/>}/>
          <Route path="/Categories" element={<Categories/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
