import React from 'react'
import './CustomInput.css'
function CustomInput({type, value, onblur, onchange,label, name}){
  return (
    <div className='common-input-box'>
      <div>
        <input type="text" required className='common-input' value={value} onchange={onchange} onblur={onblur}/>


        <label htmlFor="">{label}</label>
        </div>
    </div>

  )
}

export default CustomInput