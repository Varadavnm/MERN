import React from 'react'
import './Loader.css'
import yoga from '../../../Assets/yoga.jpg'
const Loader = () => {
  return (
    <div className='loader-container'>
       
        <div className="position-relative spinner-container">
        <img src={yoga} height="30px" alt="loader" />
            <div className="spinner"></div>

        </div>
    </div>
  )
}

export default Loader