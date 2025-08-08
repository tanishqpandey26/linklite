import React, { useState } from 'react';
import "./App.css";
import {Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';

function App() {

  return (
    <>
    <div className="App">

    <Routes>

     <Route path="/" element={<Home />} />
     <Route path="/signin" element={<SignIn />} />
     <Route path="/signup" element={<SignUp />} />
    
    </Routes>
 
    </div>  
    </>
  )
}

export default App