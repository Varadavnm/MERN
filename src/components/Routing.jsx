import React from 'react';
import AuthPage from '../Pages/AuthPage/AuthPage';
import { Routes,Route } from 'react-router-dom';
import Home from '../Pages/AuthPage/Home/Home';
import Newproduct from '../Pages/Newproduct/Newproduct';
import Productlist from '../Pages/Productlist/Productlist';

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AuthPage/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            

            <Route path='/add_product' element={<Newproduct/>}></Route> 
            <Route path="/categories">
              <Route path='productlist' element = {<Productlist/>}/> 
            </Route>
           
    </Routes>
    </div>
  )
}

export default Routing