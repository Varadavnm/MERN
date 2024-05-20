import React, { useState } from 'react'
import './SignupBox.css'
import axios from 'axios';
import { useDispatch } from 'react-redux'; 
// import { useSelector } from 'react-redux';
import CustomInput from '../common/CustomInput/CustomInput.jsx'
import { errorToast, successToast } from '../../pluggins/toast/Toast'
import { showorhideoader } from '../../redux/generateSlice';
import { useSelector } from 'react-redux';

const SignupBox = ({setBoxType}) => {
  const dispatch  = useDispatch()
  const {showLoader} = useSelector((store)=>store.general)
  const doSignup = async()=>{
    
    if(signupData.password===signupData.confirmpassword){
      
     const response = await axios({
        method:"POST",
        url: "http://localhost:3009/dosignup",
        data: signupData
      })
      dispatch(showorhideoader(true))
     successToast(response.data.message)
     setBoxType('login')
  }else{
    dispatch(showorhideoader(false))
    errorToast("Passwords are not matching")
  }
}

  const [signupData, setsignupData] = useState({})
  const handleChange = (e)=>{
    setsignupData({...signupData,[e.target.name]:e.target.value})
  }
  return (
    <div>
    <div className='d-flex flex-column mt-4'>
    <CustomInput  label={"first_name"} name={'first_name'} value={signupData.first_name} onChange={handleChange}/>
    </div>
    <div className='d-flex flex-column mt-4'>
    <CustomInput  label={"last_name"} name={'last_name'} value={signupData.last_name} onChange={handleChange}/>
    </div>
    <div className='d-flex flex-column mt-4'>
    <CustomInput type={'email'} label={"Email"} name={'email'} value={signupData.email} onChange={handleChange}/>
    </div>
    <div className='d-flex flex-column mt-4'>
    <CustomInput type={'number'} label={"mobile number"} name={'mobile_number'} value={signupData.mobile_number} onChange={handleChange}/>
    </div>
    <div className='d-flex flex-column mt-4'>
    <CustomInput  label={"Address"}  name={"address"} value={signupData.address} onChange={handleChange}/>
    </div>
    <div className='d-flex flex-column mt-4'>
    <CustomInput type={'password'} label={"password"} name={"password"} value={signupData.password} onChange={handleChange} /> 
    </div>
    <div className='d-flex flex-column mt-4'>
    <CustomInput type={'password'} label={"confirmpassword"} name={"confirmpassword"} value={signupData.confirmpassword} onChange={handleChange} /> 
    </div>
    <button className="common-button mt-4 align-self-center" onClick={doSignup}>signup</button>
    <p className="already-account mt-4">Account exists?<i onClick={()=>setBoxType('login')}>Login from here</i></p>
    </div>
  )
}

export default SignupBox