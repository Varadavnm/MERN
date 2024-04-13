import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import NavbarImage from '@Assets/Navbar.jpg';
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href='/' ><img src={NavbarImage} alt="Navimg" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Link</a>
        </li>
        <li class="user-dropdown dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           User
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><span class="dropdown-item" href="/">Action</span></li>
            <li><span class="dropdown-item" href="/">Another action</span></li>
            <li><span class="dropdown-item" href="/"></span></li>
          </ul>
        </li>
        <li class="nav-item">
          <span class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>

  );
}

export default Navbar