import React, { useState } from 'react';
import './LoginBox.css';
import CustomInput from '../common/CustomInput/CustomInput';
import axios from 'axios';
import { errorToast, successToast } from '../../pluggins/toast/Toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setuserData } from '../../redux/userSlice';
import { showorhideoader } from '../../redux/generateSlice';


const LoginBox = ({ setBoxType }) => {
  const dispatch  = useDispatch()
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate()
  // Handle input change
  const handleLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Perform login
  const doLogin = async () => {
    dispatch(showorhideoader(true))
    try {
      const response = await axios.post('http://localhost:3009/login', loginData);
      if (response.data) {
        successToast('Login successful');
        localStorage.setItem('token',response.data.token)
        localStorage.setItem('user',JSON.stringify(response.data.user))
        console.log(response.data.user)
        setuserData()
        dispatch(setuserData(response.data.user))
        navigate('/home')
      } else {
        errorToast('Something went wrong');
      }
    } catch (error) {
      console.error('Login error:', error);
      errorToast('An error occurred during login');
    }
  };

  return (
    <div>
      <div className='d-flex flex-column mt-4'>
        <CustomInput label={'Email'} value={loginData.email} name={'email'} onChange={handleLogin} />
      </div>
      <div className='d-flex flex-column mt-4'>
        <CustomInput type={'password'} label={'Password'} value={loginData.password} name={'password'} onChange={handleLogin} />
        <button className='common-button mt-4 align-self-center' onClick={doLogin}>
          Login
        </button>
      
        <p className='already-account mt-4'>
          Don't have an account? <i onClick={() => setBoxType('signup')}>Sign up here</i>
        </p>
      </div>
    </div>
  );
};
export default LoginBox;