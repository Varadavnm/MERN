import React, { useState } from 'react';
import './AuthPage.css';
import ayur from '../../Assets/ayur.jpg'
import LoginBox from '../../components/AuthBox/LoginBox';
import SignupBox from '../../components/AuthBox/SignupBox';
const AuthPage = () => {
  const [boxType, setboxType] = useState('login')
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center vh-100 vw-100 authpage'>
      <div className='row vw-'>
        <div className='left-image col-md-6 border-1'style={{backgroundImage: `url(${ayur})`}}>
          <p>Ayurarogya Soukhyam</p>
        </div>
        <div className='col-md-6 right-side border-1'>
        <h3 className="w-100 text-center mt-4 mb-4">{boxType==='login'?'Login':'signUp'}
        {boxType==='login'?<LoginBox setBoxType={setboxType}/>:<SignupBox setBoxType={setboxType}/>}
        </h3>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
