import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return<>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link to="/"class="nav-link">AddShop</Link>
          <Link to="/home"class="nav-link">Home</Link>
          <a class="nav-link" href="#">Pricing</a>
        </div>
      </div>
    </div>
  </nav>
  
  </>
}
