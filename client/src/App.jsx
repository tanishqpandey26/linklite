import React, { useState } from 'react';
import "./App.css";
import {Navigate,Route, Routes } from 'react-router-dom';
import RefreshHandler from './components/RefreshHandler';
import Home from './routes/Home';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Dashboard from "./routes/Dashboard";

function App() {

  const [isAuthenticated, setIsAuthenticated]= useState(false);

  const PrivateRoute = ({element})=>{
    return isAuthenticated ? element : <Navigate to="/login"/>
  }


  return (
    <>
    <div className="App">

      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>

    <Routes>

     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<SignUp />} />
     <Route path='/dashboard' element={<PrivateRoute element={<Dashboard/>}/>}></Route>
    
    </Routes>
 
    </div>  
    </>
  )
}

export default App