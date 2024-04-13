import React, { useState } from 'react'
import './SignupBox.css'
import CustomInput from '../common/CustomInput/CustomInput.jsx'
const SignupBox = ({setBoxType}) => {
  const doSignup = ()=>{
    
  }
  const [signupData, setsignupData] = useState({})
  const handleChange = (e)=>{
    setsignupData({...signupData,[e.target.name]:e.target.value})
  }
  return (
    <div>
    <div className='d-flex flex-column mt-4'>
    <CustomInput  label={"first_name"} name={'first_name'} value={signupData.first_name} onchange={handleChange}/>
    </div>
    <div className='d-flex flex-column mt-4'>
    <CustomInput  label={"last_name"} name={'last_name'} value={signupData.last_name} onchange={handleChange}/>
    </div>
    <div className='d-flex flex-column mt-4'>
    <CustomInput  label={"Email"} name={'email'} value={signupData.email} onchange={handleChange}/>
    </div>
    <div className='d-flex flex-column mt-4'>
    <CustomInput  label={"mobile number"} name={'mobile_number'} value={signupData.mobile_number} onchange={handleChange}/>
    </div>
    <div className='d-flex flex-column mt-4'>
    <CustomInput  label={"Address"}  name={'address'} value={signupData.address} onchange={handleChange}/>
    </div>
    <div className='d-flex flex-column mt-4'>
    <CustomInput label={"password"} name={'password'} value={signupData.password} onchange={handleChange} /> 
    </div>
    <div className='d-flex flex-column mt-4'>
    <CustomInput label={"confirmpassword"} name={'confirmpassword'} value={signupData.confirmpassword} onchange={handleChange} /> 
    </div>
    <button className="common-button mt-4 align-self-center" onclick={doSignup}>login</button>
    <p className="already-account mt-4">Account exists?<i onClick={()=>setBoxType('login')}>Login from here</i></p>
    </div>
  )
}

export default SignupBox