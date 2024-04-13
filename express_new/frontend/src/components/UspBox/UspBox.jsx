import React from 'react'
import './UspBox.css'
import userIcon from '@Assets/user-circle.svg'
const UspBox = () => {
  return (
    <div>
        <div class="text-center">
    <h2>How it works</h2>
  </div>
    <div class="m-4 d-flex flex-row position-relative justify-content-center">
      <div class="col-md-2 justify-content-center">
      <img src={userIcon} alt="" style={{maxWidth: '40%'}}/>
      </div>
      <div class="col-md-2 justify-content-center">
        <img src={userIcon} alt="" style={{maxWidth: '40%'}}/>
      </div>
      <div class="col-md-2 justify-content-center">
      <img src={userIcon} alt="" style={{maxWidth: '40%'}}/>
      </div>
      <div class="col-md-2 justify-content-center">
      <img src={userIcon} alt="" style={{maxWidth: '40%'}}/>
      </div>
      <div class="col-md-2 justify-content-center">
      <img src={userIcon} alt="" style={{maxWidth: '40%'}}/>
      </div>
    </div>
    </div>
  )
}

export default UspBox