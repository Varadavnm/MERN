import React from 'react'
import './LoginBox.css'
import '../common/CustomInput/CustomInput.jsx'
import CustomInput from '../common/CustomInput/CustomInput.jsx'
const LoginBox = ({setBoxType}) => {
  return (
    <div>
    <div className='d-flex flex-column mt-4'>
      
    <CustomInput  label={"Email"} value={null}/>
    </div>
    <div className='d-flex flex-column mt-4'>
    <CustomInput label={"password"} value={null} />
    <button className="common-button mt-4 align-self-center">login</button>
    <p className="already-account mt-4">Dont have an account?<i onClick={()=>setBoxType('signup')}>signUp here</i></p>
    </div>
    </div>
  )
}

export default LoginBox