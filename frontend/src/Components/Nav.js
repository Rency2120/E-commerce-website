import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import '../App.css';
import { UserContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import Images from '../images.png'
import Profile from '../profile.png'


function Nav() {
  const { cart } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid main-menue">
        <Link className="navbar-brand" to="/"><img src={Images} alt="" className='img-fluid' style={{ height: '50px' }} /></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2 md:w-0" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            <FaShoppingCart className='icons' onClick={() => navigate('/cart')} /><sub>{cart?.length}</sub>
          </form>
        </div>
        <ul style={{listStyle:'none',marginBottom:"0px"}}>
          <li class="nav-item dropdown">
            <Link className="nav-link dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" to=""><img src={Profile} alt="" className='img-fluid' style={{ height: '50px', width: "50px", borderRadius: '50%' }} /></Link>
            <ul class="dropdown-menu dropdown-menu-center " aria-labelledby="navbarDropdown" >
              <li><Link className="dropdown-item" to="/login">Login</Link></li>
              <li><Link className="dropdown-item" to="/registration">Register</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
