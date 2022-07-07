import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Register from './Register.js';
import { Link } from 'react-router-dom';
import Login from './Login.js';
import Cart from './Cart.js';



const Navbar = ({popularProductsArray}) => {

  return (
    <>
    <nav className="navbar">
        <div className="left col-4">
          <span className="language">
            EN
            <div className="searchContainer">
              <input className="navInput"></input>
              <FontAwesomeIcon icon={faMagnifyingGlass} class="faMagnifyingGlass" />
            </div>
          </span>
        </div>
        <div className="center col-4">
          <Link to="/" style={{textDecoration: 'none'}}><span className="logo">
            LAMA.
          </span></Link>
        </div>
        <div className="right col-4">
          <Link to='/Register' style={{textDecoration: 'none'}}><span className="menuItems">REGISTER</span></Link>
          <Link to='/Login' style={{textDecoration: 'none'}}><span className="menuItems">SIGN IN</span></Link>
          <Link to='/Cart' style={{textDecoration: 'none'}}><span className="menuItemsCart">
            <FontAwesomeIcon icon={faShoppingCart} class="faShoppingCart" />
          </span>
          </Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar