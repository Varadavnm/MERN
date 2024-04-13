import React from 'react';
import AuthPage from '../Pages/AuthPage/AuthPage';
import { Routes,Route } from 'react-router-dom';
import Home from '../Pages/AuthPage/Home/Home';
const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AuthPage/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
        </Routes>
    </div>
  )
}

export default Routing