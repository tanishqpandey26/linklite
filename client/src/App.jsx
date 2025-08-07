import React, { useState } from 'react';
import "./App.css";
import {Route, Routes } from 'react-router-dom';
import Home from './routes/Home';

function App() {

  return (
    <>
    <div className="App">

    <Routes>

     <Route path="/" element={<Home />} />
    
    </Routes>
 
    </div>  
    </>
  )
}

export default App