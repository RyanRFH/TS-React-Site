import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home"
import Login from "./components/Login"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='flex h-[2000px]'>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </BrowserRouter>
        <h1 className='text-6xl'>ROOT</h1>
    </div>
  );
}

export default App;
