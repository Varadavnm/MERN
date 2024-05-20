import React from 'react'
import './UspBox.css'
import userIcon from '@Assets/user-circle.svg'
const UspBox = () => {
  return (
    <div>
        <div className="text-center">
    <h2>How it works</h2>
  </div>
    <div className="m-4 d-flex flex-row position-relative justify-content-center">
      <div className="col-md-2 justify-content-center">
      <img src={userIcon} alt="" style={{maxWidth: '40%'}}/>
      </div>
      <div className="col-md-2 justify-content-center">
        <img src={userIcon} alt="" style={{maxWidth: '40%'}}/>
      </div>
      <div className="col-md-2 justify-content-center">
      <img src={userIcon} alt="" style={{maxWidth: '40%'}}/>
      </div>
      <div className="col-md-2 justify-content-center">
      <img src={userIcon} alt="" style={{maxWidth: '40%'}}/>
      </div>
      <div className="col-md-2 justify-content-center">
      <img src={userIcon} alt="" style={{maxWidth: '40%'}}/>
      </div>
    </div>
    </div>
  )
}

export default UspBox