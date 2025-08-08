import React, { useState } from 'react';
import "./App.css";
import {Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import SignUp from './routes/SignUp';

function App() {

  return (
    <>
    <div className="App">

    <Routes>

     <Route path="/" element={<Home />} />
     <Route path="/Login" element={<Login />} />
     <Route path="/signup" element={<SignUp />} />
    
    </Routes>
 
    </div>  
    </>
  )
}

export default App