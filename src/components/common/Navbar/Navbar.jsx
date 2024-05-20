import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import NavbarImage from '@Assets/Navbar.jpg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const {user} = useSelector(state => state.user)
  const navigate = useNavigate()
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href='/' ><img src={NavbarImage} alt="Navimg" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {user.role===1 && <li className="nav-item" onClick={()=>navigate('/add_product')}>
          <h3>add new product</h3> 
        </li>}
        <li className='nav-item' onClick={()=>navigate('/categories/productlist')}>
          Products
          </li>
        <li className="user-dropdown dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           {user.first_name+" "+user.last_name}
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><span className="dropdown-item" href="/">Profile</span></li>
            <li><span className="dropdown-item" href="/">Logout </span></li>
            <li><span className="dropdown-item" href="/"></span></li>
          </ul>
        </li>
        <li className="nav-item">
          <span className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true"></span>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>

  );
}

export default Navbar